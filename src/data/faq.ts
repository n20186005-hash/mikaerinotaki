import type { Localized } from '../i18n/types';

export interface FaqItem {
  q: Localized;
  /** 回答（内部リンクを含む場合は href="/slug" 形式。语系パスへ書き換えられる） */
  a: Localized;
}

export const faqs: FaqItem[] = [
  {
    q: { ja: '入場は無料ですか？', en: 'Is admission free?', 'zh-Hant': '入場免費嗎？' },
    a: {
      ja: '滝そのものの見学は無料です。あじさい祭りの期間は、臨時駐車場が有料になる場合があります。',
      en: 'Viewing the falls themselves is free. During the Hydrangea Festival, temporary parking may be paid.',
      'zh-Hant': '觀賞瀑布本身免費。繡球花祭期間，臨時停車場可能收費。',
    },
  },
  {
    q: { ja: 'あじさいの見頃はいつ？', en: 'When is the hydrangea peak?', 'zh-Hant': '繡球花何時最美？' },
    a: {
      ja: "例年6月が見頃です。天候により前後します。詳しくは<a href='/ajisai'>あじさい特集</a>をご覧ください。",
      en: "Usually peak in June, varying with weather. See the <a href='/ajisai'>Hydrangea feature</a> for details.",
      'zh-Hant': '通常6月最美，會因天候提前或延後。詳見<a href="/ajisai">繡球花特輯</a>。',
    },
  },
  {
    q: { ja: '山登りは必要ですか？', en: 'Do I need to hike?', 'zh-Hant': '需要爬山嗎？' },
    a: {
      ja: '本格的な登山は不要です。渓谷沿いの遊歩道と石段を歩きます。短いクイック観瀑ルートなら約30分です。',
      en: 'No serious climbing. You walk a gorgeside trail with stone steps. The short viewing route is about 30 min.',
      'zh-Hant': '不需要正規登山。沿溪谷步道與石階步行，短程觀瀑路線約30分。',
    },
  },
  {
    q: { ja: '駐車場はどこにありますか？', en: 'Where is parking?', 'zh-Hant': '停車場在哪裡？' },
    a: {
      ja: "清流荘前・都荘前・蛍橋前などに、普通車あわせて約50台の駐車スペースがあります。詳しくは<a href='/access'>アクセスページ</a>へ。",
      en: "About 50 car spaces in total at Seiryuso-mae, Tosou-mae, Hotaribashi-mae and others. See the <a href='/access'>Access page</a>.",
      'zh-Hant': '清流荘前、都荘前、螢橋前等約共50個小客車車位。詳見<a href="/access">交通頁</a>。',
    },
  },
  {
    q: { ja: 'ベビーカーでも大丈夫？', en: 'OK with a stroller?', 'zh-Hant': '嬰兒車可以嗎？' },
    a: {
      ja: '段差や石段が多いため、抱っこ紐のほうが安心です。',
      en: 'Many steps and gaps — a baby carrier is safer than a stroller.',
      'zh-Hant': '階梯與高低差多，使用背帶比嬰兒車安心。',
    },
  },
  {
    q: { ja: '雨の日でも行けますか？', en: 'Can I visit on a rainy day?', 'zh-Hant': '雨天也可以去嗎？' },
    a: {
      ja: '楽しめます。曇りや小雨の日はあじさいの色がやわらかく、渓谷に霧が立ちます。ただし足元が滑りやすくなるため、滑りにくい靴でお越しください。',
      en: 'Yes. On cloudy or light-rain days the hydrangea colors soften and mist rises in the gorge. But it gets slippery — wear grippy shoes.',
      'zh-Hant': '可以。陰天或細雨時繡球花色調柔和，溪谷會起霧。但地面濕滑，請穿止滑鞋。',
    },
  },
  {
    q: { ja: '犬を連れて行けますか？', en: 'Can I bring a dog?', 'zh-Hant': '可以帶狗嗎？' },
    a: {
      ja: '散策路を歩けますが、リードの着用やマナーにご配慮ください。混雑時は特に周囲へのご配慮を。',
      en: 'Dogs can walk the trail — please keep them leashed and be considerate, especially when crowded.',
      'zh-Hant': '可走步道，請繫繩並注意禮節，人多時尤應體諒他人。',
    },
  },
  {
    q: { ja: '夜のライトアップはありますか？', en: 'Is there a night light-up?', 'zh-Hant': '夜間有點燈嗎？' },
    a: {
      ja: '時期によってライトアップが行われます。期間や時間は変わることがあるため、最新の案内をご確認ください。',
      en: 'Light-ups are held at certain times. Periods and hours vary — check the latest notice.',
      'zh-Hant': '特定時期會舉辦點燈。期間與時間可能變動，請確認最新公告。',
    },
  },
  {
    q: { ja: 'どのくらい滞在すればいい？', en: 'How long should I stay?', 'zh-Hant': '建議停留多久？' },
    a: {
      ja: "滝の散策だけなら30〜90分が目安です。周辺とあわせれば半日〜一日の<a href='/nearby'>モデルコース</a>も楽しめます。",
      en: 'Just the falls: about 30–90 min. With the surroundings, half-day to full-day <a href="/nearby">model courses</a> are possible.',
      'zh-Hant': '只看瀑布約30〜90分；搭配周邊可安排半日〜一日<a href="/nearby">推薦行程</a>。',
    },
  },
  {
    q: { ja: '公共交通でも行けますか？', en: 'Can I get there by public transport?', 'zh-Hant': '大眾運輸能到達嗎？' },
    a: {
      ja: 'JR唐津線「相知駅」下車、タクシーで約7〜8分です。本数が少ないため、事前に時刻をご確認ください。',
      en: 'Get off at Arito Stn (JR Karatsu Line), then ~7–8 min by taxi. Few services — check times in advance.',
      'zh-Hant': 'JR唐津線「相知站」下車，轉乘計程車約7〜8分。班次少，請先確認時刻。',
    },
  },
];
