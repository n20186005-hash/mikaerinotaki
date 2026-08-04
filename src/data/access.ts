export interface AccessWay {
  icon: string;
  title: string;
  lines: string[];
}

export interface ParkingLot {
  name: string;
  car: string;
  bus: string;
  note: string;
}

export const accessWays: AccessWay[] = [
  {
    icon: '🚗',
    title: '車で',
    lines: ['唐津ICから 約10km・約18分', '多久ICから 約20km・約25分'],
  },
  {
    icon: '🚉',
    title: '公共交通で',
    lines: ['JR唐津線「相知駅」下車', '相知駅からタクシーで約7〜8分', '本数が少ないため事前に時刻を確認'],
  },
];

// 唐津観光協会の区分に基づく駐車場の目安。
export const parking: ParkingLot[] = [
  { name: '清流荘前', car: '7台', bus: '—', note: '近い' },
  { name: '都荘前', car: '20台', bus: '—', note: '近い' },
  { name: '蛍橋前', car: '27台', bus: '3台', note: '遊歩道入口' },
];

export const parkingModes = {
  normal: {
    title: '通常期',
    icon: '🍃',
    desc: '常設の駐車場を利用できます。',
    points: ['清流荘前・都荘前・蛍橋前を利用', '比較的ゆったり停められる', 'ナビ・地図アプリで「見帰りの滝」へ'],
  },
  festival: {
    title: 'あじさい祭り期間',
    icon: '💠',
    desc: '運用が大きく変わります。',
    points: ['臨時駐車場が有料になる場合あり', '周辺道路の交通規制', 'シャトルバスの運行', '使える駐車場が変わることがある'],
  },
};
