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
    name: 'あじさいの宿 都荘',
    sub: '滝を歩いたあとに味わう、相知の川魚料理。',
    desc: '見帰りの滝の遊歩道近くにある宿。鯉のあらいや川魚を使った料理が知られています。食事のみの利用可否は、事前に電話でご確認ください。',
    pills: [{ text: '川魚料理' }, { text: '要事前確認', warn: true }, { text: '駐車場あり' }],
  },
  {
    kanji: '豆',
    badge: '相知',
    name: '大豆工房 いきさ屋',
    sub: '相知の大豆で作る、豆腐と豆のスイーツ。',
    desc: '地元・相知の家族経営。豆腐や豆乳、豆を使ったスイーツが楽しめます。帰り道のお土産にも。定休日があるため、訪問前に確認を。',
    pills: [{ text: '豆腐・豆スイーツ' }, { text: '定休日あり', warn: true }, { text: 'お土産向き' }],
  },
  {
    kanji: '滝',
    badge: '周辺',
    name: '清流荘・山水・里美荘 ほか',
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
