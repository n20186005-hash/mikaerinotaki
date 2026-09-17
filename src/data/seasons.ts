import type { Localized } from '../i18n/types';

export interface SeasonMeta {
  k: Localized;
  v: Localized;
}

export interface Season {
  id: string;
  when: string;
  name: Localized;
  sub: Localized;
  img: string;
  thumb: string;
  short: Localized;
  desc: Localized;
  chip: Localized;
  meta: SeasonMeta[];
}

export const seasons: Season[] = [
  {
    id: 'spring',
    when: 'Feb–Apr',
    name: { ja: '春', en: 'Spring', 'zh-Hant': '春' },
    sub: { ja: '桜と春の渓谷', en: 'Cherry blossoms & spring gorge', 'zh-Hant': '櫻花與春之溪谷' },
    img: '/images/spring.jpg',
    thumb: '/images/spring-sm.jpg',
    short: {
      ja: '2〜3月の河津桜から、岩肌に映えるソメイヨシノへ。淡い花色と白い水流の対比が美しい季節です。',
      en: 'From Kawazu cherry (Feb–Mar) to Somei-Yoshino against the rock face. A gentle season where pale blossoms contrast with the white cascade.',
      'zh-Hant': '從2〜3月的河津櫻，到映在岩壁上的染井吉野。淡雅花色與白色水流相映成趣的季節。',
    },
    desc: {
      ja: '河津桜(2〜3月)からソメイヨシノへ。淡い花色と岩肌の白い水流が響き合う、やわらかな季節です。',
      en: 'From Kawazu cherry (Feb–Mar) to Somei-Yoshino. A soft season where pale blossoms and the white flow on the rock face resonate.',
      'zh-Hant': '從河津櫻（2〜3月）到染井吉野。淡雅花色與岩壁上的白色水流相互輝映，是柔和的季節。',
    },
    chip: { ja: '河津桜・春の渓谷', en: 'Kawazu cherry & spring gorge', 'zh-Hant': '河津櫻・春之溪谷' },
    meta: [
      { k: { ja: '主な見どころ', en: 'Highlights', 'zh-Hant': '主要看點' }, v: { ja: '河津桜・桜・芽吹きの新緑', en: 'Kawazu & Somei cherry, fresh green', 'zh-Hant': '河津櫻・櫻花・初綠' } },
      { k: { ja: '服装', en: 'Clothing', 'zh-Hant': '服裝' }, v: { ja: '朝晩は冷えるので上着を', en: 'A jacket for chilly mornings/evenings', 'zh-Hant': '早晚偏涼，備外套' } },
      { k: { ja: '光と撮影', en: 'Light & photo', 'zh-Hant': '光線與拍攝' }, v: { ja: '午前のやわらくい光。桜を前景に', en: 'Soft morning light; cherry in the foreground', 'zh-Hant': '上午柔和光線，以櫻花為前景' } },
      { k: { ja: '混雑', en: 'Crowds', 'zh-Hant': '擁擠度' }, v: { ja: '桜の週末はやや多め', en: 'Busier on cherry-blossom weekends', 'zh-Hant': '櫻花週末稍多' } },
      { k: { ja: '親子・シニア', en: 'Families / seniors', 'zh-Hant': '親子・長輩' }, v: { ja: '○ ゆっくり歩けば安心', en: '○ Easy at a relaxed pace', 'zh-Hant': '○ 放慢腳步即可' } },
    ],
  },
  {
    id: 'earlysummer',
    when: 'May–Jun',
    name: { ja: '初夏', en: 'Early summer', 'zh-Hant': '初夏' },
    sub: { ja: 'あじさいと蛍', en: 'Hydrangea & fireflies', 'zh-Hant': '繡球花與螢火蟲' },
    img: '/images/ajisai.jpg',
    thumb: '/images/ajisai-sm.jpg',
    short: {
      ja: '5〜6月は蛍、6月はあじさいが見頃。曇りや小雨の日ほど花色がやわらく、この滝の代名詞となる眺めです。',
      en: 'Fireflies in May–Jun, hydrangeas peak in Jun. The softer the cloudy or light-rain day, the gentler the blooms — the falls’ signature view.',
      'zh-Hant': '5〜6月有螢火蟲，6月繡球花盛開。越是陰天或細雨，花色越柔和，正是這座瀑布的代名詞景致。',
    },
    desc: {
      ja: '5〜6月は蛍、6月はあじさいが見頃。しっとりとした渓谷に花が映える、この滝を代表する時期です。',
      en: 'Fireflies in May–Jun, hydrangeas peak in Jun. Blooms glow in the moist gorge — the falls’ most representative season.',
      'zh-Hant': '5〜6月有螢火蟲，6月繡球花盛開。濕潤溪谷襯得花朵動人，是這座瀑布最具代表性的時期。',
    },
    chip: { ja: 'あじさい・蛍', en: 'Hydrangea & fireflies', 'zh-Hant': '繡球花・螢火蟲' },
    meta: [
      { k: { ja: '主な見どころ', en: 'Highlights', 'zh-Hant': '主要看點' }, v: { ja: 'あじさい・蛍・梅雨の渓谷', en: 'Hydrangea, fireflies, rainy-season gorge', 'zh-Hant': '繡球花・螢火蟲・梅雨季溪谷' } },
      { k: { ja: '服装', en: 'Clothing', 'zh-Hant': '服裝' }, v: { ja: '雨具・滑りにくい靴・虫よけ', en: 'Rain gear, grippy shoes, insect repellent', 'zh-Hant': '雨具・止滑鞋・防蚊' } },
      { k: { ja: '光と撮影', en: 'Light & photo', 'zh-Hant': '光線與拍攝' }, v: { ja: '曇天や小雨が花に最適', en: 'Overcast / light rain suits the blooms', 'zh-Hant': '陰天或細雨最適合花朵' } },
      { k: { ja: '混雑', en: 'Crowds', 'zh-Hant': '擁擠度' }, v: { ja: 'あじさい祭りの週末は混雑', en: 'Crowded on festival weekends', 'zh-Hant': '祭典週末擁擠' } },
      { k: { ja: '親子・シニア', en: 'Families / seniors', 'zh-Hant': '親子・長輩' }, v: { ja: '△ 雨天時は足元注意', en: '△ Watch footing in rain', 'zh-Hant': '△ 雨天注意腳下' } },
    ],
  },
  {
    id: 'summer',
    when: 'Jul–Aug',
    name: { ja: '盛夏', en: 'Midsummer', 'zh-Hant': '盛夏' },
    sub: { ja: '深緑と水しぶき', en: 'Deep green & spray', 'zh-Hant': '深綠與水花' },
    img: '/images/summer.jpg',
    thumb: '/images/summer-sm.jpg',
    short: {
      ja: '渓谷は濃い緑に包まれ、滝の水しぶきが涼を運びます。避暑と森林浴を兼ねた散策に向く時期です。',
      en: 'The gorge is wrapped in deep green, and the waterfall’s spray brings coolness. Good for a forest-bath walk to escape the heat.',
      'zh-Hant': '溪谷籠罩在濃綠中，瀑布水花送來涼意。適合兼作避暑與森林浴的散步。',
    },
    desc: {
      ja: '渓谷は濃い緑に包まれ、水しぶきが涼を運びます。避暑と森林浴を兼ねた散策にぴったりです。',
      en: 'The gorge is wrapped in deep green and the spray carries coolness — perfect for a forest-bath walk.',
      'zh-Hant': '溪谷籠罩在濃綠中，水花送來涼意，最適合兼作避暑與森林浴的散步。',
    },
    chip: { ja: '深緑・避暑', en: 'Deep green & cool', 'zh-Hant': '深綠・避暑' },
    meta: [
      { k: { ja: '主な見どころ', en: 'Highlights', 'zh-Hant': '主要看點' }, v: { ja: '深緑・水しぶき・ライトアップ', en: 'Deep green, spray, light-up', 'zh-Hant': '深綠・水花・點燈' } },
      { k: { ja: '服装', en: 'Clothing', 'zh-Hant': '服裝' }, v: { ja: '涼しい服装・虫よけ・帽子', en: 'Cool clothes, repellent, hat', 'zh-Hant': '涼爽衣物・防蚊・帽子' } },
      { k: { ja: '光と撮影', en: 'Light & photo', 'zh-Hant': '光線與拍攝' }, v: { ja: '木漏れ日と水の流れを長秒で', en: 'Long-exposure of dappled light & flow', 'zh-Hant': '用慢門拍樹隙光與水流' } },
      { k: { ja: '混雑', en: 'Crowds', 'zh-Hant': '擁擠度' }, v: { ja: '比較的ゆったり', en: 'Relatively relaxed', 'zh-Hant': '相對寬鬆' } },
      { k: { ja: '親子・シニア', en: 'Families / seniors', 'zh-Hant': '親子・長輩' }, v: { ja: '○ 涼を求める散歩に', en: '○ A walk for the cool', 'zh-Hant': '○ 尋涼的散步' } },
    ],
  },
  {
    id: 'autumn',
    when: 'Oct–Dec',
    name: { ja: '秋', en: 'Autumn', 'zh-Hant': '秋' },
    sub: { ja: '紅葉', en: 'Autumn leaves', 'zh-Hant': '紅葉' },
    img: '/images/falls.jpg',
    thumb: '/images/falls-sm.jpg',
    short: {
      ja: '岩壁と紅葉、そして水流が織りなす錦の渓谷。ライトアップと合わせて、一年で最も色彩豊かな季節です。',
      en: 'A brocade gorge woven by rock face, autumn leaves and flow. With the light-up, the most colourful season of the year.',
      'zh-Hant': '岩壁、紅葉與水流交織成錦繡溪谷。搭配點燈，是一年中最繽紛的季節。',
    },
    desc: {
      ja: '岩壁と紅葉、そして水流が織りなす錦の渓谷。ライトアップと合わせ、一年で最も色彩豊かな季節です。',
      en: 'A brocade gorge woven by the rock, the leaves and the flow. With the light-up, the most colourful season of the year.',
      'zh-Hant': '岩壁、紅葉與水流交織成錦繡溪谷。搭配點燈，是一年中最繽紛的季節。',
    },
    chip: { ja: '紅葉・ライトアップ', en: 'Leaves & light-up', 'zh-Hant': '紅葉・點燈' },
    meta: [
      { k: { ja: '主な見どころ', en: 'Highlights', 'zh-Hant': '主要看點' }, v: { ja: '紅葉・ライトアップ', en: 'Leaves & light-up', 'zh-Hant': '紅葉・點燈' } },
      { k: { ja: '服装', en: 'Clothing', 'zh-Hant': '服裝' }, v: { ja: '昼夜の寒暖差に対応できる服装', en: 'Layers for day–night temperature swings', 'zh-Hant': '可應對日夜溫差的衣物' } },
      { k: { ja: '光と撮影', en: 'Light & photo', 'zh-Hant': '光線與拍攝' }, v: { ja: '夕方〜ライトアップが狙い目', en: 'Aim for dusk to light-up', 'zh-Hant': '傍晚至點燈為佳' } },
      { k: { ja: '混雑', en: 'Crowds', 'zh-Hant': '擁擠度' }, v: { ja: '紅葉の見頃は多め', en: 'Busy at peak foliage', 'zh-Hant': '紅葉盛期較多' } },
      { k: { ja: '親子・シニア', en: 'Families / seniors', 'zh-Hant': '親子・長輩' }, v: { ja: '○ 日中の散策がおすすめ', en: '○ Daytime walks recommended', 'zh-Hant': '○ 建議白天散步' } },
    ],
  },
  {
    id: 'winter',
    when: 'Jan–Feb',
    name: { ja: '冬', en: 'Winter', 'zh-Hant': '冬' },
    sub: { ja: '静かな観瀑', en: 'Quiet falls', 'zh-Hant': '靜謐觀瀑' },
    img: '/images/summer.jpg',
    thumb: '/images/summer-sm.jpg',
    short: {
      ja: '落葉した岩壁があらわになり、渓谷は静けさに包まれます。人が少なく、水の音をゆっくり味わえる季節です。',
      en: 'Bare rock faces are revealed and the gorge is wrapped in silence. Few people — a season to savour the sound of water slowly.',
      'zh-Hant': '落葉後的岩壁顯露，溪谷籠罩在靜謐中。人少，是慢慢品味水聲的季節。',
    },
    desc: {
      ja: '落葉した岩壁があらわになり、渓谷は静けさに包まれます。人が少なく、水の音をゆっくり味わえる季節です。',
      en: 'Bare rock faces are revealed and the gorge is wrapped in silence. Few people — a season to slowly savour the sound of water.',
      'zh-Hant': '落葉後的岩壁顯露，溪谷籠罩在靜謐中。人少，是慢慢品味水聲的季節。',
    },
    chip: { ja: '岩壁・静けさ', en: 'Rock face & quiet', 'zh-Hant': '岩壁・靜謐' },
    meta: [
      { k: { ja: '主な見どころ', en: 'Highlights', 'zh-Hant': '主要看點' }, v: { ja: '岩壁・静かな渓谷', en: 'Rock face & quiet gorge', 'zh-Hant': '岩壁・靜謐溪谷' } },
      { k: { ja: '服装', en: 'Clothing', 'zh-Hant': '服裝' }, v: { ja: '防寒具・滑りにくい靴', en: 'Warm gear, grippy shoes', 'zh-Hant': '禦寒衣物・止滑鞋' } },
      { k: { ja: '光と撮影', en: 'Light & photo', 'zh-Hant': '光線與拍攝' }, v: { ja: '澄んだ空気で滝の造形が際立つ', en: 'Clear air shows the falls’ form', 'zh-Hant': '空氣清澄，瀑布造形分明' } },
      { k: { ja: '混雑', en: 'Crowds', 'zh-Hant': '擁擠度' }, v: { ja: '少ない', en: 'Few', 'zh-Hant': '稀少' } },
      { k: { ja: '親子・シニア', en: 'Families / seniors', 'zh-Hant': '親子・長輩' }, v: { ja: '△ 冷え込みと凍結に注意', en: '△ Mind cold & ice', 'zh-Hant': '△ 注意嚴寒與結冰' } },
    ],
  },
];
