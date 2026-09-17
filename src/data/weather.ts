import { entity } from './entity';
import { L, type Localized } from '../i18n/types';

/**
 * 見帰りの滝（唐津市相知町伊岐佐）の天気と、そこから導く「今日どう動くか」の提案。
 * サーバー側（ビルド時）で取得・キャッシュし、ブラウザ側でも同じロジックで更新する。
 * 滝は渓谷の底にあり、市街地より1〜3℃低く、増水の影響を受けやすい点を織り込んでいる。
 */

export interface CurrentWeather {
  time: string;
  temperature: number | null;
  feelsLike: number | null;
  humidity: number | null;
  precipitation: number | null;
  windSpeed: number | null;
  gusts: number | null;
  code: number | null;
}

export interface DailyWeather {
  date: string;
  code: number | null;
  max: number | null;
  min: number | null;
  precipitation: number | null;
  pop: number | null;
  windMax: number | null;
  gustsMax: number | null;
  uv: number | null;
}

export interface WeatherSnapshot {
  current: CurrentWeather | null;
  daily: DailyWeather[];
  /** 直近3日の積算降水量（mm）— 増水・足元の判断に使う */
  pastRain3d: number | null;
  /** 予測地点の標高（m） */
  elevation: number | null;
  updatedAt: string;
  timezone: string;
}

const ENDPOINT = 'https://api.open-meteo.com/v1/forecast';

export const weatherApiUrl = `${ENDPOINT}?latitude=${entity.latitude}&longitude=${entity.longitude}`
  + '&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_gusts_10m'
  + '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,uv_index_max'
  + '&past_days=3&timezone=Asia%2FTokyo&forecast_days=7';

const TTL_MS = 10 * 60 * 1000;
let cache: { at: number; data: WeatherSnapshot } | null = null;

interface RawWeather {
  timezone?: string;
  elevation?: number;
  current?: Record<string, number | string>;
  daily?: Record<string, (number | string)[]>;
}

const num = (v: unknown): number | null =>
  typeof v === 'number' && Number.isFinite(v) ? v : null;

const arr = (v: unknown): (number | null)[] =>
  Array.isArray(v) ? v.map((x) => num(x)) : [];

/** 今日（Asia/Tokyo）の日付文字列 */
function todayIso(): string {
  const now = new Date();
  const jst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return jst.toISOString().slice(0, 10);
}

export function normalize(raw: RawWeather): WeatherSnapshot {
  const cur = raw.current ?? {};
  const d = raw.daily ?? {};
  const times = ((d.time as string[] | undefined) ?? []).map(String);
  const codes = arr(d.weather_code);
  const maxs = arr(d.temperature_2m_max);
  const mins = arr(d.temperature_2m_min);
  const prec = arr(d.precipitation_sum);
  const pops = arr(d.precipitation_probability_max);
  const winds = arr(d.wind_speed_10m_max);
  const gusts = arr(d.wind_gusts_10m_max);
  const uvs = arr(d.uv_index_max);

  const daily: DailyWeather[] = times.map((t, i) => ({
    date: t,
    code: codes[i] ?? null,
    max: maxs[i] ?? null,
    min: mins[i] ?? null,
    precipitation: prec[i] ?? null,
    pop: pops[i] ?? null,
    windMax: winds[i] ?? null,
    gustsMax: gusts[i] ?? null,
    uv: uvs[i] ?? null,
  }));

  const today = todayIso();
  const startIdx = Math.max(0, times.findIndex((t) => t >= today));
  const past = prec.slice(0, startIdx === 0 ? 0 : startIdx).filter((v): v is number => v !== null);
  const pastRain3d = past.length ? Math.round(past.reduce((a, b) => a + b, 0) * 10) / 10 : null;

  return {
    current: raw.current
      ? {
          time: String(cur.time ?? ''),
          temperature: num(cur.temperature_2m),
          feelsLike: num(cur.apparent_temperature),
          humidity: num(cur.relative_humidity_2m),
          precipitation: num(cur.precipitation),
          windSpeed: num(cur.wind_speed_10m),
          gusts: num(cur.wind_gusts_10m),
          code: num(cur.weather_code),
        }
      : null,
    daily,
    pastRain3d,
    elevation: num(raw.elevation),
    updatedAt: new Date().toISOString(),
    timezone: raw.timezone ?? 'Asia/Tokyo',
  };
}

