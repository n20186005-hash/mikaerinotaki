import type { Localized } from '../i18n/types';

export interface NavItem {
  href: string;
  label: string;
}

export const site = {
  name: '見帰りの滝',
  romaji: 'MIKAERI FALLS',
  tagline: {
    ja: 'もう一度、見に帰りたくなる滝。',
    en: 'A falls you’ll want to come back to.',
    'zh-Hant': '一見難忘，想再回去看看的瀑布。',
  } as Localized,
  intro: {
    ja: 'あじさい、深緑、紅葉。季節ごとに表情を変える、唐津・相知の名瀑。',
    en: 'Hydrangea, deep green, autumn leaves — a famed Karatsu–Arito falls that changes with the seasons.',
    'zh-Hant': '繡球花、深綠、紅葉，四季表情各異的唐津・相知名瀑。',
  } as Localized,
  region: '佐賀県唐津市相知町・天山県立自然公園',
  description: {
    ja: '佐賀県唐津市相知町、天山県立自然公園内の名瀑。あじさい、深緑、紅葉、ライトアップと、季節ごとの見どころをまとめた旅の案内です。',
    en: 'A famed falls in Arito, Karatsu (Tenzan Prefectural Natural Park), Saga. A travel guide to its seasonal highlights: hydrangea, deep green, autumn leaves and light-ups.',
    'zh-Hant': '位於佐賀縣唐津市相知町、天山縣立自然公園內的名瀑。彙整繡球花、深綠、紅葉、點燈等四季看點的旅行指南。',
  } as Localized,
} as const;

export const nav: NavItem[] = [
  { href: '/ajisai', label: 'あじさい' },
  { href: '/seasons', label: '四季' },
  { href: '/access', label: 'アクセス' },
  { href: '/walk', label: '散策ルート' },
  { href: '/history', label: '歴史' },
  { href: '/food', label: 'グルメ' },
  { href: '/facilities', label: '施設' },
  { href: '/nearby', label: '周辺コース' },
  { href: '/photo', label: '写真' },
  { href: '/faq', label: 'FAQ' },
];
