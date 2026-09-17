import type { Localized } from '../i18n/types';

export interface SeasonStrategy {
  season: Localized;
  month: Localized;
  climate: Localized;
  water: Localized;
  nature: Localized;
  gear: Localized;
  caution: Localized;
}

export const climateNote: Localized = {
  ja:
    '気象庁の平年値（唐津観測所）では、年平均気温はおおよそ16℃前後、年間降水量は約1,900〜2,000mm。' +
    '梅雨期（6〜7月）に降水が集中し、8月が最も暑く、1月が最も冷え込みます（平均で8月約27〜28℃／1月約6℃）。' +
    '滝のある渓谷は市街地より涼しく、天気が変わりやすいのが特徴です。',
  en:
    'Per the JMA normals (Karatsu observatory), the mean annual temperature is around 16°C and yearly rainfall about 1,900–2,000 mm. ' +
    'Rain concentrates in the rainy season (Jun–Jul); August is hottest and January coldest (avg. Aug ~27–28°C / Jan ~6°C). ' +
    'The gorge at the falls is cooler than town and the weather changes quickly.',
  'zh-Hant':
    '依氣象廳平年值（唐津觀測站），年均溫約16°C，年雨量約1,900〜2,000mm。' +
    '梅雨季（6〜7月）降雨集中，8月最熱、1月最冷（平均8月約27〜28°C／1月約6°C）。' +
    '瀑布所在的溪谷比市區涼爽，天氣變化快。',
};

