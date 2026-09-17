import type { Localized } from '../i18n/types';

/**
 * 交通の詳細ガイド（空港・公共交通・タクシー・車）
 * 所要時間は目安です。時刻・運賃・運行状況は変更されるため、公式情報でご確認ください。
 */
export interface TransportRoute {
  id: string;
  icon: string;
  title: Localized;
  time: Localized;
  steps: Localized[];
  tips: Localized[];
}

export const fromAirports: TransportRoute[] = [
  {
    id: 'fukuoka',
    icon: '✈️',
    title: { ja: '福岡空港から', en: 'From Fukuoka Airport', 'zh-Hant': '從福岡機場' },
    time: { ja: '目安：乗り継ぎ含め 約1時間40分〜2時間10分', en: 'About 1 h 40 min – 2 h 10 min (incl. transfers)', 'zh-Hant': '約1小時40分〜2小時10分（含轉乘）' },
    steps: [
      { ja: '福岡空港国内線 → 地下鉄空港線（または連絡バス）で博多・天神方面へ', en: 'Fukuoka Airport (domestic) → subway Airport Line (or shuttle bus) to Hakata/Tenjin', 'zh-Hant': '福岡機場國內線 → 地鐵空港線（或接駁巴士）往博多・天神' },
      { ja: '高速バス（福岡空港・博多・天神 → 唐津方面）で唐津市街へ', en: 'Express bus (Fukuoka Airport / Hakata / Tenjin → Karatsu) to central Karatsu', 'zh-Hant': '高速巴士（福岡機場・博多・天神 → 唐津）抵唐津市區' },
      { ja: '唐津駅 → JR唐津線で相知駅（厳木・岩屋方面）', en: 'Karatsu Stn → JR Karatsu Line to Arito Stn (via Kishima / Iwaya)', 'zh-Hant': '唐津站 → JR唐津線往相知站（經嚴木・岩屋）' },
      { ja: '相知駅 → タクシーで滝へ（約7〜9分）', en: 'Arito Stn → taxi to the falls (~7–9 min)', 'zh-Hant': '相知站 → 計程車前往瀑布（約7〜9分）' },
    ],
    tips: [
      { ja: '便数・発着が多い福岡空港経由が一般的です', en: 'Routing via Fukuoka Airport is the usual choice (most flights)', 'zh-Hant': '多半取道班次多的福岡機場' },
      { ja: '唐津線は普通列車のみ。本数が限られるため、乗り継ぎ時刻を先に決めておくと安心', en: 'The Karatsu Line is local-only with few trains — fix your connection times first', 'zh-Hant': '唐津線僅區間車、班次少，請先排好轉乘時間' },
      { ja: '帰りの便がある日は、最終のバス・列車時刻を先に確認しておく', en: 'If returning the same day, check the last bus/train times first', 'zh-Hant': '若當天往返，先確認末班巴士／列車時刻' },
    ],
  },
  {
    id: 'saga',
    icon: '🛫',
    title: { ja: '佐賀空港から', en: 'From Saga Airport', 'zh-Hant': '從佐賀機場' },
    time: { ja: '目安：乗り継ぎ含め 約1時間30分〜2時間', en: 'About 1 h 30 min – 2 h (incl. transfers)', 'zh-Hant': '約1小時30分〜2小時（含轉乘）' },
    steps: [
      { ja: '佐賀空港 → 連絡バスなどでJR佐賀駅へ', en: 'Saga Airport → shuttle bus etc. to JR Saga Stn', 'zh-Hant': '佐賀機場 → 接駁巴士等往JR佐賀站' },
      { ja: 'JR佐賀駅 → 唐津線（多久・厳木経由）で相知駅へ', en: 'JR Saga Stn → Karatsu Line (via Taku / Kishima) to Arito Stn', 'zh-Hant': 'JR佐賀站 → 唐津線（經多久・嚴木）往相知站' },
      { ja: '相知駅 → タクシーで滝へ（約7〜9分）', en: 'Arito Stn → taxi to the falls (~7–9 min)', 'zh-Hant': '相知站 → 計程車前往瀑布（約7〜9分）' },
    ],
    tips: [
      { ja: '空港連絡バスは便数が少なめ。到着時刻から逆算して計画を', en: 'Airport shuttles are infrequent — plan backwards from arrival', 'zh-Hant': '機場接駁班次少，請由抵達時間倒推規劃' },
      { ja: '相知駅はタクシーの常駐が多くありません。事前予約が安心', en: 'Few taxis wait at Arito Stn — book ahead', 'zh-Hant': '相知站計程車不多，建議預約' },
    ],
  },
  {
    id: 'rental',
    icon: '🚙',
    title: { ja: '空港からレンタカー', en: 'Rental car from the airport', 'zh-Hant': '從機場租車' },
    time: { ja: '福岡空港から 約1時間20分〜1時間40分／佐賀空港から 約1時間', en: '~1 h 20–1 h 40 min from Fukuoka / ~1 h from Saga', 'zh-Hant': '福岡機場約1小時20分〜1小時40分／佐賀機場約1小時' },
    steps: [
      { ja: '空港周辺でレンタカーを手配（給油・充電は出発前に）', en: 'Arrange a rental car near the airport (fuel/charge before leaving)', 'zh-Hant': '於機場附近租車（出發前加油／充電）' },
      { ja: '高速道路・自動車道を利用して唐津IC（または多久IC）方面へ', en: 'Take the expressway to Karatsu IC (or Taku IC)', 'zh-Hant': '走高速道路往唐津交流道（或多久交流道）' },
      { ja: '唐津ICから約10km・約18分（多久ICからは約20km・約25分）', en: '~10 km / ~18 min from Karatsu IC (~20 km / ~25 min from Taku IC)', 'zh-Hant': '唐津交流道起約10km・約18分（多久交流道約20km・約25分）' },
      { ja: '県道を「伊岐佐」交差点から東へ約3km進むと滝周辺', en: '~3 km east from the Ikisa intersection on the prefectural road', 'zh-Hant': '縣道自「伊岐佐」路口向東約3km即達瀑布周邊' },
    ],
    tips: [
      { ja: '山あいの県道は道幅が狭い区間があります。すれ違いに注意', en: 'Some mountain roads are narrow — mind oncoming traffic', 'zh-Hant': '山區縣道有狹窄路段，注意會車' },
      { ja: 'カーナビは「見帰りの滝」、または座標（北緯33.3678 / 東経130.0395）が確実', en: 'Use “Mikaeri No Taki Falls” or coordinates (33.3678 N, 130.0395 E)', 'zh-Hant': '導航搜尋「見歸里之瀧」或座標（北緯33.3678／東經130.0395）' },
      { ja: '渓谷沿いは電波が弱い場所があります。地図は事前に保存を', en: 'Signal is weak along the gorge — save maps offline', 'zh-Hant': '溪谷一帶訊號弱，請先下載離線地圖' },
    ],
  },
];