export async function getWeather(): Promise<WeatherSnapshot | null> {
  if (cache && Date.now() - cache.at < TTL_MS) return cache.data;
  try {
    const res = await fetch(weatherApiUrl, { headers: { accept: 'application/json' } });
    if (!res.ok) throw new Error(`weather ${res.status}`);
    const data = normalize((await res.json()) as RawWeather);
    cache = { at: Date.now(), data };
    return data;
  } catch {
    return cache?.data ?? null;
  }
}

/* ---------- 天気コード ---------- */
export interface WeatherDesc {
  label: Localized;
  icon: string;
  tone: 'clear' | 'cloud' | 'rain' | 'storm' | 'snow' | 'fog';
}

const WMO: Record<number, WeatherDesc> = {
  0: { label: { ja: '快晴', en: 'Clear', 'zh-Hant': '晴' }, icon: '☀️', tone: 'clear' },
  1: { label: { ja: '晴れ', en: 'Sunny', 'zh-Hant': '晴' }, icon: '🌤', tone: 'clear' },
  2: { label: { ja: '晴れときどきくもり', en: 'Sunny intervals', 'zh-Hant': '晴時多雲' }, icon: '⛅', tone: 'cloud' },
  3: { label: { ja: 'くもり', en: 'Cloudy', 'zh-Hant': '多雲' }, icon: '☁️', tone: 'cloud' },
  45: { label: { ja: '霧', en: 'Fog', 'zh-Hant': '霧' }, icon: '🌫', tone: 'fog' },
  48: { label: { ja: '濃い霧', en: 'Dense fog', 'zh-Hant': '濃霧' }, icon: '🌫', tone: 'fog' },
  51: { label: { ja: '小雨', en: 'Light drizzle', 'zh-Hant': '小雨' }, icon: '🌦', tone: 'rain' },
  53: { label: { ja: '雨', en: 'Rain', 'zh-Hant': '雨' }, icon: '🌦', tone: 'rain' },
  55: { label: { ja: 'やや強い雨', en: 'Moderate rain', 'zh-Hant': '中雨' }, icon: '🌧', tone: 'rain' },
  56: { label: { ja: 'みぞれ', en: 'Freezing drizzle', 'zh-Hant': '凍雨' }, icon: '🌨', tone: 'snow' },
  57: { label: { ja: 'みぞれ', en: 'Freezing drizzle', 'zh-Hant': '凍雨' }, icon: '🌨', tone: 'snow' },
  61: { label: { ja: '雨', en: 'Rain', 'zh-Hant': '雨' }, icon: '🌧', tone: 'rain' },
  63: { label: { ja: 'やや強い雨', en: 'Moderate rain', 'zh-Hant': '中雨' }, icon: '🌧', tone: 'rain' },
  65: { label: { ja: '強い雨', en: 'Heavy rain', 'zh-Hant': '大雨' }, icon: '🌧', tone: 'rain' },
  66: { label: { ja: '凍雨', en: 'Freezing rain', 'zh-Hant': '凍雨' }, icon: '🌨', tone: 'snow' },
  67: { label: { ja: '凍雨', en: 'Freezing rain', 'zh-Hant': '凍雨' }, icon: '🌨', tone: 'snow' },
  71: { label: { ja: '雪', en: 'Snow', 'zh-Hant': '雪' }, icon: '🌨', tone: 'snow' },
  73: { label: { ja: '雪', en: 'Snow', 'zh-Hant': '雪' }, icon: '🌨', tone: 'snow' },
  75: { label: { ja: '大雪', en: 'Heavy snow', 'zh-Hant': '大雪' }, icon: '❄️', tone: 'snow' },
  77: { label: { ja: '雪', en: 'Snow', 'zh-Hant': '雪' }, icon: '❄️', tone: 'snow' },
  80: { label: { ja: 'にわか雨', en: 'Showers', 'zh-Hant': '陣雨' }, icon: '🌦', tone: 'rain' },
  81: { label: { ja: 'にわか雨', en: 'Showers', 'zh-Hant': '陣雨' }, icon: '🌧', tone: 'rain' },
  82: { label: { ja: '激しいにわか雨', en: 'Violent showers', 'zh-Hant': '強陣雨' }, icon: '🌧', tone: 'rain' },
  85: { label: { ja: 'にわか雪', en: 'Snow showers', 'zh-Hant': '陣雪' }, icon: '🌨', tone: 'snow' },
  86: { label: { ja: 'にわか雪', en: 'Snow showers', 'zh-Hant': '陣雪' }, icon: '❄️', tone: 'snow' },
  95: { label: { ja: '雷雨', en: 'Thunderstorm', 'zh-Hant': '雷雨' }, icon: '⛈', tone: 'storm' },
  96: { label: { ja: '雷雨・ひょう', en: 'Thunderstorm & hail', 'zh-Hant': '雷雨・冰雹' }, icon: '⛈', tone: 'storm' },
  99: { label: { ja: '激しい雷雨', en: 'Severe thunderstorm', 'zh-Hant': '強烈雷雨' }, icon: '⛈', tone: 'storm' },
};