export const seasonStrategy: SeasonStrategy[] = [
  {
    season: { ja: '春', en: 'Spring', 'zh-Hant': '春' },
    month: { ja: '3〜5月', en: 'Mar–May', 'zh-Hant': '3〜5月' },
    climate: { ja: '平均気温は10℃台前半から20℃前後へ。晴れ間が増え、雨は梅雨前までのびのびと楽しめます。', en: 'Average temperatures rise from the low teens to around 20°C. More sunny breaks; rain is easy before the rainy season.', 'zh-Hant': '均溫從10°C初到20°C左右。晴朗時段增多，梅雨前降雨愜意。' },
    water: { ja: '渇水気味になることもあり、水量は控えめ。そのぶん岩肌の造形が見えやすくなります。', en: 'Can run low — less water, so the rock form is easier to see.', 'zh-Hant': '可能偏枯水，水量較少，反而容易看清岩壁造形。' },
    nature: { ja: '河津桜（2〜3月）からソメイヨシノへ。芽吹きの新緑と、渓谷の苔・シダがみずみずしい季節。', en: 'Kawazu cherry (Feb–Mar) to Somei-Yoshino; fresh green and the gorge’s moss/ferns are lush.', 'zh-Hant': '河津櫻（2〜3月）到染井吉野；初綠與溪谷苔蕨生機盎然。' },
    gear: { ja: '朝晩は冷えるので薄手の上着。花粉対策も。', en: 'A light jacket for chilly mornings/evenings; pollen care too.', 'zh-Hant': '早晚偏涼備薄外套，也注意花粉。' },
    caution: { ja: '桜の週末はやや混雑。春先の雨上がりは石段が滑りやすいので注意。', en: 'A bit crowded on cherry weekends; stone steps are slippery after spring rain.', 'zh-Hant': '櫻花週末稍擁擠；初春雨後石階易滑。' },
  },
  {
    season: { ja: '梅雨〜初夏', en: 'Rainy → early summer', 'zh-Hant': '梅雨〜初夏' },
    month: { ja: '6〜7月', en: 'Jun–Jul', 'zh-Hant': '6〜7月' },
    climate: { ja: '一年でもっとも降水量が多い時期（月間280〜350mm前後）。曇りや小雨の日が続きます。', en: 'The wettest stretch of the year (~280–350 mm/month); cloudy or light-rain days persist.', 'zh-Hant': '一年降雨最多（月約280〜350mm），陰天或細雨綿延。' },
    water: { ja: '水量が増え、滝の迫力が最大に。水しぶきも強くなります。', en: 'Water rises and the falls are at their most powerful; spray is stronger.', 'zh-Hant': '水量增加，瀑布氣勢最盛，水花也更強。' },
    nature: { ja: 'あじさい（約40〜50種・約4万株）が見頃。5〜6月には渓流沿いでホタルが観察されることもあります。', en: 'Hydrangea (~40–50 varieties, ~40,000 plants) peak; fireflies may appear along the stream in May–Jun.', 'zh-Hant': '繡球花（約40〜50種・約4萬株）盛開；5〜6月溪畔可能見螢火蟲。' },
    gear: { ja: 'レインウェア・滑りにくい靴・虫よけ・タオル（レンズ拭き用）。', en: 'Rainwear, grippy shoes, repellent, towel (for lens).', 'zh-Hant': '雨衣、止滑鞋、防蚊、毛巾（擦鏡頭用）。' },
    caution: { ja: '増水時に河原へ降りない。足元は滑りやすく、傘より雨具（両手が空く）が安全です。', en: 'Don’t go down to the river when swollen; footing is slippery — rain gear (hands free) beats an umbrella.', 'zh-Hant': '漲水時勿下河床；腳下濕滑，雨衣（雙手空出）比傘安全。' },
  },
  {
    season: { ja: '夏', en: 'Summer', 'zh-Hant': '夏' },
    month: { ja: '7〜9月', en: 'Jul–Sep', 'zh-Hant': '7〜9月' },
    climate: { ja: '平均気温27〜28℃前後と蒸し暑い時期。渓谷内は涼しく、避暑に向きます。', en: 'Humid, averaging ~27–28°C, but the gorge is cool — good for escaping heat.', 'zh-Hant': '均溫約27〜28°C悶熱，但溪谷涼爽，適合避暑。' },
    water: { ja: '大雨のあとは一気に増水。反対に晴天続きだと水量が落ち着きます。', en: 'After heavy rain it swells at once; long sun settles it back down.', 'zh-Hant': '大雨後驟漲，連晴則水量趨穩。' },
    nature: { ja: '深緑と水しぶき。夕方から夜にかけてライトアップが行われる時期でもあります。', en: 'Deep green and spray; some evenings bring a light-up.', 'zh-Hant': '深綠與水花；部分傍晚有點燈。' },
    gear: { ja: '飲み物・帽子・虫よけ・着替え（水しぶきで濡れるため）。', en: 'Drinks, hat, repellent, change of clothes (you’ll get sprayed).', 'zh-Hant': '飲料、帽子、防蚊、替換衣物（會被水花淋濕）。' },
    caution: { ja: '熱中症対策を最優先に。増水・雷雨時は早めに引き上げましょう。', en: 'Heatstroke care first; retreat early if swollen or thunder.', 'zh-Hant': '首要防中暑；漲水或雷雨及早撤退。' },
  },
  {
    season: { ja: '秋〜冬', en: 'Autumn → winter', 'zh-Hant': '秋〜冬' },
    month: { ja: '10〜2月', en: 'Oct–Feb', 'zh-Hant': '10〜2月' },
    climate: { ja: '10月は平均19℃前後と過ごしやすく、12〜2月は平均6〜8℃前後まで下がります。降水は比較的少なめ。', en: 'October ~19°C is pleasant; Dec–Feb drops to ~6–8°C. Rain is relatively light.', 'zh-Hant': '10月約19°C舒適；12〜2月降到約6〜8°C，降雨較少。' },
    water: { ja: '安定して落ち着いた水量。空気が澄み、滝の造形がくっきり見えます。', en: 'Steady, calm flow; clear air makes the form crisp.', 'zh-Hant': '水量穩定平靜；空氣清澄，造形清晰。' },
    nature: { ja: '11月の紅葉、落葉後の岩壁、冬の静けさ。野鳥の姿も見つけやすくなります。', en: 'November leaves, bare rock after, winter quiet; birds easier to spot.', 'zh-Hant': '11月紅葉、落葉後岩壁、冬之靜謐，也更易見野鳥。' },
    gear: { ja: '重ね着できる服装・手袋・滑りにくい靴。夜間は冷え込み対策を。', en: 'Layering, gloves, grippy shoes; night-cold care.', 'zh-Hant': '可層次穿搭、手套、止滑鞋；夜間防寒。' },
    caution: { ja: '日没が早い。冬の朝晩は凍結・冷え込みに注意し、無理のない行程で。', en: 'Early sunset; watch ice and cold on winter mornings/evenings, keep plans realistic.', 'zh-Hant': '日落早；冬早晚注意結冰與嚴寒，行程勿勉強。' },
  },
];

