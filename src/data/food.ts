import type { Localized } from '../i18n/types';

export interface FoodPill {
  text: Localized;
  warn?: boolean;
}

export interface FoodPlace {
  kanji: string; // 装飾用日本語文字（原語のまま）
  badge: Localized;
  name: Localized;
  sub: Localized;
  desc: Localized;
  pills: FoodPill[];
}

export const nearFalls: FoodPlace[] = [
  {
    kanji: '川',
    badge: { ja: '滝そば', en: 'By the falls', 'zh-Hant': '瀑布旁' },
    name: { ja: '渓谷沿いの宿の食事処（川魚料理）', en: 'Riverside inn dining (river fish)', 'zh-Hant': '溪谷旁旅宿餐廳（河魚料理）' },
    sub: { ja: '滝を歩いたあとに味わう、相知の川魚料理。', en: 'Arito’s river-fish dishes after your walk.', 'zh-Hant': '散步後品嘗相知的河魚料理。' },
    desc: {
      ja: '滝の遊歩道近くにある宿に併設された食事処が中心です。鯉のあらいや川魚を使った料理が知られています。食事のみの利用可否・営業時間は変わりやすいため、事前に電話でご確認ください。',
      en: 'Mostly inn restaurants near the trail. Known for carp sashimi and river-fish dishes. Whether dining-only is possible and opening hours change often — call ahead.',
      'zh-Hant': '多為瀑布步道附近的旅宿附設餐廳，以鯉魚刺身與河魚料理聞名。是否供單點、營業時間常變動，請先電話確認。',
    },
    pills: [
      { text: { ja: '川魚料理', en: 'River fish', 'zh-Hant': '河魚料理' }, warn: false },
      { text: { ja: '要事前確認', en: 'Call ahead', 'zh-Hant': '請先確認' }, warn: true },
      { text: { ja: '駐車場あり', en: 'Parking', 'zh-Hant': '有停車場' }, warn: false },
    ],
  },
  {
    kanji: '豆',
    badge: { ja: '相知', en: 'Arito', 'zh-Hant': '相知' },
    name: { ja: '相知の豆腐店・豆製品の店', en: 'Arito tofu & soy shops', 'zh-Hant': '相知的豆腐店・豆製品店' },
    sub: { ja: '相知の大豆で作る、豆腐と豆のスイーツ。', en: 'Tofu and soy sweets from local Arito soybeans.', 'zh-Hant': '以相知在地大豆製作的豆腐與豆類甜點。' },
    desc: {
      ja: '相知の市街には、地元の大豆を使う豆腐店や豆製品の店があります。豆腐・豆乳・豆のスイーツは、帰り道のお土産にも向きます。小規模な店が多く定休日もあるため、訪問前に確認を。',
      en: 'Arito town has tofu and soy-product shops using local soybeans. Tofu, soy milk and bean sweets also make good souvenirs. Many are small with irregular days off — check before visiting.',
      'zh-Hant': '相知市區有使用在地大豆的豆腐與豆製品店。豆腐、豆漿與豆類甜點也很適合當伴手禮。多為小店且可能有公休日，請先確認。',
    },
    pills: [
      { text: { ja: '豆腐・豆スイーツ', en: 'Tofu & soy sweets', 'zh-Hant': '豆腐・豆甜點' }, warn: false },
      { text: { ja: '定休日あり', en: 'Irregular off-days', 'zh-Hant': '有公休日' }, warn: true },
      { text: { ja: 'お土産向き', en: 'Good souvenir', 'zh-Hant': '適合伴手禮' }, warn: false },
    ],
  },
  {
    kanji: '滝',
    badge: { ja: '周辺', en: 'Nearby', 'zh-Hant': '周邊' },
    name: { ja: '滝周辺の宿・食事処（そのほか）', en: 'Other lodgings & eateries nearby', 'zh-Hant': '瀑布周邊其他旅宿・餐飲' },
    sub: { ja: '滝周辺の食事処。', en: 'Eateries around the falls.', 'zh-Hant': '瀑布周邊的餐飲店。' },
    desc: {
      ja: '滝の周辺には、ほかにも食事のできる宿・お店があります。営業状況が変わりやすいため、利用前に電話で確認してから向かうと安心です。',
      en: 'There are other lodgings and shops around the falls. Status changes often — call before going.',
      'zh-Hant': '瀑布周邊還有其他可用餐的旅宿與店家。營業狀況常變動，前往前請先電話確認。',
    },
    pills: [
      { text: { ja: '要事前確認', en: 'Call ahead', 'zh-Hant': '請先確認' }, warn: true },
      { text: { ja: '川沿い', en: 'Riverside', 'zh-Hant': '沿溪' }, warn: false },
    ],
  },
];

export const karatsuFood: { name: Localized; desc: Localized }[] = [
  { name: { ja: '呼子のイカ', en: 'Yobuko squid', 'zh-Hant': '呼子烏賊' }, desc: { ja: '透き通った活イカの姿造りは唐津の名物。呼子まで足を延ばして。', en: 'Translucent live-squid sashimi is a Karatsu specialty — worth the trip to Yobuko.', 'zh-Hant': '晶瑩活烏賊刺身是唐津名物，值得專程前往呼子。' } },
  { name: { ja: '佐賀牛', en: 'Saga beef', 'zh-Hant': '佐賀牛' }, desc: { ja: 'きめ細やかな霜降りで知られるブランド牛。唐津市街の店で。', en: 'A famed marbled wagyu brand, served at shops in central Karatsu.', 'zh-Hant': '以細緻油花聞名的品牌和牛，於唐津市區店家可品嘗。' } },
  { name: { ja: '唐津バーガー', en: 'Karatsu burger', 'zh-Hant': '唐津漢堡' }, desc: { ja: '地元で長く愛されるご当地バーガー。ドライブのお供に。', en: 'A long-loved local burger — great on a drive.', 'zh-Hant': '當地長年人氣的在地漢堡，適合開車途中的點心。' } },
  { name: { ja: '唐津茶', en: 'Karatsu tea', 'zh-Hant': '唐津茶' }, desc: { ja: '唐津で育まれるお茶。お土産にもおすすめです。', en: 'Tea grown in Karatsu — also a good souvenir.', 'zh-Hant': '唐津栽種的茶葉，也很推薦當伴手禮。' } },
  { name: { ja: '相知高菜', en: 'Arito takana', 'zh-Hant': '相知高菜' }, desc: { ja: '相知の地元食材。豆製品とあわせて味わいたい一品。', en: 'A local Arito ingredient — pairs well with soy dishes.', 'zh-Hant': '相知在地食材，適合搭配豆製品一同品嘗。' } },
  { name: { ja: '地酒・豆製品', en: 'Local sake & soy', 'zh-Hant': '地酒・豆製品' }, desc: { ja: '相知の豆腐・豆乳や、地元の地酒も見逃せません。', en: 'Arito’s tofu, soy milk and local sake are not to be missed.', 'zh-Hant': '相知的豆腐、豆漿與在地清酒同樣不容錯過。' } },
];
