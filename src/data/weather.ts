import { entity } from './entity';

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

  // 今日より前（past_days=3）の降水を合算
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
  label: string;
  icon: string;
  tone: 'clear' | 'cloud' | 'rain' | 'storm' | 'snow' | 'fog';
}

const WMO: Record<number, WeatherDesc> = {
  0: { label: '快晴', icon: '☀️', tone: 'clear' },
  1: { label: '晴れ', icon: '🌤', tone: 'clear' },
  2: { label: '晴れときどきくもり', icon: '⛅', tone: 'cloud' },
  3: { label: 'くもり', icon: '☁️', tone: 'cloud' },
  45: { label: '霧', icon: '🌫', tone: 'fog' },
  48: { label: '濃い霧', icon: '🌫', tone: 'fog' },
  51: { label: '小雨', icon: '🌦', tone: 'rain' },
  53: { label: '雨', icon: '🌦', tone: 'rain' },
  55: { label: 'やや強い雨', icon: '🌧', tone: 'rain' },
  56: { label: 'みぞれ', icon: '🌨', tone: 'snow' },
  57: { label: 'みぞれ', icon: '🌨', tone: 'snow' },
  61: { label: '雨', icon: '🌧', tone: 'rain' },
  63: { label: 'やや強い雨', icon: '🌧', tone: 'rain' },
  65: { label: '強い雨', icon: '🌧', tone: 'rain' },
  66: { label: '凍雨', icon: '🌨', tone: 'snow' },
  67: { label: '凍雨', icon: '🌨', tone: 'snow' },
  71: { label: '雪', icon: '🌨', tone: 'snow' },
  73: { label: '雪', icon: '🌨', tone: 'snow' },
  75: { label: '大雪', icon: '❄️', tone: 'snow' },
  77: { label: '雪', icon: '❄️', tone: 'snow' },
  80: { label: 'にわか雨', icon: '🌦', tone: 'rain' },
  81: { label: 'にわか雨', icon: '🌧', tone: 'rain' },
  82: { label: '激しいにわか雨', icon: '🌧', tone: 'rain' },
  85: { label: 'にわか雪', icon: '🌨', tone: 'snow' },
  86: { label: 'にわか雪', icon: '❄️', tone: 'snow' },
  95: { label: '雷雨', icon: '⛈', tone: 'storm' },
  96: { label: '雷雨・ひょう', icon: '⛈', tone: 'storm' },
  99: { label: '激しい雷雨', icon: '⛈', tone: 'storm' },
};