export interface AudiencePlan {
  id: string;
  icon: string;
  title: Localized;
  audience: Localized;
  duration: Localized;
  level: Localized;
  steps: Localized[];
  tips: Localized[];
}

export const audiencePlans: AudiencePlan[] = [
  {
    id: 'family',
    icon: '👨‍👩‍👧',
    title: { ja: '親子・ファミリー向け', en: 'Families with kids', 'zh-Hant': '親子・家庭' },
    audience: { ja: '小さなお子さま連れ、初めての来訪', en: 'With small children, first visit', 'zh-Hant': '帶幼童、初次造訪' },
    duration: { ja: '滞在目安 60〜90分', en: 'Stay ~60–90 min', 'zh-Hant': '停留約60〜90分' },
    level: { ja: '段差：少なめ／ベビーカー：△', en: 'Steps: few / Stroller: △', 'zh-Hant': '落差：少／嬰兒車：△' },
    steps: [
      { ja: '下流側・遊歩道入口に近い駐車スペースに停める', en: 'Park near the downstream trail entrance', 'zh-Hant': '停在下流式步道入口附近車位' },
      { ja: '整備された遊歩道を、滝が見えるポイントまで往復（無理に滝つぼへ下りない）', en: 'Walk the maintained trail to a viewpoint and back (don’t force down to the pool)', 'zh-Hant': '走整建步道到可觀瀑點往返（勿勉強下瀑潭）' },
      { ja: '橋の上から滝を眺めて、記念撮影', en: 'View from the bridge and take photos', 'zh-Hant': '在橋上眺望瀑布並合影' },
      { ja: 'ベンチ・東屋で休憩してから戻る', en: 'Rest on a bench/gazebo, then return', 'zh-Hant': '於長椅・涼亭休息後返回' },
    ],
    tips: [
      { ja: '段差や石段が多いため、ベビーカーより抱っこ紐が安心', en: 'Many steps — a carrier beats a stroller', 'zh-Hant': '落差石階多，背帶比嬰兒車安心' },
      { ja: '水しぶきで濡れるため、着替えとタオルを一枚', en: 'Bring a change and towel — you may get sprayed', 'zh-Hant': '會被水花淋濕，備替換衣物與毛巾' },
      { ja: '川へ降りない・手を離さないを徹底。遊歩道から外れないで', en: 'Stay off the river and hold hands; keep to the trail', 'zh-Hant': '勿下河、勿鬆手，不離步道' },
    ],
  },
  {
    id: 'photo',
    icon: '📷',
    title: { ja: '写真・自然観察向け', en: 'Photo & nature watch', 'zh-Hant': '攝影・自然觀察' },
    audience: { ja: '撮影目的、植物や渓谷をじっくり見たい方', en: 'For shooting, or studying plants/gorge', 'zh-Hant': '為拍攝、細看植物與溪谷者' },
    duration: { ja: '滞在目安 90分〜半日', en: 'Stay ~90 min to half day', 'zh-Hant': '停留約90分至半日' },
    level: { ja: '段差：多め／機材：防水対策を', en: 'Steps: many / Gear: waterproof', 'zh-Hant': '落差：多／器材：防水' },
    steps: [
      { ja: 'あじさいの群生地を前景にした構図を確保（6月は開花状況を確認）', en: 'Frame hydrangea beds in front (check bloom in June)', 'zh-Hant': '以繡球花群為前景構圖（6月確認花況）' },
      { ja: '中望遠で岩壁と水流を圧縮し、滝の高さを表現', en: 'Compress rock & flow with a medium telephoto', 'zh-Hant': '中長焦壓縮岩壁與水流，表現高度' },
      { ja: '橋の上から俯瞰、下流から見上げる構図を押さえる', en: 'Capture from above on the bridge and looking up from below', 'zh-Hant': '取橋上俯瞰、下游仰望構圖' },
      { ja: '水しぶきの近景は、レンズを濡らさない距離で長秒撮影', en: 'Spray close-up: long exposure at a lens-safe distance', 'zh-Hant': '水花近景：在勿濕鏡頭的距離慢門拍攝' },
      { ja: '夕暮れ〜ライトアップまで残す場合は、足元の装備を確認', en: 'If staying to the light-up, check your footing gear', 'zh-Hant': '若留到點燈，確認腳下裝備' },
    ],
    tips: [
      { ja: '曇天・小雨は花の色がやわらく、渓谷に霧が立ちます', en: 'Overcast/light rain softens blooms and lifts mist', 'zh-Hant': '陰天細雨讓花色柔和、溪谷起霧' },
      { ja: 'NDフィルター・三脚・レンズ拭きがあると安心。三脚は通路をふさがない位置で', en: 'ND filter, tripod, lens cloth help; tripod off the path', 'zh-Hant': 'ND鏡、三腳架、擦鏡布很實用；三腳架勿擋路' },
      { ja: '早朝は光が柔らく、人が少ないねらい目の時間帯です', en: 'Early morning: soft light, few people', 'zh-Hant': '清晨光線柔和、人少，是好時機' },
    ],
  },
  {
    id: 'easy',
    icon: '♿',
    title: { ja: '低体力・シニア向け（やさしい観瀑）', en: 'Low effort / seniors', 'zh-Hant': '低體力・長輩（輕鬆觀瀑）' },
    audience: { ja: '長距離の歩行を避けたい方、車椅子・杖を使う方', en: 'Avoid long walks; wheelchair/cane users', 'zh-Hant': '想避免長距離步行、使用輪椅或手杖者' },
    duration: { ja: '滞在目安 30〜60分', en: 'Stay ~30–60 min', 'zh-Hant': '停留約30〜60分' },
    level: { ja: '段差：最小／石段：回避', en: 'Steps: minimal / avoid stairs', 'zh-Hant': '落差：最小／避開石階' },
    steps: [
      { ja: '滝に近い駐車スペース（上流側）を利用する', en: 'Use the falls-near (upstream) parking', 'zh-Hant': '用靠近瀑布（上游側）的車位' },
      { ja: '傾斜の少ない区間から、遠景で滝を眺める', en: 'View from a gentle-slope section at a distance', 'zh-Hant': '從坡度小地段遠觀瀑布' },
      { ja: '橋のたもと・東屋で休憩しながら観瀑', en: 'Rest at the bridge base/gazebo while viewing', 'zh-Hant': '在橋墩・涼亭邊休息邊賞瀑' },
      { ja: '無理に滝つぼへ下りず、同じ道を戻る', en: 'Don’t force down to the pool; return the same way', 'zh-Hant': '勿勉強下瀑潭，原路返回' },
    ],
    tips: [
      { ja: '滑りにくい靴・杖・防寒具を。雨の翌日は特に慎重に', en: 'Grippy shoes, cane, warm gear; extra care after rain', 'zh-Hant': '止滑鞋、手杖、禦寒；雨後隔天格外謹慎' },
      { ja: '石段・土の区間は車椅子での通行が難しい場所があります', en: 'Some stair/earthen parts are hard by wheelchair', 'zh-Hant': '部分石階與泥土地段輪椅難行' },
      { ja: '混雑時は人とすれ違う余裕のある時間帯（午前早め）が快適です', en: 'Off-peak (early morning) is calmer when busy', 'zh-Hant': '擁擠時選人車錯身從容的時段（上午較早）' },
    ],
  },
];

