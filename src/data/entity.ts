/**
 * 单景点 SEO 实体绑定（Entity binding）
 * 站点：https://mikaerinotaki.com  —  見帰りの滝 / Mikaeri No Taki Falls
 * 所有结构化数据、TDK、面包屑、地图嵌入均从此处取值，避免多处不一致。
 */
import type { Localized } from '../i18n/types';

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
  variantNote: {
    ja: '「見返りの滝」と表記・検索されることもありますが、正式な名称は「見帰りの滝」です。どちらで検索しても同じ場所です。',
    en: 'It is sometimes written or searched as “Mikaeri-no-taki Falls”, but the official name is “Mikaeri No Taki Falls”. Either spelling leads to the same place.',
    'zh-Hant': '有時會被寫成或搜尋為「見返り之瀧」，但正式名稱是「見帰りの滝」。兩種寫法都指向同一地點。',
  },
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

  /** あじさい祭り（時効情報：2027 は未発表、例年 6 月上旬） */
  ajisaiFestival: {
    editionRecent: 36,
    recentYear: 2026,
    recentStart: '2026-06-06',
    recentEnd: '2026-06-21',
    typicalMonth: { ja: '6月', en: 'June', 'zh-Hant': '6月' } as Localized,
    nextYear: 2027,
    nextYearStatus: {
      ja: '2027年の正式日程は未発表です。例年6月上旬に開催される見込み（2026年実績：6月6日〜6月21日）。決定次第、このページでお知らせします。',
      en: 'The 2027 dates are not yet announced. Expected in early June as usual (2026: Jun 6–21). We will update this page once confirmed.',
      'zh-Hant': '2027年正式日程尚未公布。預計與往年相同於6月上旬舉辦（2026年實績：6月6日〜6月21日）。確定後將於本頁更新。',
    } as Localized,
    shuttle: {
      runsOn: {
        ja: '祭り期間中の土曜・日曜（祝日の場合あり）',
        en: 'Saturdays & Sundays during the festival (some holidays)',
        'zh-Hant': '祭典期間的週六、週日（含部分假日）',
      },
      boarding: {
        ja: 'JR相知駅 ／ 蛍橋臨時駐車場など',
        en: 'Arito Station (JR) / temporary Hotaribashi parking, etc.',
        'zh-Hant': 'JR相知車站 ／ 螢橋臨時停車場等',
      },
      fee: {
        ja: '片道 有料（例年 大人 300円程度・変動あり）',
        en: 'Paid one-way (typically ~¥300/adult; varies by year)',
        'zh-Hant': '單程收費（往年成人約300日圓，每年可能變動）',
      },
      duration: {
        ja: '滝方面まで 約10分',
        en: '~10 min to the falls',
        'zh-Hant': '往瀑布約10分',
      },
      note: {
        ja: '運行の有無・乗り場・料金は年ごとに異なります。お出かけ前に唐津観光協会の最新案内をご確認ください。',
        en: 'Operation, boarding points and fares vary by year. Check the latest Karatsu Tourism Association notice before going.',
        'zh-Hant': '是否運行、乘車處與票價每年不同，出發前請確認唐津觀光協會最新公告。',
      },
    } as { runsOn: Localized; boarding: Localized; fee: Localized; duration: Localized; note: Localized },
    bloom: {
      ja: '例年6月が見頃（約50種・4万株）',
      en: 'Peak usually in June (~50 varieties, 40,000 plants)',
      'zh-Hant': '通常6月最美（約50種・4萬株）',
    } as Localized,
    species: 50,
    plants: 40000,
  },
} as const;

/** あじさい祭り（時効情報：2027 は未発表、例年 6 月上旬） */
export const ajisaiFestival = {
  editionRecent: 36,
  recentYear: 2026,
  recentStart: '2026-06-06',
  recentEnd: '2026-06-21',
  typicalMonth: { ja: '6月', en: 'June', 'zh-Hant': '6月' } as Localized,
  nextYear: 2027,
  nextYearStatus: {
    ja: '2027年の正式日程は未発表です。例年6月上旬に開催される見込み（2026年実績：6月6日〜6月21日）。決定次第、このページでお知らせします。',
    en: 'The 2027 dates are not yet announced. Expected in early June as usual (2026: Jun 6–21). We will update this page once confirmed.',
    'zh-Hant': '2027年正式日程尚未公布。預計與往年相同於6月上旬舉辦（2026年實績：6月6日〜6月21日）。確定後將於本頁更新。',
  } as Localized,
  shuttle: {
    runsOn: {
      ja: '祭り期間中の土曜・日曜（祝日の場合あり）',
      en: 'Saturdays & Sundays during the festival (some holidays)',
      'zh-Hant': '祭典期間的週六、週日（含部分假日）',
    },
    boarding: {
      ja: 'JR相知駅 ／ 蛍橋臨時駐車場など',
      en: 'Arito Station (JR) / temporary Hotaribashi parking, etc.',
      'zh-Hant': 'JR相知車站 ／ 螢橋臨時停車場等',
    },
    fee: {
      ja: '片道 有料（例年 大人 300円程度・変動あり）',
      en: 'Paid one-way (typically ~¥300/adult; varies by year)',
      'zh-Hant': '單程收費（往年成人約300日圓，每年可能變動）',
    },
    duration: {
      ja: '滝方面まで 約10分',
      en: '~10 min to the falls',
      'zh-Hant': '往瀑布約10分',
    },
    note: {
      ja: '運行の有無・乗り場・料金は年ごとに異なります。お出かけ前に唐津観光協会の最新案内をご確認ください。',
      en: 'Operation, boarding points and fares vary by year. Check the latest Karatsu Tourism Association notice before going.',
      'zh-Hant': '是否運行、乘車處與票價每年不同，出發前請確認唐津觀光協會最新公告。',
    },
  } as { runsOn: Localized; boarding: Localized; fee: Localized; duration: Localized; note: Localized },
  bloom: {
    ja: '例年6月が見頃（約50種・4万株）',
    en: 'Peak usually in June (~50 varieties, 40,000 plants)',
    'zh-Hant': '通常6月最美（約50種・4萬株）',
  } as Localized,
  species: 50,
  plants: 40000,
};

export const siteUrl = (path = '/') =>
  new URL(path, entity.siteUrl).toString().replace(/\/$/, path === '/' ? '/' : '');