export function describe(code: number | null, locale: 'ja' | 'en' | 'zh-Hant' = 'ja'): WeatherDesc {
  if (code === null) return { label: { ja: '—', en: '—', 'zh-Hant': '—' }, icon: '…', tone: 'cloud' };
  return WMO[code] ?? { label: { ja: 'くもり', en: 'Cloudy', 'zh-Hant': '多雲' }, icon: '☁️', tone: 'cloud' };
}

const isRain = (code: number | null) => code !== null && [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code);
const isHeavy = (code: number | null) => code !== null && [55, 63, 65, 81, 82].includes(code);
const isStorm = (code: number | null) => code !== null && [95, 96, 99].includes(code);
const isFog = (code: number | null) => code !== null && [45, 48].includes(code);
const isSnow = (code: number | null) => code !== null && [56, 57, 66, 67, 71, 73, 75, 77, 85, 86].includes(code);
const isClear = (code: number | null) => code !== null && [0, 1].includes(code);

/* ---------- 提案エンジン ---------- */
export interface AdviceItem {
  icon: string;
  text: string;
}

export interface WeatherAdvice {
  risks: AdviceItem[];
  wear: AdviceItem[];
  plan: AdviceItem[];
  gear: AdviceItem[];
  umbrella: { level: 'need' | 'maybe' | 'none'; label: string; text: string };
}

/** 風速（m/s）を体感的な日本語に */
export function windLabel(ms: number | null, locale: 'ja' | 'en' | 'zh-Hant' = 'ja'): string {
  const t = (o: Localized) => L(o, locale);
  if (ms === null) return '—';
  if (ms < 3) return t({ ja: 'ほとんど無風', en: 'Calm', 'zh-Hant': '幾乎無風' });
  if (ms < 6) return t({ ja: 'やや風あり', en: 'Light breeze', 'zh-Hant': '微風' });
  if (ms < 10.8) return t({ ja: '風が強め', en: 'Breezy', 'zh-Hant': '風稍強' });
  if (ms < 13.9) return t({ ja: '強い風', en: 'Strong wind', 'zh-Hant': '強風' });
  return t({ ja: '非常に強い風', en: 'Very strong wind', 'zh-Hant': '非常強的風' });
}