export function describe(code: number | null): WeatherDesc {
  if (code === null) return { label: '—', icon: '…', tone: 'cloud' };
  return WMO[code] ?? { label: 'くもり', icon: '☁️', tone: 'cloud' };
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
export function windLabel(ms: number | null): string {
  if (ms === null) return '—';
  if (ms < 3) return 'ほとんど無風';
  if (ms < 6) return 'やや風あり';
  if (ms < 10.8) return '風が強め';
  if (ms < 13.9) return '強い風';
  return '非常に強い風';
}

export function buildAdvice(snap: WeatherSnapshot | null): WeatherAdvice {
  const risks: AdviceItem[] = [];
  const wear: AdviceItem[] = [];
  const plan: AdviceItem[] = [];
  const gear: AdviceItem[] = [];

  if (!snap) {
    return {
      risks: [],
      wear: [],
      plan: [{ icon: 'ℹ️', text: '天気を取得できていません。出発前に最新の予報を確認してください。' }],
      gear: [],
      umbrella: { level: 'none', label: '—', text: '天気を取得できていません。出発前に最新の予報を確認してください。' },
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
    risks.push({ icon: '⛈', text: '雷雨の可能性：河原や開けた場所に出ない、樹木の下で雨宿りしないでください。早めに引き上げましょう。' });
  }
  if (isHeavy(code) || rain >= 10 || (pastRain >= 100 && rain >= 3)) {
    risks.push({ icon: '🌊', text: '増水・足元悪化に注意：渓谷は短時間で水位が上がります。増水時は河原へ降りず、遠景からの観瀑にとどめてください。' });
  }
  if (gust >= 13.9) {
    risks.push({ icon: '💨', text: '非常に強い風：倒木・落枝・飛来物に注意。傘は使わず、帽子や荷物が飛ばされないよう気をつけて。' });
  }
  if (pastRain >= 150) {
    risks.push({ icon: '⚠️', text: 'ここ数日でまとまった雨：遊歩道がぬかるみ、岩が滑りやすくなっています。石段では手すりを使い、無理な撮影は控えて。' });
  }
  if (isFog(code)) {
    risks.push({ icon: '🌫', text: '霧で見通しが悪い：遠景の観瀑や運転は控えめに。足元と対向車に注意してください。' });
  }
  if ((feels ?? max ?? 0) >= 35) {
    risks.push({ icon: '🥵', text: '猛暑が予想されます：日中の長時間滞在は避け、こまめな水分・塩分補給を。体調が悪ければすぐ引き返して。' });
  }
  if (isSnow(code) || (min !== null && min <= 1)) {
    risks.push({ icon: '❄️', text: '冷え込み・凍結に注意：石段や岩が凍ると非常に滑りやすくなります。滑りにくい靴で、無理な区間は回避を。' });
  }

  /* --- 出行穿搭 --- */
  if ((max ?? 0) >= 32 || (feels ?? 0) >= 33) {
    wear.push({ icon: '👕', text: '気温が高め。通気性の良い軽装で、汗をかいたら着替えを一枚。' });
  } else if ((max ?? 99) <= 10) {
    wear.push({ icon: '🧥', text: '気温が低め。厚手の上着と手袋・首元の防寒を。' });
  } else if ((max ?? 99) <= 18) {
    wear.push({ icon: '🧥', text: '肌寒い一日。羽織るものを一枚持って。' });
  } else {
    wear.push({ icon: '👕', text: '過ごしやすい気温。動きやすい服装でOK。' });
  }
  if (diff !== null && diff > 8) {
    wear.push({ icon: '🌡', text: `昼夜の気温差が約${Math.round(diff)}℃。朝晩用に一枚多く用意すると安心。` });
  }
  if (humidity !== null && humidity >= 75 && (max ?? 0) >= 25) {
    wear.push({ icon: '💧', text: '湿度が高く蒸し暑い。吸湿・速乾の衣類が快適。' });
  }
  if (isRain(code) || pop >= 60) {
    wear.push({ icon: '🧥', text: '雨具前提の服装。濡れても乾きやすい素材を選んで。' });
  }
  wear.push({ icon: '🥾', text: '渓谷は濡れた石段と岩が続きます。滑りにくい靴が必須（ヒール・サンダルは不向き）。' });

  /* --- 游玩安排 --- */
  if (isStorm(code)) {
    plan.push({ icon: '🗺', text: '屋外観瀑は短時間に切り上げ、車内か市街地で天候の回復を待つ判断を。' });
  } else if (isHeavy(code) || rain >= 10) {
    plan.push({ icon: '🗺', text: '強い雨の日は「遠景で見るだけ」にして、長居は避けるのが無難。無理せず別日に。' });
  } else if (pop >= 60) {
    plan.push({ icon: '🗺', text: '降水確率が高め。午前中のうちに済ませるか、屋内・市街地の予定と入れ替えを検討。' });
  } else if (isRain(code)) {
    plan.push({ icon: '🗺', text: '小雨なら渓谷は狙い目。人も少なく、あじさいの色がやわらかく写ります。足元だけ慎重に。' });
  } else if (isClear(code)) {
    plan.push({ icon: '🗺', text: '天気が良いので屋外観瀑に最適。朝のやわらかい光、または夕方のライトアップが狙い目。' });
  } else {
    plan.push({ icon: '🗺', text: '光がやわらかく、撮影向きのコンディション。長めの散策でも疲れにくいでしょう。' });
  }
  if ((max ?? 0) >= 32) {
    plan.push({ icon: '🕐', text: '正午前後は避け、朝夕の涼しい時間帯に散策を。休憩はこまめに。' });
  }
  if (uv !== null && uv >= 8) {
    plan.push({ icon: '☀️', text: '日差しが強い日。木陰の多い下流ルートを選ぶと快適です。' });
  }
  if (pastRain >= 60) {
    plan.push({ icon: '🌊', text: '直近の雨で水量が多め。迫力は増しますが、滝つぼ周辺へは近づきすぎないで。' });
  } else if (pastRain !== null && pastRain < 5) {
    plan.push({ icon: '🪨', text: '雨が少なかったため水量は控えめ。岩肌の造形をじっくり見る日に向きます。' });
  }
  plan.push({ icon: '🚶', text: 'ロープや柵の外に出ない、河原へ降りない。立ち入り表示は必ず守ってください。' });

  /* --- 随身物品 --- */
  if (pop >= 60 || isRain(code)) {
    gear.push({ icon: '☂️', text: gust >= 10.8 ? '雨衣（風が強く長傘は危険）' : '折りたたみ傘または雨衣' });
  } else if (pop >= 30) {
    gear.push({ icon: '☂️', text: '念のための折りたたみ傘' });
  }
  if (isRain(code) || gust >= 10.8) {
    gear.push({ icon: '🧻', text: 'レンズ・スマホ用のタオル（水しぶきと雨対策）' });
  }
  if ((max ?? 0) >= 28 || (feels ?? 0) >= 30) {
    gear.push({ icon: '🥤', text: '飲み物（多めに）・塩分タブレット' });
  }
  if (uv !== null && uv >= 5) {
    gear.push({ icon: '🧴', text: '日焼け止め・サングラス・帽子' });
  }
  if ((min ?? 99) <= 8) {
    gear.push({ icon: '🧣', text: '防寒具（手袋・マフラーなど）' });
  }
  if (gust >= 10.8) {
    gear.push({ icon: '🧢', text: '飛ばされにくい帽子（あごひも付きだと安心）' });
  }
  if (isFog(code)) {
    gear.push({ icon: '🔦', text: '足元を照らす小型ライト' });
  }
  gear.push({ icon: '🩹', text: '絆創膏・虫よけ（夏場）・ティッシュ' });
  gear.push({ icon: '🗑', text: 'ごみ袋（散策路にごみ箱は多くありません）' });

  /* --- 傘判定 --- */
  let umbrella: WeatherAdvice['umbrella'];
  if (isStorm(code)) {
    umbrella = { level: 'need', label: '雷雨', text: '傘より安全確保を優先。屋内か車でやり過ごしてください。' };
  } else if (pop >= 60 || rain >= 5 || (isRain(code) && (now?.precipitation ?? 0) > 0.1)) {
    umbrella = { level: 'need', label: '必要', text: '傘（雨衣）が必要です。石段と岩が滑りやすくなるので足元に注意。' };
  } else if (pop >= 30 || rain >= 1) {
    umbrella = { level: 'maybe', label: '念のため', text: '折りたたみ傘があると安心。渓谷は天気が変わりやすいので雨具を一枚。' };
  } else {
    umbrella = { level: 'none', label: '不要', text: '傘は基本的に不要。日差しと虫よけ対策を。' };
  }

  return { risks, wear, plan, gear, umbrella };
}

/** 1日のひとこと（週間カード用） */
export function dayHint(d: DailyWeather, past: boolean): string {
  if (isStorm(d.code ?? null)) return '雷雨注意';
  if ((d.precipitation ?? 0) >= 10) return '大雨・増水注意';
  if ((d.pop ?? 0) >= 60) return '傘が必要';
  if (isRain(d.code ?? null)) return '小雨・足元注意';
  if ((d.max ?? 0) >= 32) return '暑さ対策';
  if ((d.gustsMax ?? 0) >= 13.9) return '強風注意';
  if (isFog(d.code ?? null)) return '霧・視界注意';
  if (isClear(d.code ?? null)) return '観瀑に最適';
  return past ? '' : '散策しやすい';
}

const WEEK = ['日', '月', '火', '水', '木', '金', '土'];

export function formatDay(iso: string, index: number): { label: string; week: string } {
  const d = new Date(`${iso}T00:00:00+09:00`);
  if (Number.isNaN(d.getTime())) return { label: iso.slice(5).replace('-', '/'), week: '' };
  const label = `${d.getMonth() + 1}/${d.getDate()}`;
  const week = index === 0 ? '今日' : index === 1 ? '明日' : `${WEEK[d.getDay()]}曜`;
  return { label, week };
}