export const publicTransit: TransportRoute[] = [
  {
    id: 'karatsu-line',
    icon: '🚉',
    title: { ja: 'JR唐津線（佐賀駅・唐津駅 → 相知駅）', en: 'JR Karatsu Line (Saga / Karatsu → Arito)', 'zh-Hant': 'JR唐津線（佐賀站・唐津站 → 相知站）' },
    time: { ja: '相知駅から滝まで：タクシー約7〜9分', en: 'Arito Stn to the falls: ~7–9 min by taxi', 'zh-Hant': '相知站至瀑布：計程車約7〜9分' },
    steps: [
      { ja: 'JR唐津線は 佐賀駅 - 多久 - 厳木 - 岩屋 - 相知 - 本牟田部 - 山本 - 鬼塚 - 唐津 - 西唐津 を結ぶ路線', en: 'The Karatsu Line links Saga – Taku – Kishima – Iwaya – Arito – Homutabe – Yamamoto – Onizuka – Karatsu – Nishi-Karatsu', 'zh-Hant': '唐津線連接佐賀－多久－嚴木－岩屋－相知－本牟田部－山本－鬼塚－唐津－西唐津' },
      { ja: '相知駅下車後はタクシー、または事前予約制の乗合・デマンド交通を利用', en: 'At Arito Stn, take a taxi or pre-booked shared/demand transport', 'zh-Hant': '相知站下車後搭計程車，或預約共乘／需求式交通' },
      { ja: '本数は多くありません（概ね1時間に1〜2本程度）。時刻表の事前確認を', en: 'Services are limited (~1–2 per hour) — check the timetable first', 'zh-Hant': '班次不多（約每小時1〜2班），請先查時刻表' },
    ],
    tips: [
      { ja: '相知駅から滝までは約3km強。歩くと30〜40分前後で、車道脇を歩く区間があります', en: 'Arito Stn is ~3 km away; walking takes 30–40 min along the roadside', 'zh-Hant': '相知站距瀑布約3km，步行約30〜40分，部分沿車道' },
      { ja: '雨天・荷物が多い場合・シニア連れは、タクシー利用が現実的です', en: 'In rain, with luggage, or with seniors, a taxi is realistic', 'zh-Hant': '雨天、行李多或同行長輩時，搭計程車較實際' },
    ],
  },
  {
    id: 'chikuhi-line',
    icon: '🚋',
    title: { ja: 'JR筑肥線（西相知駅・肥前久保駅）', en: 'JR Chikuhi Line (Nishi-Arito / Hizen-Kubo)', 'zh-Hant': 'JR筑肥線（西相知站・肥前久保站）' },
    time: { ja: '肥前久保駅から滝まで：タクシー約11分', en: 'Hizen-Kubo Stn to the falls: ~11 min by taxi', 'zh-Hant': '肥前久保站至瀑布：計程車約11分' },
    steps: [
      { ja: '筑肥線（山本 - 佐里 - 西相知 - 肥前久保 - 伊万里方面）は本数がかなり少なめ', en: 'The Chikuhi Line (Yamamoto – Sari – Nishi-Arito – Hizen-Kubo – Imari) runs very infrequently', 'zh-Hant': '筑肥線（山本－佐里－西相知－肥前久保－伊萬里）班次相當少' },
      { ja: '肥前久保駅または西相知駅からタクシーで滝方面へ', en: 'Taxi from Hizen-Kubo or Nishi-Arito Stn toward the falls', 'zh-Hant': '從肥前久保站或西相知站搭計程車往瀑布' },
      { ja: '運行間隔が長いため、列車を逃すと待ち時間が大きくなります', en: 'Long gaps — missing a train means a long wait', 'zh-Hant': '班距長，錯過列車需久候' },
    ],
    tips: [
      { ja: '観光の主役ルートではありません。「列車の旅」を楽しむ方向けの選択肢', en: 'Not the main tourist route — for train-journey enthusiasts', 'zh-Hant': '非主要觀光路線，適合喜歡搭火車的旅客' },
      { ja: '駅周辺にタクシーは待機していないことが多いため、必ず事前手配を', en: 'Taxis rarely wait at the station — always book ahead', 'zh-Hant': '車站附近多無計程車等候，務必預約' },
    ],
  },
  {
    id: 'bus',
    icon: '🚌',
    title: { ja: '路線バス・デマンド交通', en: 'Local bus & demand transport', 'zh-Hant': '路線巴士・需求式交通' },
    time: { ja: '本数が少ないため、時刻確認が前提', en: 'Few services — confirm times first', 'zh-Hant': '班次少，須先確認時刻' },
    steps: [
      { ja: '唐津市街（大手口バスセンター）と相知・厳木方面を結ぶ路線バスがあります', en: 'Route buses link central Karatsu (Oteguschi) with Arito / Kishima', 'zh-Hant': '唐津市區（大手口巴士中心）有路線巴士往相知・嚴木' },
      { ja: '地域によっては、事前予約制のデマンド型乗合交通（相知・厳木エリア）が利用できます', en: 'Some areas offer reservation-based demand transport (Arito / Kishima)', 'zh-Hant': '部分地區有預約制需求式共乘交通（相知・嚴木）' },
      { ja: 'バス停から滝までは距離があるため、そこから徒歩またはタクシー', en: 'The bus stop is far from the falls — walk or taxi from there', 'zh-Hant': '巴士站距瀑布尚遠，需步行或轉乘計程車' },
    ],
    tips: [
      { ja: 'デマンド交通は事前登録・予約が必要な方式です。利用前に手順を確認してください', en: 'Demand transport needs advance registration/booking — check the process', 'zh-Hant': '需求式交通需事先註冊／預約，請先了解流程' },
      { ja: '休日・祝日は運行形態が変わることがあります', en: 'Service may differ on weekends/holidays', 'zh-Hant': '例假日運行方式可能不同' },
    ],
  },
];

