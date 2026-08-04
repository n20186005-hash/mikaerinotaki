export interface NavItem {
  href: string;
  label: string;
}

export const site = {
  name: '見帰りの滝',
  romaji: 'MIKAERI FALLS',
  tagline: 'もう一度、見に帰りたくなる滝。',
  intro: 'あじさい、深緑、紅葉。季節ごとに表情を変える、唐津・相知の名瀑。',
  region: '佐賀県唐津市相知町・天山県立自然公園',
  description:
    '佐賀県唐津市相知町、天山県立自然公園内の名瀑。あじさい、深緑、紅葉、ライトアップと、季節ごとの見どころをまとめた旅の案内です。',
} as const;

export const nav: NavItem[] = [
  { href: '/ajisai', label: 'あじさい' },
  { href: '/seasons', label: '四季' },
  { href: '/access', label: 'アクセス' },
  { href: '/walk', label: '散策ルート' },
  { href: '/history', label: '歴史' },
  { href: '/food', label: 'グルメ' },
  { href: '/nearby', label: '周辺コース' },
  { href: '/photo', label: '写真' },
  { href: '/faq', label: 'FAQ' },
];
