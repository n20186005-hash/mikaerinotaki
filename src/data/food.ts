export interface FoodPill {
  text: string;
  warn?: boolean;
}

export interface FoodPlace {
  kanji: string;
  badge: string;
  name: string;
  sub: string;
  desc: string;
  pills: FoodPill[];
}

export const nearFalls: FoodPlace[] = [
  {
    kanji: '川',
    badge: '滝そば',
    name: '渓谷沿いの宿の食事処（川魚料理）',
    sub: '滝を歩いたあとに味わう、相知の川魚料理。',
    desc: '滝の遊歩道近くにある宿に併設された食事処が中心です。鯉のあらいや川魚を使った料理が知られています。食事のみの利用可否・営業時間は変わりやすいため、事前に電話でご確認ください。',
    pills: [{ text: '川魚料理' }, { text: '要事前確認', warn: true }, { text: '駐車場あり' }],
  },
  {
    kanji: '豆',
    badge: '相知',
    name: '相知の豆腐店・豆製品の店',
    sub: '相知の大豆で作る、豆腐と豆のスイーツ。',
    desc: '相知の市街には、地元の大豆を使う豆腐店や豆製品の店があります。豆腐・豆乳・豆のスイーツは、帰り道のお土産にも向きます。小規模な店が多く定休日もあるため、訪問前に確認を。',
    pills: [{ text: '豆腐・豆スイーツ' }, { text: '定休日あり', warn: true }, { text: 'お土産向き' }],
  },
  {
    kanji: '滝',
    badge: '周辺',
    name: '滝周辺の宿・食事処（そのほか）',
    sub: '滝周辺の食事処。',
    desc: '滝の周辺には、ほかにも食事のできる宿・お店があります。営業状況が変わりやすいため、利用前に電話で確認してから向かうと安心です。',
    pills: [{ text: '要事前確認', warn: true }, { text: '川沿い' }],
  },
];

export const karatsuFood: { name: string; desc: string }[] = [
  { name: '呼子のイカ', desc: '透き通った活イカの姿造りは唐津の名物。呼子まで足を延ばして。' },
  { name: '佐賀牛', desc: 'きめ細やかな霜降りで知られるブランド牛。唐津市街の店で。' },
  { name: '唐津バーガー', desc: '地元で長く愛されるご当地バーガー。ドライブのお供に。' },
  { name: '唐津茶', desc: '唐津で育まれるお茶。お土産にもおすすめです。' },
  { name: '相知高菜', desc: '相知の地元食材。豆製品とあわせて味わいたい一品。' },
  { name: '地酒・豆製品', desc: '相知の豆腐・豆乳や、地元の地酒も見逃せません。' },
];
