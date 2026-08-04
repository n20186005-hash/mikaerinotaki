export interface SeasonMeta {
  k: string;
  v: string;
}

export interface Season {
  id: string;
  when: string;
  name: string;
  sub: string;
  img: string;
  thumb: string;
  short: string;
  desc: string;
  chip: string;
  meta: SeasonMeta[];
}

export const seasons: Season[] = [
  {
    id: 'spring',
    when: 'Feb–Apr',
    name: '春',
    sub: '桜と春の渓谷',
    img: '/images/spring.jpg',
    thumb: '/images/spring-sm.jpg',
    short: '2〜3月の河津桜から、岩肌に映えるソメイヨシノへ。淡い花色と白い水流の対比が美しい季節です。',
    desc: '河津桜(2〜3月)からソメイヨシノへ。淡い花色と岩肌の白い水流が響き合う、やわらかな季節です。',
    chip: '河津桜・春の渓谷',
    meta: [
      { k: '主な見どころ', v: '河津桜・桜・芽吹きの新緑' },
      { k: '服装', v: '朝晩は冷えるので上着を' },
      { k: '光と撮影', v: '午前のやわらかい光。桜を前景に' },
      { k: '混雑', v: '桜の週末はやや多め' },
      { k: '親子・シニア', v: '○ ゆっくり歩けば安心' },
    ],
  },
  {
    id: 'earlysummer',
    when: 'May–Jun',
    name: '初夏',
    sub: 'あじさいと蛍',
    img: '/images/ajisai.jpg',
    thumb: '/images/ajisai-sm.jpg',
    short: '5〜6月は蛍、6月はあじさいが見頃。曇りや小雨の日ほど花色がやわらかく、この滝の代名詞となる眺めです。',
    desc: '5〜6月は蛍、6月はあじさいが見頃。しっとりとした渓谷に花が映える、この滝を代表する時期です。',
    chip: 'あじさい・蛍',
    meta: [
      { k: '主な見どころ', v: 'あじさい・蛍・梅雨の渓谷' },
      { k: '服装', v: '雨具・滑りにくい靴・虫よけ' },
      { k: '光と撮影', v: '曇天や小雨が花に最適' },
      { k: '混雑', v: 'あじさい祭りの週末は混雑' },
      { k: '親子・シニア', v: '△ 雨天時は足元注意' },
    ],
  },
  {
    id: 'summer',
    when: 'Jul–Aug',
    name: '盛夏',
    sub: '深緑と水しぶき',
    img: '/images/summer.jpg',
    thumb: '/images/summer-sm.jpg',
    short: '渓谷は濃い緑に包まれ、滝の水しぶきが涼を運びます。避暑と森林浴を兼ねた散策に向く時期です。',
    desc: '渓谷は濃い緑に包まれ、水しぶきが涼を運びます。避暑と森林浴を兼ねた散策にぴったりです。',
    chip: '深緑・避暑',
    meta: [
      { k: '主な見どころ', v: '深緑・水しぶき・ライトアップ' },
      { k: '服装', v: '涼しい服装・虫よけ・帽子' },
      { k: '光と撮影', v: '木漏れ日と水の流れを長秒で' },
      { k: '混雑', v: '比較的ゆったり' },
      { k: '親子・シニア', v: '○ 涼を求める散歩に' },
    ],
  },
  {
    id: 'autumn',
    when: 'Oct–Dec',
    name: '秋',
    sub: '紅葉',
    img: '/images/falls.jpg',
    thumb: '/images/falls-sm.jpg',
    short: '岩壁と紅葉、そして水流が織りなす錦の渓谷。ライトアップと合わせて、一年で最も色彩豊かな季節です。',
    desc: '岩壁と紅葉、そして水流が織りなす錦の渓谷。ライトアップと合わせ、一年で最も色彩豊かな季節です。',
    chip: '紅葉・ライトアップ',
    meta: [
      { k: '主な見どころ', v: '紅葉・ライトアップ' },
      { k: '服装', v: '昼夜の寒暖差に対応できる服装' },
      { k: '光と撮影', v: '夕方〜ライトアップが狙い目' },
      { k: '混雑', v: '紅葉の見頃は多め' },
      { k: '親子・シニア', v: '○ 日中の散策がおすすめ' },
    ],
  },
  {
    id: 'winter',
    when: 'Jan–Feb',
    name: '冬',
    sub: '静かな観瀑',
    img: '/images/summer.jpg',
    thumb: '/images/summer-sm.jpg',
    short: '落葉した岩壁があらわになり、渓谷は静けさに包まれます。人が少なく、水の音をゆっくり味わえる季節です。',
    desc: '落葉した岩壁があらわになり、渓谷は静けさに包まれます。人が少なく、水の音をゆっくり味わえる季節です。',
    chip: '岩壁・静けさ',
    meta: [
      { k: '主な見どころ', v: '岩壁・静かな渓谷' },
      { k: '服装', v: '防寒具・滑りにくい靴' },
      { k: '光と撮影', v: '澄んだ空気で滝の造形が際立つ' },
      { k: '混雑', v: '少ない' },
      { k: '親子・シニア', v: '△ 冷え込みと凍結に注意' },
    ],
  },
];