export interface GeneralPlan {
  id: string;
  icon: string;
  title: Localized;
  duration: Localized;
  steps: Localized[];
  note: Localized;
}

export const generalPlans: GeneralPlan[] = [
  {
    id: 'half',
    icon: '🕐',
    title: { ja: '半日プラン（3〜4時間）', en: 'Half-day plan (3–4 h)', 'zh-Hant': '半日行程（3〜4小時）' },
    duration: { ja: '移動＋散策＋食事', en: 'Travel + walk + meal', 'zh-Hant': '移動＋散步＋用餐' },
    steps: [
      { ja: '午前のうちに到着。駐車場を確保して遊歩道へ', en: 'Arrive in the morning; secure parking, hit the trail', 'zh-Hant': '上午抵達，先佔車位再上步道' },
      { ja: 'あじさいの群生と橋の上から滝を眺める（約60〜90分）', en: 'View hydrangea beds and the falls from the bridge (~60–90 min)', 'zh-Hant': '從橋上賞繡球花群與瀑布（約60〜90分）' },
      { ja: '相知市街で豆腐・川魚などの昼食、または道の駅で休憩', en: 'Lunch on Arito tofu/river fish, or rest at a road station', 'zh-Hant': '在相知市區吃豆腐・川魚午餐，或在道之驛休息' },
      { ja: '時間に余裕があれば、周辺の棚田や石仏群へ寄り道', en: 'If time allows, detour to terraced fields or stone Buddhas', 'zh-Hant': '有餘裕可順遊梯田或石佛群' },
    ],
    note: { ja: '初めての来訪や、「滝だけ見られればいい」という方に最適な長さです。', en: 'Ideal length for first-timers or “just the falls is fine” visitors.', 'zh-Hant': '適合初次造訪或「只看瀑布就好」的人。' },
  },
  {
    id: 'full',
    icon: '🗺',
    title: { ja: '一日プラン（6〜8時間）', en: 'Full-day plan (6–8 h)', 'zh-Hant': '一日行程（6〜8小時）' },
    duration: { ja: '滝＋周辺散策＋温泉', en: 'Falls + area + spa', 'zh-Hant': '瀑布＋周邊散步＋溫泉' },
    steps: [
      { ja: '午前：見帰りの滝を散策（標準ルート 約60分＋撮影）', en: 'AM: walk the falls (standard route ~60 min + photos)', 'zh-Hant': '上午：散步見歸里之瀧（標準路線約60分＋拍照）' },
      { ja: '昼：相知市街で地元の食事、または唐津方面へ移動して食事', en: 'Noon: local meal in Arito, or move to Karatsu for food', 'zh-Hant': '中午：在相知市區吃在地料理，或前往唐津用餐' },
      { ja: '午後：鵜殿石仏群・蕨野の棚田など周辺スポットへ', en: 'PM: nearby spots like Udon Buddhas, Warabi terraces', 'zh-Hant': '下午：前往鵜殿石佛群、蕨野梯田等周邊景點' },
      { ja: '夕方：道の駅や温泉で休憩してから帰路へ', en: 'Evening: rest at a road station or spa, then head home', 'zh-Hant': '傍晚：在道之驛或溫泉休息後返程' },
      { ja: '時期が合えば、夜のライトアップまで滞在（装備と帰路の安全を確認）', en: 'If timed right, stay for the night light-up (check gear & safe return)', 'zh-Hant': '若時節合適可留到夜間點燈（確認裝備與返程安全）' },
    ],
    note: { ja: '「滝＋もう一か所」を組み合わせると、一日の満足度が大きく上がります。', en: 'Pairing “falls + one more place” lifts a full day’s satisfaction.', 'zh-Hant': '「瀑布＋再加一處」組合，能大幅提升一日滿意度。' },
  },
];