export const taxiGuide = {
  icon: '🚕',
  title: { ja: 'タクシーでのアクセス', en: 'By taxi (the last few km)', 'zh-Hant': '搭乘計程車（最後幾公里）' },
  lead: {
    ja: '公共交通の本数が限られるこのエリアでは、タクシーがもっとも現実的な“最後の数km”です。',
    en: 'With limited public transport, a taxi is the most realistic “last few km”.',
    'zh-Hant': '大眾運輸班次有限，計程車是最實際的「最後幾公里」。',
  },
  points: [
    { ja: '相知駅 → 見帰りの滝：約7〜9分（約3km強）', en: 'Arito Stn → falls: ~7–9 min (~3 km)', 'zh-Hant': '相知站 → 瀑布：約7〜9分（約3km）' },
    { ja: '肥前久保駅 → 見帰りの滝：約11分', en: 'Hizen-Kubo Stn → falls: ~11 min', 'zh-Hant': '肥前久保站 → 瀑布：約11分' },
    { ja: '唐津駅 → 見帰りの滝：約20〜25分', en: 'Karatsu Stn → falls: ~20–25 min', 'zh-Hant': '唐津站 → 瀑布：約20〜25分' },
    { ja: '駅前に常駐する台数は多くありません。到着便に合わせた事前予約がおすすめ', en: 'Few taxis wait at stations — book to match your arrival', 'zh-Hant': '車站前計程車不多，建議配合抵達班次預約' },
    { ja: '滝周辺は電波が弱く、配車アプリがつながりにくいことがあります', en: 'Weak signal near the falls — ride apps may not connect', 'zh-Hant': '瀑布周邊訊號弱，叫車 App 可能連不上' },
    { ja: '帰りの足は「先に確保」が鉄則。到着時に運転手と待ち合わせ時刻を相談する方法もあります', en: 'Secure your return ride first — agree a pickup time with the driver on arrival', 'zh-Hant': '回程務必「先安排」，抵達時與司機約好等候時間' },
    { ja: '複数人での旅行なら、往復の貸し切り・観光タクシーという選択肢もあります', en: 'For groups, a round-trip charter / sightseeing taxi is an option', 'zh-Hant': '多人同行可考慮往返包車／觀光計程車' },
  ],
  caution: {
    ja: 'あじさい祭り期間は交通規制で乗降場所が変わる場合があります。最新の案内をご確認ください。',
    en: 'During the festival, pickup/drop-off points may move due to traffic control — check the latest notice.',
    'zh-Hant': '祭典期間因交通管制，上下車地點可能變動，請確認最新公告。',
  },
};