export function buildAdvice(snap: WeatherSnapshot | null, locale: 'ja' | 'en' | 'zh-Hant' = 'ja'): WeatherAdvice {
  const t = (o: Localized) => L(o, locale);
  const risks: AdviceItem[] = [];
  const wear: AdviceItem[] = [];
  const plan: AdviceItem[] = [];
  const gear: AdviceItem[] = [];

  if (!snap) {
    return {
      risks: [],
      wear: [],
      plan: [{ icon: 'ℹ️', text: t({ ja: '天気を取得できていません。出発前に最新の予報を確認してください。', en: 'Weather unavailable. Check the latest forecast before leaving.', 'zh-Hant': '無法取得天氣，出發前請確認最新預報。' }) }],
      gear: [],
      umbrella: { level: 'none', label: '—', text: t({ ja: '天気を取得できていません。出発前に最新の予報を確認してください。', en: 'Weather unavailable. Check the latest forecast before leaving.', 'zh-Hant': '無法取得天氣，出發前請確認最新預報。' }) },
    };
  }

  const now = snap.current;
  const today = snap.daily[0] ?? null;
  const code = now?.code ?? today?.code ?? null;
  const pop = today?.pop ?? 0;
  const rain = today?.precipitation ?? 0;
  const max = today?.max ?? null;
  const min = today?.min ?? null;
  const uv = today?.uv ?? null;
  const wind = Math.max(today?.windMax ?? 0, now?.windSpeed ?? 0);
  const gust = Math.max(today?.gustsMax ?? 0, now?.gusts ?? 0);
  const humidity = now?.humidity ?? null;
  const feels = now?.feelsLike ?? null;
  const pastRain = snap.pastRain3d ?? 0;
  const diff = max !== null && min !== null ? max - min : null;

  /* --- リスク（最優先・該当時のみ） --- */
  if (isStorm(code)) {
    risks.push({ icon: '⛈', text: t({ ja: '雷雨の可能性：河原や開けた場所に出ない、樹木の下で雨宿りしないでください。早めに引き上げましょう。', en: 'Possible thunderstorm: avoid open riverbeds, don’t shelter under trees, and head back early.', 'zh-Hant': '可能雷雨：勿至河床或空曠處，勿在樹下避雨，及早撤退。' }) });
  }
  if (isHeavy(code) || rain >= 10 || (pastRain >= 100 && rain >= 3)) {
    risks.push({ icon: '🌊', text: t({ ja: '増水・足元悪化に注意：渓谷は短時間で水位が上がります。増水時は河原へ降りず、遠景からの観瀑にとどめてください。', en: 'Swelling & slippery ground: the gorge rises fast. Don’t go down to the river; view from afar when swollen.', 'zh-Hant': '注意漲水與濕滑：溪谷水位短時間內上升。漲水時勿下河床，遠觀即可。' }) });
  }
  if (gust >= 13.9) {
    risks.push({ icon: '💨', text: t({ ja: '非常に強い風：倒木・落枝・飛来物に注意。傘は使わず、帽子や荷物が飛ばされないよう気をつけて。', en: 'Very strong wind: watch for falling branches/debris. Skip the umbrella; secure hats and bags.', 'zh-Hant': '非常強風：注意落木、斷枝、飛來物。勿用傘，固定帽子與行李。' }) });
  }
  if (pastRain >= 150) {
    risks.push({ icon: '⚠️', text: t({ ja: 'ここ数日でまとまった雨：遊歩道がぬかるみ、岩が滑りやすくなっています。石段では手すりを使い、無理な撮影は控えて。', en: 'Heavy rain lately: trails are muddy and rock slippery. Use rails on steps, no risky shots.', 'zh-Hant': '近日降雨集中：步道泥濘、岩石濕滑。石階扶扶手，勿勉強拍攝。' }) });
  }
  if (isFog(code)) {
    risks.push({ icon: '🌫', text: t({ ja: '霧で見通しが悪い：遠景の観瀑や運転は控えめに。足元と対向車に注意してください。', en: 'Poor visibility in fog: ease off distant viewing and driving; mind your footing and traffic.', 'zh-Hant': '霧中視線不佳：減少遠觀與開車，注意腳下與對向車。' }) });
  }
  if ((feels ?? max ?? 0) >= 35) {
    risks.push({ icon: '🥵', text: t({ ja: '猛暑が予想されます：日中の長時間滞在は避け、こまめな水分・塩分補給を。体調が悪ければすぐ引き返して。', en: 'Heatwave likely: avoid long midday stays, sip water/salt often, turn back if unwell.', 'zh-Hant': '預計酷熱：避免正午久留，勤補水與鹽分，不適即回頭。' }) });
  }
  if (isSnow(code) || (min !== null && min <= 1)) {
    risks.push({ icon: '❄️', text: t({ ja: '冷え込み・凍結に注意：石段や岩が凍ると非常に滑りやすくなります。滑りにくい靴で、無理な区間は回避を。', en: 'Cold & ice: frozen steps/rock are very slippery. Wear grippy shoes, skip risky sections.', 'zh-Hant': '注意嚴寒與結冰：石階與岩石結冰極滑，穿止滑鞋，避開危險段。' }) });
  }

  /* --- 出行穿搭 --- */
  if ((max ?? 0) >= 32 || (feels ?? 0) >= 33) {
    wear.push({ icon: '👕', text: t({ ja: '気温が高め。通気性の良い軽装で、汗をかいたら着替えを一枚。', en: 'Warm: light breathable clothes, pack a change if you sweat.', 'zh-Hant': '氣溫偏高，穿透氣輕裝，流汗備替換衣物。' }) });
  } else if ((max ?? 99) <= 10) {
    wear.push({ icon: '🧥', text: t({ ja: '気温が低め。厚手の上着と手袋・首元の防寒を。', en: 'Cold: a warm coat with gloves and neck protection.', 'zh-Hant': '氣溫偏低，厚外套加手套與頸部保暖。' }) });
  } else if ((max ?? 99) <= 18) {
    wear.push({ icon: '🧥', text: t({ ja: '肌寒い一日。羽織るものを一枚持って。', en: 'Chilly: bring a layer to throw on.', 'zh-Hant': '微涼，帶一件可披的外套。' }) });
  } else {
    wear.push({ icon: '👕', text: t({ ja: '過ごしやすい気温。動きやすい服装でOK。', en: 'Mild: comfortable, easy-to-move clothes.', 'zh-Hant': '氣溫舒適，好活動的衣物即可。' }) });
  }
  if (diff !== null && diff > 8) {
    wear.push({ icon: '🌡', text: t({ ja: `昼夜の気温差が約${Math.round(diff)}℃。朝晩用に一枚多く用意すると安心。`, en: `Daily swing ~${Math.round(diff)}°C — an extra layer for morning/evening helps.`, 'zh-Hant': `日夜溫差約${Math.round(diff)}℃，早晚多備一件較安心。` }) });
  }
  if (humidity !== null && humidity >= 75 && (max ?? 0) >= 25) {
    wear.push({ icon: '💧', text: t({ ja: '湿度が高く蒸し暑い。吸湿・速乾の衣類が快適。', en: 'Humid: moisture-wicking quick-dry clothes are comfy.', 'zh-Hant': '濕度高悶熱，吸濕快乾衣物較舒適。' }) });
  }
  if (isRain(code) || pop >= 60) {
    wear.push({ icon: '🧥', text: t({ ja: '雨具前提の服装。濡れても乾きやすい素材を選んで。', en: 'Plan for rain gear; pick quick-drying fabrics.', 'zh-Hant': '以雨具為前提，選易乾材質。' }) });
  }
  wear.push({ icon: '🥾', text: t({ ja: '渓谷は濡れた石段と岩が続きます。滑りにくい靴が必須（ヒール・サンダルは不向き）。', en: 'The gorge is wet steps and rock — grippy shoes required (no heels/sandals).', 'zh-Hant': '溪谷多濕石階與岩石，必備止滑鞋（勿穿高跟／涼鞋）。' }) });

  /* --- 游玩安排 --- */
  if (isStorm(code)) {
    plan.push({ icon: '🗺', text: t({ ja: '屋外観瀑は短時間に切り上げ、車内か市街地で天候の回復を待つ判断を。', en: 'Cut outdoor viewing short; wait in the car or town for weather to clear.', 'zh-Hant': '縮短戶外觀瀑，在車上或市區等候天氣轉好。' }) });
  } else if (isHeavy(code) || rain >= 10) {
    plan.push({ icon: '🗺', text: t({ ja: '強い雨の日は「遠景で見るだけ」にして、長居は避けるのが無難。無理せず別日に。', en: 'On heavy-rain days, just view from afar and don’t linger — try another day.', 'zh-Hant': '大雨天「只看遠景」，勿久留，改日再訪。' }) });
  } else if (pop >= 60) {
    plan.push({ icon: '🗺', text: t({ ja: '降水確率が高め。午前中のうちに済ませるか、屋内・市街地の予定と入れ替えを検討。', en: 'High rain chance: finish by mid-morning or swap in indoor/town plans.', 'zh-Hant': '降雨機率高，上午完成或改室內／市區行程。' }) });
  } else if (isRain(code)) {
    plan.push({ icon: '🗺', text: t({ ja: '小雨なら渓谷は狙い目。人も少なく、あじさいの色がやわらかく写ります。足元だけ慎重に。', en: 'Light rain is prime for the gorge — fewer people, softer blooms. Just mind footing.', 'zh-Hant': '細雨時溪谷正佳，人少且花色柔和，注意腳下即可。' }) });
  } else if (isClear(code)) {
    plan.push({ icon: '🗺', text: t({ ja: '天気が良いので屋外観瀑に最適。朝のやわらかい光、または夕方のライトアップが狙い目。', en: 'Good weather — ideal for outdoor viewing; aim for soft morning light or the light-up.', 'zh-Hant': '天氣好最適戶外觀瀑，清晨柔光或傍晚點燈為佳。' }) });
  } else {
    plan.push({ icon: '🗺', text: t({ ja: '光がやわらかく、撮影向きのコンディション。長めの散策でも疲れにくいでしょう。', en: 'Soft light, good for photos; a longer walk stays easy.', 'zh-Hant': '光線柔和適合拍照，長時間散步也不易累。' }) });
  }
  if ((max ?? 0) >= 32) {
    plan.push({ icon: '🕐', text: t({ ja: '正午前後は避け、朝夕の涼しい時間帯に散策を。休憩はこまめに。', en: 'Avoid midday; walk at cooler dawn/dusk and rest often.', 'zh-Hant': '避開正午，清晨或傍晚涼爽時散步，勤休息。' }) });
  }
  if (uv !== null && uv >= 8) {
    plan.push({ icon: '☀️', text: t({ ja: '日差しが強い日。木陰の多い下流ルートを選ぶと快適です。', en: 'Strong sun: the shady downstream route is comfortable.', 'zh-Hant': '日照強，選樹蔭多的下游路線較舒適。' }) });
  }
  if (pastRain >= 60) {
    plan.push({ icon: '🌊', text: t({ ja: '直近の雨で水量が多め。迫力は増しますが、滝つぼ周辺へは近づきすぎないで。', en: 'Recent rain means more flow and power — but don’t get too close to the pool.', 'zh-Hant': '近日降雨水量較多、氣勢更盛，但勿太靠近瀑潭。' }) });
  } else if (pastRain !== null && pastRain < 5) {
    plan.push({ icon: '🪨', text: t({ ja: '雨が少なかったため水量は控えめ。岩肌の造形をじっくり見る日に向きます。', en: 'Little rain, so modest flow — a good day to study the rock form.', 'zh-Hant': '降雨少水量平穩，適合細看岩壁造形。' }) });
  }
  plan.push({ icon: '🚶', text: t({ ja: 'ロープや柵の外に出ない、河原へ降りない。立ち入り表示は必ず守ってください。', en: 'Stay inside ropes/fences, don’t go down to the river, obey all signs.', 'zh-Hant': '不越繩索與護欄、勿下河床，務必遵守告示。' }) });

  /* --- 随身物品 --- */
  if (pop >= 60 || isRain(code)) {
    gear.push({ icon: '☂️', text: t({ ja: gust >= 10.8 ? '雨衣（風が強く長傘は危険）' : '折りたたみ傘または雨衣', en: gust >= 10.8 ? 'Raincoat (wind makes long umbrellas risky)' : 'Folding umbrella or raincoat', 'zh-Hant': gust >= 10.8 ? '雨衣（風強，長傘危險）' : '摺疊傘或雨衣' }) });
  } else if (pop >= 30) {
    gear.push({ icon: '☂️', text: t({ ja: '念のための折りたたみ傘', en: 'A folding umbrella just in case', 'zh-Hant': '備用摺疊傘' }) });
  }
  if (isRain(code) || gust >= 10.8) {
    gear.push({ icon: '🧻', text: t({ ja: 'レンズ・スマホ用のタオル（水しぶきと雨対策）', en: 'Towel for lens/phone (spray & rain)', 'zh-Hant': '鏡頭／手機用毛巾（水花與雨）' }) });
  }
  if ((max ?? 0) >= 28 || (feels ?? 0) >= 30) {
    gear.push({ icon: '🥤', text: t({ ja: '飲み物（多めに）・塩分タブレット', en: 'Drinks (extra) & salt tablets', 'zh-Hant': '飲料（多備）・鹽分錠' }) });
  }
  if (uv !== null && uv >= 5) {
    gear.push({ icon: '🧴', text: t({ ja: '日焼け止め・サングラス・帽子', en: 'Sunscreen, sunglasses, hat', 'zh-Hant': '防曬、太陽眼鏡、帽子' }) });
  }
  if ((min ?? 99) <= 8) {
    gear.push({ icon: '🧣', text: t({ ja: '防寒具（手袋・マフラーなど）', en: 'Warm gear (gloves, scarf)', 'zh-Hant': '禦寒物（手套、圍巾）' }) });
  }
  if (gust >= 10.8) {
    gear.push({ icon: '🧢', text: t({ ja: '飛ばされにくい帽子（あごひも付きだと安心）', en: 'A hat that won’t blow off (chin strap helps)', 'zh-Hant': '不易吹飛的帽子（有下巴繩更安心）' }) });
  }
  if (isFog(code)) {
    gear.push({ icon: '🔦', text: t({ ja: '足元を照らす小型ライト', en: 'A small light for your footing', 'zh-Hant': '照亮腳邊的小燈' }) });
  }
  gear.push({ icon: '🩹', text: t({ ja: '絆創膏・虫よけ（夏場）・ティッシュ', en: 'Plasters, repellent (summer), tissue', 'zh-Hant': 'OK繃、防蚊（夏天）、衛生紙' }) });
  gear.push({ icon: '🗑', text: t({ ja: 'ごみ袋（散策路にごみ箱は多くありません）', en: 'Trash bag (few bins on the trail)', 'zh-Hant': '垃圾袋（步道垃圾桶不多）' }) });

  /* --- 傘判定 --- */
  let umbrella: WeatherAdvice['umbrella'];
  if (isStorm(code)) {
    umbrella = { level: 'need', label: t({ ja: '雷雨', en: 'Storm', 'zh-Hant': '雷雨' }), text: t({ ja: '傘より安全確保を優先。屋内か車でやり過ごしてください。', en: 'Safety first over an umbrella — wait it out indoors or in the car.', 'zh-Hant': '優先確保安全而非傘，在室內或車上避過。' }) };
  } else if (pop >= 60 || rain >= 5 || (isRain(code) && (now?.precipitation ?? 0) > 0.1)) {
    umbrella = { level: 'need', label: t({ ja: '必要', en: 'Needed', 'zh-Hant': '必要' }), text: t({ ja: '傘（雨衣）が必要です。石段と岩が滑りやすくなるので足元に注意。', en: 'Umbrella (or raincoat) needed; steps and rock get slippery — mind footing.', 'zh-Hant': '需要傘（雨衣）。石階與岩石變滑，注意腳下。' }) };
  } else if (pop >= 30 || rain >= 1) {
    umbrella = { level: 'maybe', label: t({ ja: '念のため', en: 'Just in case', 'zh-Hant': '備用' }), text: t({ ja: '折りたたみ傘があると安心。渓谷は天気が変わりやすいので雨具を一枚。', en: 'A folding umbrella helps; the gorge changes fast, bring rain gear.', 'zh-Hant': '有摺疊傘較安心，溪谷天氣變化快，備雨具。' }) };
  } else {
    umbrella = { level: 'none', label: t({ ja: '不要', en: 'Not needed', 'zh-Hant': '不需' }), text: t({ ja: '傘は基本的に不要。日差しと虫よけ対策を。', en: 'Umbrella basically unneeded; plan for sun and bugs.', 'zh-Hant': '基本不需傘，注意防曬防蚊。' }) };
  }

  return { risks, wear, plan, gear, umbrella };
}

