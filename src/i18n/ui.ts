import type { Locale } from './config';
import type { Localized } from './types';

/** 导航顺序（href 固定，标签按语系切换） */
const NAV_ORDER: string[] = [
  '/ajisai',
  '/seasons',
  '/access',
  '/walk',
  '/history',
  '/food',
  '/facilities',
  '/nearby',
  '/photo',
  '/faq',
];

const navLabels: Record<Locale, Record<string, string>> = {
  ja: {
    '/ajisai': 'あじさい',
    '/seasons': '四季',
    '/access': 'アクセス',
    '/walk': '散策ルート',
    '/history': '歴史',
    '/food': 'グルメ',
    '/facilities': '施設',
    '/nearby': '周辺コース',
    '/photo': '写真',
    '/faq': 'FAQ',
  },
  en: {
    '/ajisai': 'Hydrangea',
    '/seasons': 'Seasons',
    '/access': 'Access',
    '/walk': 'Walking',
    '/history': 'History',
    '/food': 'Food',
    '/facilities': 'Facilities',
    '/nearby': 'Area tours',
    '/photo': 'Photos',
    '/faq': 'FAQ',
  },
  'zh-Hant': {
    '/ajisai': '繡球花',
    '/seasons': '四季',
    '/access': '交通',
    '/walk': '散步路線',
    '/history': '歷史',
    '/food': '美食',
    '/facilities': '設施',
    '/nearby': '周邊行程',
    '/photo': '照片',
    '/faq': '常見問題',
  },
};

export interface NavItem {
  href: string;
  label: string;
}

export function getNav(locale: Locale): NavItem[] {
  return NAV_ORDER.map((href) => ({ href, label: navLabels[locale][href] ?? navLabels.ja[href] }));
}

/** 站点级 UI 文案（导航/页脚/语言切换等） */
export interface UiStrings {
  footer: {
    tagline: string;
    aboutHeading: string;
    aboutDesc: string;
    guideHeading: string;
    guide: [string, string][];
    moreHeading: string;
    more: [string, string][];
    credits: string;
    sources: string;
    disclaimer: string;
    copyrightSuffix: string;
    seasonNote: string;
  };
  langLabel: string;
  langAria: string;
  homeCrumb: string;
}

const ui: Record<Locale, UiStrings> = {
  ja: {
    footer: {
      tagline: 'もう一度、見に帰りたくなる滝。',
      aboutHeading: 'About',
      aboutDesc:
        '佐賀県唐津市相知町、天山県立自然公園内の名瀑。あじさい、深緑、紅葉、ライトアップと、季節ごとの見どころをまとめた旅の案内です。',
      guideHeading: 'Guide',
      guide: [
        ['/ajisai', 'あじさい特集'],
        ['/seasons', '四季の見どころ'],
        ['/access', 'アクセス・駐車場'],
        ['/walk', '散策ルート・マップ'],
      ],
      moreHeading: 'More',
      more: [
        ['/history', '歴史と名前の由来'],
        ['/food', '周辺グルメ'],
        ['/facilities', '施設・サービス'],
        ['/nearby', 'モデルコース'],
        ['/photo', '写真スポット'],
        ['/faq', 'よくある質問'],
      ],
      credits: '写真クレジット',
      sources: '情報源',
      disclaimer:
        '本サイトは見帰りの滝を紹介する独立した旅行ガイドです。見帰りの滝および周辺施設の公式サイトではありません。',
      copyrightSuffix: 'ガイド',
      seasonNote: '季節・開花・交通規制の情報は変わることがあります。',
    },
    langLabel: '言語',
    langAria: '言語を選択',
    homeCrumb: 'ホーム',
  },
  en: {
    footer: {
      tagline: 'A waterfall you will want to return to.',
      aboutHeading: 'About',
      aboutDesc:
        'A famed waterfall in Arito, Karatsu, Saga, inside the Tenzan Prefectural Natural Park. A visitor guide to the seasons — hydrangeas, deep green, autumn leaves and light-ups — plus access, parking and walking routes.',
      guideHeading: 'Guide',
      guide: [
        ['/ajisai', 'Hydrangea feature'],
        ['/seasons', 'Seasonal highlights'],
        ['/access', 'Access & parking'],
        ['/walk', 'Walking routes & map'],
      ],
      moreHeading: 'More',
      more: [
        ['/history', 'History & the name'],
        ['/food', 'Food nearby'],
        ['/facilities', 'Facilities & services'],
        ['/nearby', 'Model courses'],
        ['/photo', 'Photo spots'],
        ['/faq', 'FAQ'],
      ],
      credits: 'Photo credits',
      sources: 'Sources',
      disclaimer:
        'This is an independent travel guide introducing Mikaeri No Taki Falls. It is not the official site of the falls or surrounding facilities.',
      copyrightSuffix: ' Guide',
      seasonNote: 'Seasons, blooms and traffic control can change.',
    },
    langLabel: 'Language',
    langAria: 'Select language',
    homeCrumb: 'Home',
  },
  'zh-Hant': {
    footer: {
      tagline: '一眼難忘，令人想再回訪的瀑布。',
      aboutHeading: '關於',
      aboutDesc:
        '位於佐賀縣唐津市相知町、天山縣立自然公園內的名瀑。彙整四季看點——繡球花、深綠、紅葉與點燈——以及交通、停車與散步路線的旅行指南。',
      guideHeading: '導覽',
      guide: [
        ['/ajisai', '繡球花特輯'],
        ['/seasons', '四季看點'],
        ['/access', '交通與停車'],
        ['/walk', '散步路線與地圖'],
      ],
      moreHeading: '更多',
      more: [
        ['/history', '歷史與名稱由來'],
        ['/food', '周邊美食'],
        ['/facilities', '設施與服務'],
        ['/nearby', '推薦行程'],
        ['/photo', '攝影景點'],
        ['/faq', '常見問題'],
      ],
      credits: '照片出處',
      sources: '資料來源',
      disclaimer:
        '本網站是介紹見歸里之瀧（見帰りの滝）的獨立旅行指南，並非瀑布或周邊設施的官方網站。',
      copyrightSuffix: '指南',
      seasonNote: '季節、開花與交通管制可能變動。',
    },
    langLabel: '語言',
    langAria: '選擇語言',
    homeCrumb: '首頁',
  },
};

export function getUi(locale: Locale): UiStrings {
  return ui[locale];
}

/** 頁面級通用標籤（按语系），供頁組件複用 */
export const common: Record<Locale, { openMap: string; officialInfo: string; parkingNav: string; stationNav: string; taxiNav: string }> = {
  ja: {
    openMap: '地図で開く ↗',
    officialInfo: '🌸 公式の開花・祭り情報 ↗',
    parkingNav: '🅿️ 蛍橋駐車場へナビ',
    stationNav: '🚉 相知駅へナビ',
    taxiNav: '🚕 周辺のタクシー',
  },
  en: {
    openMap: 'Open in Maps ↗',
    officialInfo: '🌸 Official bloom & festival info ↗',
    parkingNav: '🅿️ Navigate to Hotarubashi parking',
    stationNav: '🚉 Navigate to Arito Station',
    taxiNav: '🚕 Taxis nearby',
  },
  'zh-Hant': {
    openMap: '在地圖中開啟 ↗',
    officialInfo: '🌸 官方花況・祭典資訊 ↗',
    parkingNav: '🅿️ 導航至螢橋停車場',
    stationNav: '🚉 導航至相知車站',
    taxiNav: '🚕 周邊計程車',
  },
};