export const drivingGuide = {
  icon: '🚗',
  title: { ja: '車・レンタカー・バイク・自転車', en: 'Car / rental / motorcycle / bicycle', 'zh-Hant': '開車・租車・機車・自行車' },
  routes: [
    { k: { ja: '唐津ICから', en: 'From Karatsu IC', 'zh-Hant': '從唐津交流道' }, v: { ja: '約10km・約18分（もっとも一般的）', en: '~10 km / ~18 min (most common)', 'zh-Hant': '約10km・約18分（最普遍）' } },
    { k: { ja: '多久ICから', en: 'From Taku IC', 'zh-Hant': '從多久交流道' }, v: { ja: '約20km・約25分', en: '~20 km / ~25 min', 'zh-Hant': '約20km・約25分' } },
    { k: { ja: '佐賀市街から', en: 'From central Saga', 'zh-Hant': '從佐賀市區' }, v: { ja: '厳木・相知経由で約1時間前後', en: '~1 h via Kishima / Arito', 'zh-Hant': '經嚴木・相知約1小時' } },
    { k: { ja: '福岡市街から', en: 'From central Fukuoka', 'zh-Hant': '從福岡市區' }, v: { ja: '自動車道経由で約1時間20分〜1時間40分', en: '~1 h 20–1 h 40 min via expressway', 'zh-Hant': '經高速公路約1小時20分〜1小時40分' } },
  ],
  points: [
    { ja: '県道40号浜玉相知線の「伊岐佐」交差点を東へ入り、約3kmで滝周辺', en: 'Turn east at the Ikisa intersection (Pref. Rd 40) — ~3 km to the falls', 'zh-Hant': '於縣道40號「伊岐佐」路口向東，約3km抵瀑布周邊' },
    { ja: '最終区間は山あいの道路。道幅が狭い箇所があり、すれ違いに注意', en: 'The final stretch is mountain road — narrow in places, mind oncoming traffic', 'zh-Hant': '最後一段為山區道路，部分狹窄，注意會車' },
    { ja: 'カーナビ・地図アプリは「見帰りの滝」または座標（33.367778, 130.039528）で検索', en: 'Navigate to “Mikaeri No Taki Falls” or coordinates (33.367778, 130.039528)', 'zh-Hant': '導航搜尋「見歸里之瀧」或座標（33.367778, 130.039528）' },
    { ja: 'あじさい祭り期間は交通規制・臨時駐車場・シャトル運行が実施されることがあります', en: 'During the festival, traffic control, temporary parking and shuttles may operate', 'zh-Hant': '祭典期間可能實施交通管制、臨時停車場與接駁' },
    { ja: '増水・強雨・凍結時は無理をしない。山あいは天候の影響を受けやすい', en: 'Avoid risky drives in floods, heavy rain or ice — mountains are weather-sensitive', 'zh-Hant': '漲水、強降雨或結冰時勿勉強，山區易受天候影響' },
    { ja: 'バイクは駐輪場所を確認。自転車は上り坂が続くため、体力に余裕を', en: 'Check motorcycle parking; cycling has long climbs — bring stamina', 'zh-Hant': '機車請確認停車處；自行車多上坡，需體力' },
  ],
};
