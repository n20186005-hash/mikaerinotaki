/**
 * 单景点 SEO 实体绑定（Entity binding）
 * 站点：https://mikaerinotaki.com  —  見帰りの滝 / Mikaeri No Taki Falls
 * 所有结构化数据、TDK、面包屑、地图嵌入均从此处取值，避免多处不一致。
 */
export const entity = {
  /* ---------- 域名 ---------- */
  domain: 'mikaerinotaki.com',
  siteUrl: 'https://mikaerinotaki.com',

  /* ---------- 名称 ---------- */
  fullName: '見帰りの滝', // ATTRACTION_FULL_NAME
  shortName: 'Mikaeri Falls', // ATTRACTION_SHORT_NAME（域名对应含义）
  fullNameEn: 'Mikaeri No Taki Falls',
  romaji: 'MIKAERI FALLS',
  /* 検索されやすい表記ゆれ（GSC の実測クエリに基づく） */
  aliases: [
    '見返りの滝', // 同音の一般的な誤記・異体字（検索ボリューム大）
    'みかえりのたき',
    'Mikaeri No Taki',
    'Mikaeri-no-taki Falls',
    '佐賀 見帰りの滝',
  ],
  plusCode: '929Q+5W 唐津市 日本佐賀県',
  variantNote:
    '「見返りの滝」と表記・検索されることもありますが、正式な名称は「見帰りの滝」です。どちらで検索しても同じ場所です。',
  /** 名称を併記した表記（Title / H1 サブなどに使用） */
  nameWithVariant: '見帰りの滝（見返りの滝）',

  /* ---------- 行政层级 ---------- */
  streetAddress: '唐津市相知町伊岐佐', // Ochicho Ikisa, Karatsu
  streetAddressEn: 'Ochicho Ikisa',
  city: '唐津市', // CITY_NAME
  cityEn: 'Karatsu',
  state: '佐賀県', // STATE_PROVINCE
  stateEn: 'Saga',
  country: '日本', // COUNTRY_NAME
  countryEn: 'Japan',
  countryCode: 'JP', // COUNTRY_CODE_2LETTER
  postalCode: '849-3223', // POSTAL_CODE

  /* ---------- 坐标 ---------- */
  latitude: 33.367778, // LATITUDE（北緯33度22分04.0秒）
  longitude: 130.039528, // LONGITUDE（東経130度02分22.3秒）

  /* ---------- 地图链接 ---------- */
  mapsShareUrl: 'https://maps.app.goo.gl/775F1KJyguGbd8Qk8', // MAPS_SHARE_URL
  mapsPlaceUrl:
    'https://www.google.com/maps/place/%E8%A6%8B%E5%B8%B0%E3%82%8A%E3%81%AE%E6%BB%9D/@33.367778,130.039528,16z/',
  mapsEmbedSrc:
    'https://www.google.com/maps?q=%E8%A6%8B%E5%B8%B0%E3%82%8A%E3%81%AE%E6%BB%9D&z=16&output=embed', // MAPS_EMBED_SRC

  /* ---------- 周边核心地标 ---------- */
  nearbyLandmark1: '鵜殿石仏群', // NEARBY_LANDMARK_1
  nearbyLandmark2: '蕨野の棚田', // NEARBY_LANDMARK_2

  /* ---------- 权威外链 ---------- */
  govtTourismName: '佐賀県公式観光サイト あそぼーさが',
  govtTourismUrl:
    'https://www.asobo-saga.jp/spots/detail/24a65cb2-10f4-462d-abd0-1775b2b7c902', // GOVT_TOURISM_URL

  /* ---------- 其他 ---------- */
  heroImage: '/images/hero.jpg',
  isAccessibleForFree: true,
  descriptionEn:
    'Comprehensive visitor guide to Mikaeri No Taki Falls in Karatsu, Saga, Japan.',
} as const;

export const siteUrl = (path = '/') =>
  new URL(path, entity.siteUrl).toString().replace(/\/$/, path === '/' ? '/' : '');
