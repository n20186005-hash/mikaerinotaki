import type { Localized } from '../i18n/types';

export interface FacilityItem {
  label: Localized;
  body: Localized;
}

export interface FacilityGroup {
  id: string;
  icon: string;
  title: Localized;
  lead: Localized;
  items: FacilityItem[];
  caution?: Localized;
}

export const facilityGroups: FacilityGroup[] = [
  {
    id: 'toilet',
    icon: '🚻',
    title: { ja: 'トイレ・水場', en: 'Toilets & water', 'zh-Hant': '廁所・取水' },
    lead: { ja: '渓谷沿いの散策は30〜90分。出発前に済ませておくと安心です。', en: 'A gorge walk is 30–90 min; it helps to go before you set out.', 'zh-Hant': '溪谷散步約30〜90分，出發前先解決較安心。' },
    items: [
      { label: { ja: '滝周辺', en: 'Near the falls', 'zh-Hant': '瀑布周邊' }, body: { ja: '駐車エリアや散策路の入口周辺に公衆トイレがあります。清掃状況や利用時間は時期により変わります。', en: 'Public toilets sit near the parking and trail entrance. Cleaning and opening hours vary by season.', 'zh-Hant': '停車區與步道入口附近設有公廁。清潔與開放時間依季節而異。' } },
      { label: { ja: 'あじさい祭り期間', en: 'During the festival', 'zh-Hant': '祭典期間' }, body: { ja: '来場者が増えるため、臨時のトイレが設けられることがあります。混雑時は列に並ぶ余裕を見ておきましょう。', en: 'Extra temporary toilets may be added when crowds grow. Allow time to queue at busy moments.', 'zh-Hant': '人潮增多時可能加設臨時廁所。擁擠時請預留排隊時間。' } },
      { label: { ja: '携帯トイレ・ティッシュ', en: 'Portable toilet & tissue', 'zh-Hant': '攜帶式馬桶・衛生紙' }, body: { ja: '簡易トイレのみの年もあります。小さなお子さま連れは、ティッシュと携帯トイレを一枚持参すると安心です。', en: 'Some years only basic toilets are available. With small children, bring tissue and a portable toilet.', 'zh-Hant': '有些年份只有簡易廁所。帶小孩建議自備衛生紙與攜帶式馬桶。' } },
      { label: { ja: '飲料水', en: 'Drinking water', 'zh-Hant': '飲用水' }, body: { ja: '自販機は限られます。夏場は飲み物を多めに。渓谷の水は飲用に適さないため、必ず持ち参の水を。', en: 'Vending machines are limited; bring extra drinks in summer. Gorge water is not for drinking.', 'zh-Hant': '自動販賣機有限，夏天多帶飲料。溪谷的水不適飲用，務必自備。' } },
    ],
    caution: { ja: '夜間ライトアップ時は閉まっている場合があります。滞在前に利用を済ませておくのがおすすめです。', en: 'May be closed during night light-ups; use them before your visit.', 'zh-Hant': '夜間點燈時可能關閉，建議在停留前先使用。' },
  },
  {
    id: 'parking',
    icon: '🅿️',
    title: { ja: '駐車場', en: 'Parking', 'zh-Hant': '停車場' },
    lead: { ja: '通常期と、あじさい祭り期間で運用が大きく変わります。', en: 'Operation differs greatly between the regular season and the hydrangea festival.', 'zh-Hant': '平常期與繡球花祭期間的運作差異很大。' },
    items: [
      { label: { ja: '通常期', en: 'Regular season', 'zh-Hant': '平常期' }, body: { ja: '滝に近いエリアに、普通車あわせて数十台規模の駐車スペースがあります（目安：約50台）。無料で利用できるのが一般的です。', en: 'Dozens of car spaces near the falls (roughly 50). Usually free to use.', 'zh-Hant': '瀑布附近有數十個小客車車位（約50個），一般為免費。' } },
      { label: { ja: 'あじさい祭り期間', en: 'Festival period', 'zh-Hant': '祭典期間' }, body: { ja: '臨時駐車場の有料化、交通規制、シャトルバスの運行など、運用が年ごとに変わります。', en: 'Paid temporary lots, traffic control and shuttle operation vary by year.', 'zh-Hant': '臨時停車場收費、交通管制、接駁巴士等，每年運作不同。' } },
      { label: { ja: '大型車', en: 'Large vehicles', 'zh-Hant': '大型車' }, body: { ja: '大型車は停められる場所が限られます。団体・バス利用は事前に公式案内を確認してください。', en: 'Spaces for large vehicles are limited; groups/buses should check the official notice first.', 'zh-Hant': '大型車可停處有限，團體・遊覽車請先查官方公告。' } },
      { label: { ja: '満車時', en: 'When full', 'zh-Hant': '客滿時' }, body: { ja: '滝まで歩く距離が長くなる上流・下流側のスペースを使うことになります。時間に余裕を持って到着しましょう。', en: 'You may use upstream/downstream spaces farther from the falls — arrive with time to spare.', 'zh-Hant': '可能要使用離瀑布較遠的上游／下游車位，請提早抵達。' } },
    ],
    caution: { ja: '台数は目安です。年や行事によって変わるため、最新情報は公式の案内でご確認ください。', en: 'Counts are approximate; check the latest official notice as they vary by year.', 'zh-Hant': '數量僅供參考，會因年份與活動而異，請查最新官方公告。' },
  },
  {
    id: 'food',
    icon: '🍽',
    title: { ja: '飲食（タイプ別）', en: 'Food (by type)', 'zh-Hant': '餐飲（依類型）' },
    lead: { ja: '滝の周辺は飲食店が多くありません。「滝のそば」と「相知・唐津まで出る」を分けて考えると失敗しません。', en: 'Few eateries right by the falls. Splitting “by the falls” from “out to Arito/Karatsu” avoids mistakes.', 'zh-Hant': '瀑布周邊餐飲不多。把「瀑布旁」與「到相知・唐津」分開想就不易出錯。' },
    items: [
      { label: { ja: '滝のそばの食事処', en: 'By the falls', 'zh-Hant': '瀑布旁的店' }, body: { ja: '渓谷沿いの宿に併設された食事処が中心。川魚料理や定食など、歩いたあとに落ち着いて食べられる場所です。営業時間・予約可否は変わりやすいため、事前の電話確認がおすすめです。', en: 'Mostly restaurants attached to inns along the gorge — river-fish dishes and set meals to relax after walking. Hours/reservations change, so call ahead.', 'zh-Hant': '以溪谷沿岸旅館附設的餐廳為主，有川魚料理與定食，走完可好好用餐。營業與可否預約常變動，建議先電話確認。' } },
      { label: { ja: '軽食・甘味', en: 'Snacks & sweets', 'zh-Hant': '輕食・甜點' }, body: { ja: '豆製品や地元素材を使った軽食・甘味の店が、相知の市街に点在します。休日は品切れや早じまいもあります。', en: 'Snack and sweet shops using local soy and produce dot Arito town; weekends may sell out early.', 'zh-Hant': '相知市區散落著使用豆製品與在地食材的輕食・甜點店，假日可能售罄或提早打烊。' } },
      { label: { ja: '相知市街の飲食店', en: 'Arito town eateries', 'zh-Hant': '相知市區餐飲' }, body: { ja: '車で5〜10分の相知市街に、食堂・そば・豆腐料理などの小規模店があります。', en: 'A 5–10 min drive to Arito town brings small diners, soba and tofu places.', 'zh-Hant': '開車5〜10分到相知市區，有小吃店、蕎麥麵、豆腐料理等小店。' } },
      { label: { ja: '唐津市街まで', en: 'To central Karatsu', 'zh-Hant': '到唐津市區' }, body: { ja: '車で20〜30分の唐津市街には、海産物・肉料理・ご当地バーガーなど選択肢が広がります。滝のすぐそばではない点に注意。', en: '20–30 min to central Karatsu opens seafood, meat and local burgers — but not right by the falls.', 'zh-Hant': '開車20〜30分到唐津市區，有海鮮、肉料理、在地漢堡等選擇，但不在瀑布正旁。' } },
      { label: { ja: 'コンビニ・スーパー', en: 'Convenience / supermarket', 'zh-Hant': '超商・超市' }, body: { ja: '滝の周辺にはほとんどありません。弁当や飲み物は、相知市街か唐津IC周辺で調達するのが現実的です。', en: 'Barely any nearby; buy bento and drinks in Arito town or near Karatsu IC.', 'zh-Hant': '周邊幾乎沒有，便當與飲料在相知市區或唐津IC附近採買較實際。' } },
    ],
    caution: { ja: '当サイトは特定の店舗を推奨しません。営業状況は変わるため、各店の公式情報・電話でご確認ください。', en: 'We recommend no specific shop; confirm each one’s status by its official info or phone.', 'zh-Hant': '本站不推薦特定店家，營業狀況會變動，請洽各店官方資訊或電話確認。' },
  },
  {
    id: 'stay',
    icon: '🏨',
    title: { ja: '宿泊（タイプ別）', en: 'Stays (by type)', 'zh-Hant': '住宿（依類型）' },
    lead: { ja: '滝の周辺は静かな山あい。宿の数は多くありません。', en: 'A quiet mountain area with few lodgings.', 'zh-Hant': '瀑布周邊是靜謐山間，住宿不多。' },
    items: [
      { label: { ja: '渓谷沿いの宿', en: 'Inns by the gorge', 'zh-Hant': '溪谷旁旅宿' }, body: { ja: '滝の遊歩道近くに、川沿いの小規模な旅館・民宿が数軒あります。夜のライトアップや早朝の散策に便利です。', en: 'A few small riverside inns near the trail — handy for night light-ups and early walks.', 'zh-Hant': '步道附近有數間沿河小型旅館・民宿，方便夜間點燈與清晨散步。' } },
      { label: { ja: '相知・厳木の宿', en: 'Arito / Kishima stays', 'zh-Hant': '相知・嚴木住宿' }, body: { ja: '車で10〜20分圏内に、小規模な宿や温泉併設の施設があります。', en: 'Within 10–20 min drive are small inns and spa facilities.', 'zh-Hant': '車程10〜20分內有小型旅宿與附溫泉設施。' } },
      { label: { ja: '唐津市街のホテル', en: 'Hotels in Karatsu', 'zh-Hant': '唐津市區飯店' }, body: { ja: 'ビジネスホテルやシティホテルがまとまっています。食事・買い物の選択肢が多く、家族連れに向きます。', en: 'Business and city hotels cluster here, with more dining/shopping — good for families.', 'zh-Hant': '商務與城市飯店集中，餐飲購物選擇多，適合親子。' } },
      { label: { ja: 'キャンプ・車中泊', en: 'Camping / car sleep', 'zh-Hant': '露營・車中過夜' }, body: { ja: '周辺にキャンプ場・RVパークがあります。車中泊は迷惑駐車にならない場所を選び、必ず事前に確認してください。', en: 'Nearby campsites and RV parks exist; for car sleeping, pick a legal spot and confirm in advance.', 'zh-Hant': '周邊有營地與RV停車場；車中過夜請選不違規處並事先確認。' } },
    ],
    caution: { ja: '繁忙期（あじさい・紅葉）は早くから埋まります。滞在を伴う場合は早めの計画を。', en: 'Busy seasons (hydrangea, foliage) fill early — plan ahead if staying over.', 'zh-Hant': '旺季（繡球花・紅葉）很早客滿，若過夜請盡早規劃。' },
  },
  {
    id: 'shop',
    icon: '🛒',
    title: { ja: '買い物・コンビニ・直売所', en: 'Shopping & stores', 'zh-Hant': '購物・超商・直賣所' },
    lead: { ja: '「あるもの」で済ませるより、事前に補給しておくのが基本です。', en: 'Better to stock up beforehand than rely on what’s there.', 'zh-Hant': '與其將就現場，基本是事先備齊。' },
    items: [
      { label: { ja: 'コンビニ', en: 'Convenience store', 'zh-Hant': '超商' }, body: { ja: '滝の周辺にはありません。最寄りは相知市街・唐津IC周辺で、車で5〜15分ほど。', en: 'None near the falls; nearest are Arito town or near Karatsu IC, 5–15 min by car.', 'zh-Hant': '瀑布周邊沒有，最近在相知市區・唐津IC附近，車程5〜15分。' } },
      { label: { ja: 'スーパー・商店', en: 'Supermarket / shop', 'zh-Hant': '超市・商店' }, body: { ja: '相知市街に小規模な食品店・スーパーがあります。営業時間は短めです。', en: 'Small food shops/supermarkets in Arito town, with short hours.', 'zh-Hant': '相知市區有小型食品店與超市，營業時間偏短。' } },
      { label: { ja: '直売所・道の駅', en: 'Farm stands / road stations', 'zh-Hant': '直賣所・道之驛' }, body: { ja: '周辺の道の駅や農産物直売所で、地元の野菜・豆腐・加工品が買えます。午後は品薄になることも。', en: 'Local veggies, tofu and products at nearby road stations; stock thins in the afternoon.', 'zh-Hant': '周邊道之驛與農產直賣所可買在地蔬菜、豆腐、加工品，下午常缺貨。' } },
      { label: { ja: '土産', en: 'Souvenirs', 'zh-Hant': '伴手禮' }, body: { ja: '豆製品・高菜・茶・地酒など、相知・唐津らしい品が直売所や市街の店で見つかります。', en: 'Soy products, takana, tea and local sake — Arito/Karatsu specialties at stands and town shops.', 'zh-Hant': '豆製品、高菜、茶、地酒等相知・唐津特色，在直賣所與市區店可見。' } },
    ],
  },
  {
    id: 'fuel',
    icon: '⛽',
    title: { ja: '給油・EV充電', en: 'Fuel & EV charging', 'zh-Hant': '加油・EV充電' },
    lead: { ja: '山あいのため、給油・充電は「早め」が原則です。', en: 'In the mountains, fuel and charge “early” is the rule.', 'zh-Hant': '山區原則是加油充電「趁早」。' },
    items: [
      { label: { ja: 'ガソリンスタンド', en: 'Gas station', 'zh-Hant': '加油站' }, body: { ja: '滝の周辺にはありません。相知市街・唐津市街・唐津IC周辺で給油してから向かいましょう。夜間は営業していない店舗もあります。', en: 'None near the falls; fuel up in Arito/Karatsu town or near Karatsu IC. Some close at night.', 'zh-Hant': '周邊沒有，請在相知市區・唐津市區或唐津IC附近加油。部分夜間不營業。' } },
      { label: { ja: 'EV急速充電', en: 'EV rapid charge', 'zh-Hant': 'EV快充' }, body: { ja: '唐津市街の商業施設・道の駅・公共施設などに急速充電器があります。山あいに向かう前に、航続距離と充電スポットを確認しておくと安心です。', en: 'Rapid chargers at Karatsu commercial spots, road stations and public facilities. Check range and spots before heading into the hills.', 'zh-Hant': '唐津市區商設、道之驛、公設設施設有快充。進山前先確認續航與充電點。' } },
      { label: { ja: '普通充電', en: 'Standard charge', 'zh-Hant': '普通充電' }, body: { ja: '滞在型の宿に普通充電器を備えるところもありますが、数は限られます。事前確認が必須です。', en: 'Some stays have standard chargers, but few — confirm ahead.', 'zh-Hant': '部分住宿型旅宿設有普通充電器，但數量少，務必事先確認。' } },
      { label: { ja: '携帯電波', en: 'Mobile signal', 'zh-Hant': '手機訊號' }, body: { ja: '渓谷内や山側で電波が弱くなる場所があります。地図・連絡先は事前に保存を。', en: 'Signal weakens in the gorge and hillsides; save maps and contacts beforehand.', 'zh-Hant': '溪谷內與山側訊號偏弱，請事先存好地圖與聯絡方式。' } },
    ],
    caution: { ja: '冬季や悪天候の際、山あいの道は給油・充電の選択肢がさらに限られます。', en: 'In winter or bad weather, fuel/charge options in the hills shrink further.', 'zh-Hant': '冬季或惡劣天候時，山區加油充電選擇更少。' },
  },
  {
    id: 'rest',
    icon: '🪑',
    title: { ja: '休憩・雨宿り・ベンチ', en: 'Rest & shelter', 'zh-Hant': '休息・避雨・長椅' },
    lead: { ja: '歩く距離は短くても、濡れた石段は体力を使います。', en: 'Even short walks drain you on wet stone steps.', 'zh-Hant': '路程雖短，濕滑石階也很耗體力。' },
    items: [
      { label: { ja: 'ベンチ・東屋', en: 'Benches / gazebos', 'zh-Hant': '長椅・涼亭' }, body: { ja: '遊歩道沿いにベンチや東屋があり、一息入れられます。数は多くありません。', en: 'Benches and gazebos line the trail for a breather; not many.', 'zh-Hant': '步道沿線有長椅與涼亭可稍歇，數量不多。' } },
      { label: { ja: '雨宿り', en: 'Rain shelter', 'zh-Hant': '避雨' }, body: { ja: '橋のたもとや施設のひさしが使えます。本降りのときは無理をせず、車か市街地で天候の回復を待つ選択も。', en: 'Bridge bases and building eaves help; in heavy rain, wait in the car or town.', 'zh-Hant': '橋墩與建物屋簷可避雨；大雨時不妨在車上或市區等候放晴。' } },
      { label: { ja: '日陰・涼', en: 'Shade & cool', 'zh-Hant': '陰涼' }, body: { ja: '夏は渓谷の木陰と水しぶきで涼めます。ただし湿度が高く、こまめな水分補給を。', en: 'Summer shade and spray cool you, but humidity is high — sip water often.', 'zh-Hant': '夏天溪谷樹蔭與水花可納涼，但濕度高，請勤補水。' } },
      { label: { ja: '日帰り入浴', en: 'Day spa', 'zh-Hant': '日歸溫泉' }, body: { ja: '周辺の温泉施設で汗を流せます。歩いたあとの運転前に休憩をとるのも一案です。', en: 'Nearby spas let you rinse off — a good rest before driving on.', 'zh-Hant': '周邊溫泉設施可沖去汗水，走完、開車前休息也不錯。' } },
    ],
  },
  {
    id: 'safety',
    icon: '🩺',
    title: { ja: '医療・安全・連絡先', en: 'Medical & safety', 'zh-Hant': '醫療・安全・聯絡方式' },
    lead: { ja: '山あいのため、緊急時の移動には時間がかかります。', en: 'In the hills, emergency travel takes time.', 'zh-Hant': '山區緊急移動耗時。' },
    items: [
      { label: { ja: '医療機関', en: 'Medical care', 'zh-Hant': '醫療機構' }, body: { ja: '滝の周辺には医院がなく、総合病院は唐津市街にあります。車で20〜30分程度を見ておきましょう。', en: 'No clinic by the falls; the general hospital is in Karatsu, ~20–30 min by car.', 'zh-Hant': '瀑布周邊無診所，綜合醫院在唐津市區，車程約20〜30分。' } },
      { label: { ja: '緊急通報', en: 'Emergency call', 'zh-Hant': '緊急通報' }, body: { ja: '救急は119、警察は110。場所（唐津市相知町伊岐佐・見帰りの滝）と、どの駐車場・橋の近くかを伝えられるように。', en: 'Ambulance 119, police 110. Be ready to say the place (Arito, Karatsu / Mikaeri No Taki) and nearest parking/bridge.', 'zh-Hant': '救護119、報警110。請能說出地點（唐津市相知町伊岐佐・見歸里之瀧）及最近的停車場／橋。' } },
      { label: { ja: 'ケガの予防', en: 'Injury prevention', 'zh-Hant': '預防受傷' }, body: { ja: '滑りやすい石段・濡れた岩・悪天候後の増水が主なリスクです。無理な撮影や立ち入りは避けてください。', en: 'Slippery steps, wet rock and post-rain swelling are the main risks — no reckless shots or entry.', 'zh-Hant': '濕滑石階、濡濕岩石、雨後漲水為主要風險，請勿勉強拍攝或進入。' } },
      { label: { ja: '虫・動物', en: 'Bugs / animals', 'zh-Hant': '蟲・動物' }, body: { ja: '夏は虫よけ、朝夕は羽織るものを。野生動物に餌を与えないでください。', en: 'Repellent in summer, a layer at dawn/dusk; never feed wildlife.', 'zh-Hant': '夏天防蚊，早晚加件薄衣；請勿餵食野生動物。' } },
      { label: { ja: '携帯がつながらない時', en: 'No signal', 'zh-Hant': '無訊號時' }, body: { ja: '電波の弱い区間があります。単独行動を避け、同行者と時刻を共有しておくと安心です。', en: 'Some spots have weak signal; avoid going alone and share your timing.', 'zh-Hant': '部分路段訊號弱，避免單獨行動並與同伴共享時間。' } },
    ],
  },
  {
    id: 'access',
    icon: '♿',
    title: { ja: 'アクセシビリティ', en: 'Accessibility', 'zh-Hant': '無障礙' },
    lead: { ja: '段差・石段の多い渓谷地形です。事前のイメージづくりに。', en: 'A gorge with many steps and level changes — picture it beforehand.', 'zh-Hant': '多落差與石階的溪谷地形，事先建立印象。' },
    items: [
      { label: { ja: '車椅子', en: 'Wheelchair', 'zh-Hant': '輪椅' }, body: { ja: '遊歩道には石段や傾斜があり、滝つぼ近くまで車椅子で向かうのは難しい区間があります。展望しやすい入口付近での観瀑が現実的です。', en: 'The trail has steps and slopes; some sections are hard by wheelchair. Viewing near the entrance is realistic.', 'zh-Hant': '步道有石階與斜坡，部分路段輪椅難以前往瀑潭。在易觀景的入口附近賞瀑較實際。' } },
      { label: { ja: 'ベビーカー', en: 'Stroller', 'zh-Hant': '嬰兒車' }, body: { ja: '段差が多く、抱っこ紐のほうが安心です。短い「クイック観瀑」を選びましょう。', en: 'Many steps — a baby carrier is safer. Pick the short “quick view” route.', 'zh-Hant': '落差多，背帶比嬰兒車安心，選短的「快速觀瀑」路線。' } },
      { label: { ja: 'シニア', en: 'Seniors', 'zh-Hant': '長輩' }, body: { ja: '滑りにくい靴と杖、休憩をこまめに。雨天・増水後は無理をしない判断を。', en: 'Grippy shoes and a cane, rest often; don’t push it in rain or after swelling.', 'zh-Hant': '止滑鞋與手杖，勤休息；雨天或漲水後勿勉強。' } },
      { label: { ja: '手すり・舗装', en: 'Rails / paving', 'zh-Hant': '扶手・鋪面' }, body: { ja: '整備された区間と、土のままの区間が混在します。雨の翌日は特に滑りやすくなります。', en: 'Paved and earthen sections mix; extra slippery the day after rain.', 'zh-Hant': '整建與泥土地段混雜，雨後隔天特別滑。' } },
    ],
  },
  {
    id: 'manner',
    icon: '🧺',
    title: { ja: 'ごみ・喫煙・ペット', en: 'Trash / smoke / pets', 'zh-Hant': '垃圾・吸菸・寵物' },
    lead: { ja: '次の人が気持ちよく歩けるように。', en: 'So the next visitor walks comfortably.', 'zh-Hant': '讓下一位訪客也能愉快散步。' },
    items: [
      { label: { ja: 'ごみ', en: 'Trash', 'zh-Hant': '垃圾' }, body: { ja: '散策路にごみ箱は多くありません。基本は持ち帰りです。', en: 'Few bins on the trail — basically take it home.', 'zh-Hant': '步道垃圾桶不多，基本自帶離開。' } },
      { label: { ja: '喫煙', en: 'Smoking', 'zh-Hant': '吸菸' }, body: { ja: '乾燥期の山林・植栽地では火の扱いに注意。喫煙は指定された場所以在外では控えましょう。', en: 'Care with fire in dry woods; smoke only in designated spots.', 'zh-Hant': '乾季山林與植栽地用火小心，僅於指定處吸菸。' } },
      { label: { ja: 'ペット', en: 'Pets', 'zh-Hant': '寵物' }, body: { ja: 'リード着用が必須です。排泄物は持ち帰り、他の来訪者への配慮を。', en: 'Leashes required; pick up waste and mind others.', 'zh-Hant': '務必繫繩，清理排泄物並體諒他人。' } },
      { label: { ja: '撮影マナー', en: 'Photo etiquette', 'zh-Hant': '拍攝禮儀' }, body: { ja: '三脚の設置は通路をふさがないように。早朝・夜間は近隣への配慮を。', en: 'Tripods must not block paths; respect neighbours at dawn/night.', 'zh-Hant': '三腳架勿擋通道，清晨夜間體諒鄰近居民。' } },
    ],
  },
];
