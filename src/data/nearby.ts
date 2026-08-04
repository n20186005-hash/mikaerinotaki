export interface ModelCourse {
  letter: string;
  title: string;
  tag: string;
  desc: string;
  steps: string[];
}

export const courses: ModelCourse[] = [
  {
    letter: 'A',
    title: '相知の自然と歴史',
    tag: 'のんびり',
    desc: '静けさと歴史、地方の暮らしを味わいたい方へ。相知の文化景観をめぐるコースです。',
    steps: ['見帰りの滝を散策', '鵜殿石仏群へ', '相知の豆腐・高菜でひと休み'],
  },
  {
    letter: 'B',
    title: '森と棚田の撮影',
    tag: 'フォト',
    desc: '撮影やドライブ、秋の景色を楽しみたい方へ。唐津北西部の自然をめぐります。',
    steps: ['見帰りの滝を散策', '蕨野の棚田へ', '環境芸術の森へ'],
  },
  {
    letter: 'C',
    title: '滝と休憩と温泉',
    tag: 'ファミリー',
    desc: '連続して歩きたくない方や、家族連れに。休憩と温泉で締めくくる、ゆったりコースです。',
    steps: ['見帰りの滝を散策', '道の駅厳木で休憩', 'きゅうらぎ温泉 佐用姫の湯'],
  },
  {
    letter: 'D',
    title: '唐津まるごと一日',
    tag: '一日',
    desc: '唐津を一日かけて楽しむ王道コース。滝を起点に、海と城下町までめぐります。',
    steps: ['見帰りの滝を散策', '虹の松原へ', '唐津城周辺を散策', '唐津市街で夕食'],
  },
];
