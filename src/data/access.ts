import type { Localized } from '../i18n/types';

export interface AccessWay {
  icon: string;
  title: Localized;
  lines: Localized[];
}

export interface ParkingLot {
  name: string; // 施設名（固有名詞は原語表記）
  car: string;
  bus: string;
  note: Localized;
}

export const accessWays: AccessWay[] = [
  {
    icon: '🚗',
    title: { ja: '車で', en: 'By car', 'zh-Hant': '開車' },
    lines: [
      { ja: '唐津ICから 約10km・約18分', en: '~10 km / ~18 min from Karatsu IC', 'zh-Hant': '唐津交流道起約10km・約18分' },
      { ja: '多久ICから 約20km・約25分', en: '~20 km / ~25 min from Taku IC', 'zh-Hant': '多久交流道起約20km・約25分' },
    ],
  },
  {
    icon: '🚉',
    title: { ja: '公共交通で', en: 'By public transport', 'zh-Hant': '大眾運輸' },
    lines: [
      { ja: 'JR唐津線「相知駅」下車', en: 'Get off at Arito Station (JR Karatsu Line)', 'zh-Hant': 'JR唐津線「相知車站」下車' },
      { ja: '相知駅からタクシーで約7〜8分', en: '~7–8 min by taxi from Arito Station', 'zh-Hant': '相知車站搭乘計程車約7〜8分' },
      { ja: '本数が少ないため事前に時刻を確認', en: 'Few services — check the timetable in advance', 'zh-Hant': '班次少，請先確認時刻' },
    ],
  },
];

// 唐津観光協会の区分に基づく駐車場の目安。
export const parking: ParkingLot[] = [
  { name: '清流荘前', car: '7台', bus: '—', note: { ja: '近い', en: 'Closest', 'zh-Hant': '最近' } },
  { name: '都荘前', car: '20台', bus: '—', note: { ja: '近い', en: 'Close', 'zh-Hant': '近' } },
  { name: '蛍橋前', car: '27台', bus: '3台', note: { ja: '遊歩道入口', en: 'Trail entrance', 'zh-Hant': '步道入口' } },
];

export const parkingModes = {
  normal: {
    title: { ja: '通常期', en: 'Regular season', 'zh-Hant': '平常期' },
    icon: '🍃',
    desc: { ja: '常設の駐車場を利用できます。', en: 'Use the permanent parking areas.', 'zh-Hant': '可使用常設停車場。' },
    points: [
      { ja: '清流荘前・都荘前・蛍橋前を利用', en: 'Seiryuso-mae, Tosou-mae, Hotaribashi-mae', 'zh-Hant': '清流荘前・都荘前・螢橋前' },
      { ja: '比較的ゆったり停められる', en: 'Generally easy to find a space', 'zh-Hant': '通常較容易停車' },
      { ja: 'ナビ・地図アプリで「見帰りの滝」へ', en: "Navigate to “Mikaeri No Taki Falls”", 'zh-Hant': '導航搜尋「見歸里之瀧」' },
    ],
  },
  festival: {
    title: { ja: 'あじさい祭り期間', en: 'During the Hydrangea Festival', 'zh-Hant': '繡球花祭期間' },
    icon: '💠',
    desc: { ja: '運用が大きく変わります。', en: 'Operations change significantly.', 'zh-Hant': '動線與停車大為改變。' },
    points: [
      { ja: '臨時駐車場が有料になる場合あり', en: 'Temporary parking may be paid', 'zh-Hant': '臨時停車場可能收費' },
      { ja: '周辺道路の交通規制', en: 'Traffic restrictions nearby', 'zh-Hant': '周邊道路交通管制' },
      { ja: 'シャトルバスの運行', en: 'Shuttle bus in operation', 'zh-Hant': '接駁巴士運行' },
      { ja: '使える駐車場が変わることがある', en: 'Available lots may differ', 'zh-Hant': '可用停車場可能不同' },
    ],
  },
};