/** 1日のひとこと（週間カード用） */
export function dayHint(d: DailyWeather, past: boolean, locale: 'ja' | 'en' | 'zh-Hant' = 'ja'): string {
  const t = (o: Localized) => L(o, locale);
  if (isStorm(d.code ?? null)) return t({ ja: '雷雨注意', en: 'Storm watch', 'zh-Hant': '注意雷雨' });
  if ((d.precipitation ?? 0) >= 10) return t({ ja: '大雨・増水注意', en: 'Heavy rain / swelling', 'zh-Hant': '大雨・漲水注意' });
  if ((d.pop ?? 0) >= 60) return t({ ja: '傘が必要', en: 'Bring an umbrella', 'zh-Hant': '需帶傘' });
  if (isRain(d.code ?? null)) return t({ ja: '小雨・足元注意', en: 'Light rain / footing', 'zh-Hant': '小雨・注意腳下' });
  if ((d.max ?? 0) >= 32) return t({ ja: '暑さ対策', en: 'Heat care', 'zh-Hant': '防暑' });
  if ((d.gustsMax ?? 0) >= 13.9) return t({ ja: '強風注意', en: 'Strong wind', 'zh-Hant': '注意強風' });
  if (isFog(d.code ?? null)) return t({ ja: '霧・視界注意', en: 'Fog / vision', 'zh-Hant': '霧・視線注意' });
  if (isClear(d.code ?? null)) return t({ ja: '観瀑に最適', en: 'Best for viewing', 'zh-Hant': '最適觀瀑' });
  return past ? '' : t({ ja: '散策しやすい', en: 'Good for walking', 'zh-Hant': '適合散步' });
}

const WEEK = ['日', '月', '火', '水', '木', '金', '土'];
const WEEK_EN = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export function formatDay(iso: string, index: number, locale: 'ja' | 'en' | 'zh-Hant' = 'ja'): { label: string; week: string } {
  const d = new Date(`${iso}T00:00:00+09:00`);
  if (Number.isNaN(d.getTime())) return { label: iso.slice(5).replace('-', '/'), week: '' };
  const label = `${d.getMonth() + 1}/${d.getDate()}`;
  let week: string;
  if (index === 0) week = locale === 'ja' ? '今日' : locale === 'en' ? 'Today' : '今天';
  else if (index === 1) week = locale === 'ja' ? '明日' : locale === 'en' ? 'Tomorrow' : '明天';
  else week = locale === 'ja' ? `${WEEK[d.getDay()]}曜` : locale === 'en' ? WEEK_EN[d.getDay()] : `${WEEK[d.getDay()]}曜`;
  return { label, week };
}
