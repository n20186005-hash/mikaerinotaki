import type { Localized } from '../i18n/types';

export interface ModelCourse {
  letter: string;
  title: Localized;
  tag: Localized;
  desc: Localized;
  steps: Localized[];
}

export const courses: ModelCourse[] = [
  {
    letter: 'A',
    title: { ja: '相知の自然と歴史', en: 'Arito nature & history', 'zh-Hant': '相知的自然與歷史' },
    tag: { ja: 'のんびり', en: 'Leisurely', 'zh-Hant': '悠閒' },
    desc: { ja: '静けさと歴史、地方の暮らしを味わいたい方へ。相知の文化景観をめぐるコースです。', en: 'For those who want quiet, history and local life — a tour of Arito’s cultural landscape.', 'zh-Hant': '想品味靜謐、歷史與地方生活者。走訪相知文化地景的路線。' },
    steps: [
      { ja: '見帰りの滝を散策', en: 'Walk Mikaeri No Taki', 'zh-Hant': '散步見歸里之瀧' },
      { ja: '鵜殿石仏群へ', en: 'To the Udon stone Buddhas', 'zh-Hant': '前往鵜殿石佛群' },
      { ja: '相知の豆腐・高菜でひと休み', en: 'Break with Arito tofu & takana', 'zh-Hant': '以相知豆腐・高菜稍作休息' },
    ],
  },
  {
    letter: 'B',
    title: { ja: '森と棚田の撮影', en: 'Forest & terraced fields', 'zh-Hant': '森林與梯田攝影' },
    tag: { ja: 'フォト', en: 'Photo', 'zh-Hant': '攝影' },
    desc: { ja: '撮影やドライブ、秋の景色を楽しみたい方へ。唐津北西部の自然をめぐります。', en: 'For photography, driving and autumn scenery — around the nature of northwestern Karatsu.', 'zh-Hant': '想拍照、兜風、賞秋景者。巡遊唐津西北的自然。' },
    steps: [
      { ja: '見帰りの滝を散策', en: 'Walk Mikaeri No Taki', 'zh-Hant': '散步見歸里之瀧' },
      { ja: '蕨野の棚田へ', en: 'To Warabi-no terraced rice fields', 'zh-Hant': '前往蕨野梯田' },
      { ja: '環境芸術の森へ', en: 'To Kankyo Geijutsu no Mori', 'zh-Hant': '前往環境藝術之森' },
    ],
  },
  {
    letter: 'C',
    title: { ja: '滝と休憩と温泉', en: 'Falls, rest & hot spring', 'zh-Hant': '瀑布・休息與溫泉' },
    tag: { ja: 'ファミリー', en: 'Family', 'zh-Hant': '親子' },
    desc: { ja: '連続して歩きたくない方や、家族連れに。休憩と温泉で締めくくる、ゆったりコースです。', en: 'For those who’d rather not walk continuously, or families — a relaxed course ending with rest and a hot spring.', 'zh-Hant': '不想連續步行者或親子同遊。以休息與溫泉收尾的悠閒路線。' },
    steps: [
      { ja: '見帰りの滝を散策', en: 'Walk Mikaeri No Taki', 'zh-Hant': '散步見歸里之瀧' },
      { ja: '道の駅厳木で休憩', en: 'Rest at Michi-no-eki Kishima', 'zh-Hant': '在道之驛嚴木休息' },
      { ja: 'きゅうらぎ温泉 佐用姫の湯', en: 'Kyuraki Onsen (Sayohime no Yu)', 'zh-Hant': '久良溫泉 佐用姬之湯' },
    ],
  },
  {
    letter: 'D',
    title: { ja: '唐津まるごと一日', en: 'A full day in Karatsu', 'zh-Hant': '唐津一整天' },
    tag: { ja: '一日', en: 'Full day', 'zh-Hant': '一日' },
    desc: { ja: '唐津を一日かけて楽しむ王道コース。滝を起点に、海と城下町までめぐります。', en: 'The classic course to enjoy Karatsu for a full day — from the falls to the sea and castle town.', 'zh-Hant': '花一整天玩透唐津的經典路線。以瀑布為起點，走到海與城下町。' },
    steps: [
      { ja: '見帰りの滝を散策', en: 'Walk Mikaeri No Taki', 'zh-Hant': '散步見歸里之瀧' },
      { ja: '虹の松原へ', en: 'To Nijinomatsubara pine grove', 'zh-Hant': '前往虹之松原' },
      { ja: '唐津城周辺を散策', en: 'Around Karatsu Castle', 'zh-Hant': '唐津城周邊散步' },
      { ja: '唐津市街で夕食', en: 'Dinner in central Karatsu', 'zh-Hant': '唐津市區晚餐' },
    ],
  },
];
