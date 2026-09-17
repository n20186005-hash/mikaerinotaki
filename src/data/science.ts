import type { Localized } from '../i18n/types';

export interface ScienceTopic {
  id: string;
  icon: string;
  title: Localized;
  lead: Localized;
  points: { k: Localized; v: Localized }[];
  note?: Localized;
}

export const scienceTopics: ScienceTopic[] = [
  {
    id: 'geology',
    icon: '🪨',
    title: { ja: '地形と地質：なぜここに滝があるのか', en: 'Terrain & geology: why a falls here', 'zh-Hant': '地形與地質：為何此處有瀑布' },
    lead: { ja: '見帰りの滝は、山あいの川が硬い岩盤を削り、落差を生んだ場所にあります。', en: 'Mikaeri No Taki sits where a mountain river cut through hard bedrock to create a drop.', 'zh-Hant': '見歸里之瀧位於山間河流切穿堅硬岩盤、形成落差的所在。' },
    points: [
      { k: { ja: '位置', en: 'Location', 'zh-Hant': '位置' }, v: { ja: '佐賀県唐津市相知町伊岐佐、天山県立自然公園内。背後に天山（標高1,046m）をいただく山地が広がります。', en: 'Arito, Karatsu, Saga, inside Tenzan Prefectural Natural Park, backed by Mt. Tenzan (1,046 m).', 'zh-Hant': '佐賀縣唐津市相知町伊岐佐，天山縣立自然公園內，背靠天山（標高1,046m）。' } },
      { k: { ja: '岩盤', en: 'Bedrock', 'zh-Hant': '岩盤' }, v: { ja: 'この一帯の山体は花崗岩質の岩盤を基盤としており、風化した花崗岩が砂や土になりやすい性質を持ちます。', en: 'The massif rests on granite bedrock that weathers easily into sand and soil.', 'zh-Hant': '此帶山體以花崗岩質岩盤為基，風化後易成砂土。' } },
      { k: { ja: '滝のでき方', en: 'How it formed', 'zh-Hant': '瀑布的成因' }, v: { ja: '川が軟らかい部分を先に削り、硬い岩盤が残ると段差が生まれます。その段差が落差約100mの滝として現れました。', en: 'The river erodes soft parts first; hard rock remains as a step — a ~100 m drop.', 'zh-Hant': '河流先蝕軟處，硬岩留存成階，遂成約100m落差。' } },
      { k: { ja: '渓谷', en: 'Gorge', 'zh-Hant': '溪谷' }, v: { ja: '水の侵食（下刻）と、雨による斜面の崩れが長い時間をかけて、現在のV字の渓谷を形づくりました。', en: 'Down-cutting and slope collapse slowly shaped today’s V-shaped gorge.', 'zh-Hant': '水的下蝕與雨水崩坡，經長時形成今日的V字溪谷。' } },
      { k: { ja: '見方のコツ', en: 'How to view', 'zh-Hant': '觀看訣竅' }, v: { ja: '遠景で「落差」、橋の上で「流れ」、滝つぼ近くで「水音と水しぶき」。同じ滝を3つのスケールで見られます。', en: 'Distance for the drop, the bridge for the flow, the pool for sound & spray — three scales of one falls.', 'zh-Hant': '遠景看「落差」、橋上看「水流」、瀑潭看「水聲與水花」，同一瀑布三種尺度。' } },
    ],
    note: { ja: '地質の分類・年代の詳細は専門調査によって更新されます。ここでは一般的な地形学的な説明にとどめています。', en: 'Geological classification/dating is updated by specialist surveys; this is a general geomorphic note.', 'zh-Hant': '地質分類與年代會隨專業調查更新，此處僅作一般地形學說明。' },
  },
  {
    id: 'water',
    icon: '💧',
    title: { ja: '水の循環とダムの影響', en: 'Water cycle & the dam', 'zh-Hant': '水循環與水壩' },
    lead: { ja: '滝の水量は雨に左右されます。上流のダムも流量に影響します。', en: 'Flow depends on rain; the upstream dam also affects it.', 'zh-Hant': '水量取決於降雨，上游水壩亦有影響。' },
    points: [
      { k: { ja: '水系', en: 'River system', 'zh-Hant': '水系' }, v: { ja: '松浦川の支流・左伊岐佐川にあります。松浦川は唐津平野を潤し、唐津湾へ注ぐ一級水系です。', en: 'On the Hii-kisa River, a tributary of the Matsura, which waters Karatsu plain and feeds Karatsu Bay.', 'zh-Hant': '位於松浦川支流左伊岐佐川；松浦川滋潤唐津平原注入唐津灣，為一級水系。' } },
      { k: { ja: 'ダム', en: 'Dam', 'zh-Hant': '水壩' }, v: { ja: '1979年（昭和54年）、滝のすぐ上流に伊岐佐川ダムが造られました。これ以降、滝の幅は以前より狭くなったと伝えられます。', en: 'The Ikisagawa Dam was built just upstream in 1979; the falls is said to be narrower since.', 'zh-Hant': '1979年（昭和54年）於瀑布正上游築伊岐佐川水壩；相傳自此瀑布變窄。' } },
      { k: { ja: '増水', en: 'Swelling', 'zh-Hant': '漲水' }, v: { ja: '梅雨期（6〜7月）や大雨のあとは水量が急増します。水しぶきが強まり、遊歩道が濡れる範囲も広がります。', en: 'After the rainy season or heavy rain, flow surges and spray reaches wider.', 'zh-Hant': '梅雨季（6〜7月）或大雨後水量驟增，水花範圍擴大。' } },
      { k: { ja: '減水', en: 'Low water', 'zh-Hant': '減水' }, v: { ja: '晴天続きの冬から春は水量が落ち着き、岩肌の造形が見えやすくなります。', en: 'Dry winter–spring settles the flow, revealing the rock form.', 'zh-Hant': '連晴的冬春水量趨穩，岩壁造形清晰。' } },
      { k: { ja: '水質', en: 'Water quality', 'zh-Hant': '水質' }, v: { ja: '渓谷の水は飲用に適しません。飲み物は必ず持参し、洗い物や水遊びは控えましょう。', en: 'Gorge water isn’t for drinking; bring your own and avoid washing/play.', 'zh-Hant': '溪谷水不宜飲用，務必自備，並避免戲水。' } },
    ],
    note: { ja: 'ダムの完成年は公的記録・資料に基づく記述です。流量の運用は変更される場合があります。', en: 'The dam year is from official records; flow operation may change.', 'zh-Hant': '水壩完工年依官方記錄，流量運用可能變更。' },
  },
  {
    id: 'plants',
    icon: '🌿',
    title: { ja: '植生：あじさいと渓谷の植物', en: 'Vegetation: hydrangea & gorge plants', 'zh-Hant': '植被：繡球花與溪谷植物' },
    lead: { ja: 'この滝の景観は、自然の植生と人の植栽が重なってできています。', en: 'The view blends natural vegetation with human planting.', 'zh-Hant': '此瀑布景觀是自然植被與人工栽植的交疊。' },
    points: [
      { k: { ja: 'あじさい', en: 'Hydrangea', 'zh-Hant': '繡球花' }, v: { ja: '滝と下流周辺に、約40〜50種・約4万株のあじさいが植えられています（資料により種数の表記が異なります）。例年6月が見頃。', en: 'About 40–50 varieties and ~40,000 plants line the falls and lower gorge (counts vary by source); peak in June.', 'zh-Hant': '瀑布與下游周邊植有約40〜50種・約4萬株繡球花（依資料種數記載不同），通常6月盛開。' } },
      { k: { ja: '色の変化', en: 'Colour change', 'zh-Hant': '色彩變化' }, v: { ja: 'アジサイの花色は土壌の酸性度で変わりやすい性質があります。同じ株でも年により印象が変わることがあります。', en: 'Hydrangea colour shifts with soil acidity; the same plant can look different year to year.', 'zh-Hant': '繡球花色易受土壤酸度影響，同一株每年觀感也可能不同。' } },
      { k: { ja: '渓谷の植物', en: 'Gorge plants', 'zh-Hant': '溪谷植物' }, v: { ja: '湿った岩肌には苔やシダが多く、春は河津桜・ソメイヨシノ、秋は紅葉が岩壁を彩ります。', en: 'Wet rock grows moss and ferns; cherry in spring, leaves in autumn colour the wall.', 'zh-Hant': '濕岩多苔與蕨，春有河津櫻・染井吉野，秋有紅葉點綴岩壁。' } },
      { k: { ja: '森林', en: 'Forest', 'zh-Hant': '森林' }, v: { ja: '周囲は杉・檜の植林地と広葉樹が混ざる里山。落葉後は岩壁の造形が見えやすくなります。', en: 'A satoyama mix of cedar/hinoki and broadleaf; bare after leaf-fall shows the rock.', 'zh-Hant': '周圍是杉檜人造林與闊葉混生的里山，落葉後岩壁造形清晰。' } },
      { k: { ja: '外来種に注意', en: 'Mind invasives', 'zh-Hant': '注意外來種' }, v: { ja: '園芸種の持ち込み・採取は景観保全の観点から控えましょう。植物の採取はやめましょう。', en: 'Don’t bring or pick garden varieties — it harms the landscape.', 'zh-Hant': '勿帶入或採摘園藝品種，以免破壞景觀。' } },
    ],
  },
  {
    id: 'wildlife',
    icon: '🦋',
    title: { ja: '生きもの：蛍・鳥・渓流の生物', en: 'Wildlife: fireflies, birds, stream life', 'zh-Hant': '生物：螢火蟲・鳥・溪流生物' },
    lead: { ja: '人が少ない時間帯ほど、渓谷の生きものに出会えます。', en: 'Quieter hours mean more chance to meet the gorge’s life.', 'zh-Hant': '人少時段更易遇見溪谷生物。' },
    points: [
      { k: { ja: 'ホタル', en: 'Fireflies', 'zh-Hant': '螢火蟲' }, v: { ja: '初夏（5〜6月）の夜、渓流沿いでホタルが観察されることもあります。発生時期は年により変動します。', en: 'On early-summer (May–Jun) nights, fireflies may appear along the stream; timing varies.', 'zh-Hant': '初夏（5〜6月）夜晚，溪畔可能見螢火蟲，發生期年異。' } },
      { k: { ja: '野鳥', en: 'Birds', 'zh-Hant': '野鳥' }, v: { ja: 'ヤマセミ・カワセミなどの渓流の鳥、冬は山地の小鳥が見られます。早朝が観察に向きます。', en: 'River kingfishers and winter mountain birds; best at dawn.', 'zh-Hant': '翠鳥等溪流式鳥類，冬有山地小鳥，清晨最宜觀察。' } },
      { k: { ja: '渓流の生きもの', en: 'Stream life', 'zh-Hant': '溪流生物' }, v: { ja: '清流を好む水生昆虫や魚類が暮らしています。石を裏返す・捕まえるなどの観察は控えめに。', en: 'Aquatic insects and fish love the clear stream; observe without flipping/catching.', 'zh-Hant': '清水中的水生昆蟲與魚類；觀察勿翻石或捕捉。' } },
      { k: { ja: '夜間観察', en: 'Night watch', 'zh-Hant': '夜間觀察' }, v: { ja: 'ライトアップ時は足元が見えにくくなります。懐中電灯は足元だけを照らし、生物に長時間当てない配慮を。', en: 'At light-ups it’s dark underfoot; light only your feet, not wildlife.', 'zh-Hant': '點燈時腳下難看清，手電只照腳邊，勿長照生物。' } },
      { k: { ja: '餌やり禁止', en: 'No feeding', 'zh-Hant': '禁止餵食' }, v: { ja: '野生動物への餌やりは、生態系と人との距離を壊します。絶対にやめましょう。', en: 'Feeding wildlife breaks the ecosystem’s distance from people — never do it.', 'zh-Hant': '餵食野生動物會破壞生態與人的距離，絕對避免。' } },
    ],
  },
  {
    id: 'landscape',
    icon: '🏞',
    title: { ja: '景観の成り立ち：人が育てた風景', en: 'The landscape: a view people grew', 'zh-Hant': '景觀的由來：人育出的風景' },
    lead: { ja: '滝そのものは自然の造形ですが、「あじさいと滝」の風景は人の手で育てられました。', en: 'The falls is natural, but the “hydrangea & falls” scene was grown by hand.', 'zh-Hant': '瀑布本身是自然造形，但「繡球花與瀑布」之景是人手培育。' },
    points: [
      { k: { ja: '植栽の広がり', en: 'Planting spread', 'zh-Hant': '栽植擴展' }, v: { ja: '地域の人々が渓谷沿いにあじさいを植え続け、現在の規模に育ちました。', en: 'Locals kept planting hydrangea along the gorge until it reached today’s scale.', 'zh-Hant': '居民持續在溪谷植繡球花，才育成今日規模。' } },
      { k: { ja: 'あじさい祭り', en: 'Hydrangea festival', 'zh-Hant': '繡球花祭' }, v: { ja: '1988年（昭和63年）以降、毎年6月に「見帰りの滝あじさい祭り」が開かれています（開始年は資料により要確認）。', en: 'Since 1988 the “Mikaeri No Taki Hydrangea Festival” opens each June (start year varies by source).', 'zh-Hant': '1988年（昭和63年）起，每年6月舉辦「見歸里之瀧繡球花祭」（起始年依資料待確認）。' } },
      { k: { ja: '橋と石仏', en: 'Bridges & statues', 'zh-Hant': '橋與石佛' }, v: { ja: '下流には「しぶき橋」「あじさい橋」が架かり、右岸には不動尊・十一面観音・地蔵尊が安置されています。', en: 'Downstream are the “Spray Bridge” and “Hydrangea Bridge”; the right bank holds Buddhist statues.', 'zh-Hant': '下游架有「飛沫橋」「繡球花橋」，右岸安置不動尊・十一面觀音・地藏尊。' } },
      { k: { ja: '日本の滝百選', en: 'Japan’s 100 Falls', 'zh-Hant': '日本瀑布百選' }, v: { ja: '日本の滝百選のひとつに選ばれ、佐賀県を代表する名瀑として知られています。', en: 'One of Japan’s 100 Selected Falls and a Saga landmark.', 'zh-Hant': '入選日本瀑布百選，為佐賀代表性名瀑。' } },
      { k: { ja: '暮らしとの関わり', en: 'Ties to life', 'zh-Hant': '與生活的聯繫' }, v: { ja: '灌漑・生活用水・祭りなど、地域の暮らしとともに滝がありました。景観はその積み重ねの結果です。', en: 'Irrigation, daily water and festivals — the falls stood with local life; the scene is that legacy.', 'zh-Hant': '灌溉、生活用水、祭典等，瀑布與地方生活同在，景觀是積累的成果。' } },
    ],
    note: { ja: '祭りの開始年などの年号は、複数の資料で確認し、更新される可能性を明示しています。', en: 'Festival start year etc. are cross-checked and noted as subject to update.', 'zh-Hant': '祭典起始年等年號經多資料確認，並註明可能更新。' },
  },
];

export interface VisitorDuty {
  icon: string;
  title: Localized;
  body: Localized;
}

export const visitorDuties: VisitorDuty[] = [
  { icon: '🥾', title: { ja: '遊歩道から出ない', en: 'Stay on the trail', 'zh-Hant': '不離步道' }, body: { ja: '岩場や河原は滑りやすく、崩れやすい場所があります。立ち入り表示がある区間には絶対に入らないでください。', en: 'Rock and riverbeds are slippery and can collapse; never enter restricted areas.', 'zh-Hant': '岩場與河床濕滑易崩，切勿進入禁止區域。' } },
  { icon: '🗑', title: { ja: 'ごみは持ち帰る', en: 'Take trash home', 'zh-Hant': '垃圾帶走' }, body: { ja: '散策路のごみ箱は限られます。出したごみは必ず持ち帰り、来たときより美しく。', en: 'Few bins on the trail — take all rubbish, leave it nicer than found.', 'zh-Hant': '步道垃圾桶有限，務必帶走垃圾，讓它比來時更美。' } },
  { icon: '🌸', title: { ja: '植物を採らない', en: 'Don’t pick plants', 'zh-Hant': '不採植物' }, body: { ja: 'あじさいの花や枝を折る、球根や苗を持ち帰る行為は景観を壊します。写真だけ残しましょう。', en: 'Breaking blooms or taking bulbs ruins the view — leave only photos.', 'zh-Hant': '折花折枝、帶走球根幼苗都破壞景觀，只留照片。' } },
  { icon: '🔇', title: { ja: '静けさを守る', en: 'Keep it quiet', 'zh-Hant': '保持安靜' }, body: { ja: '渓谷は音が響きます。早朝・夜間は近隣への配慮を。音楽を流すなどの行為は控えましょう。', en: 'Sound carries in the gorge; respect neighbours at dawn/night — no music.', 'zh-Hant': '溪谷聲音易傳，清晨夜間體諒鄰里，勿放音樂。' } },
  { icon: '🐕', title: { ja: 'ペットはリード', en: 'Leash pets', 'zh-Hant': '寵物繫繩' }, body: { ja: 'リード着用と排泄物の持ち帰りは必須。他の来訪者や野生動物への配慮をお願いします。', en: 'Leashes and waste pickup required; mind others and wildlife.', 'zh-Hant': '務必繫繩並清理排泄物，體諒他人與野生動物。' } },
  { icon: '🔥', title: { ja: '火気・喫煙は所定の場所以外で', en: 'No fire/smoking off-site', 'zh-Hant': '火氣・吸菸僅限指定處' }, body: { ja: '乾燥期の山林・植栽地では火の扱いに細心の注意を。喫煙は指定場所以外では控えてください。', en: 'Care with fire in dry woods; smoke only in designated spots.', 'zh-Hant': '乾季山林與植栽地用火小心，吸菸僅限指定處。' } },
  { icon: '🚁', title: { ja: 'ドローン・三脚の扱い', en: 'Drones & tripods', 'zh-Hant': '空拍機・三腳架' }, body: { ja: 'ドローンの飛行は法令・管理者の許可に従ってください。三脚は通路をふさがない位置で短時間に。', en: 'Follow laws/permits for drones; tripods brief and off the path.', 'zh-Hant': '空拍機依法令與管理者許可；三腳架短時、不擋通道。' } },
  { icon: '🌧', title: { ja: '増水時は引き返す', en: 'Turn back if swollen', 'zh-Hant': '漲水即回頭' }, body: { ja: '雨のあとは水量と水しぶきが増します。「今日は遠景だけ」という判断も立派な選択です。', en: 'After rain, flow and spray grow — viewing from afar is a fine choice.', 'zh-Hant': '雨後水量與水花增加，「今天只看遠景」也是好選擇。' } },
];

export interface Story {
  id: string;
  era: Localized;
  title: Localized;
  kind: 'official' | 'local' | 'editorial';
  body: Localized;
  note?: Localized;
}

export const stories: Story[] = [
  {
    id: 'name',
    era: { ja: '伝承', en: 'Legend', 'zh-Hant': '傳說' },
    title: { ja: '「見帰り」という名の物語', en: 'The story of “Mikaeri”', 'zh-Hant': '「見歸」之名的故事' },
    kind: 'local',
    body: {
      ja: '滝へ向かうには坂道を登ります。一度その場を離れて帰り道についたものの、あまりの美しさに「もう一度」と坂を引き返して見たくなる——そんな言い伝えが、この土地には残っています。' + '「あの坂を立ち帰ってもう一度見たい滝」、そこから「見帰りの滝」と呼ばれるようになったと伝えられています。',
      en: 'Reaching the falls means climbing a slope. The tale goes that, having left and started home, visitors were so struck by the beauty they climbed back for “one more look” — hence “Mikaeri” (return-to-see).',
      'zh-Hant': '前往瀑布需爬坡。相傳有人離去踏上歸途後，因太美而回頭「再看一次」，故有「見歸」之名，稱為「見歸里之瀧」。',
    },
    note: { ja: '名称の由来は地域に伝わる物語であり、確定した史実ではありません。', en: 'The name’s origin is a local tale, not established history.', 'zh-Hant': '名稱由來是地方傳說，非確定史實。' },
  },
  {
    id: 'miswrite',
    era: { ja: '表記', en: 'Spelling', 'zh-Hant': '表記' },
    title: { ja: '「見返り」は誤記', en: '“Mikaeri” is correct', 'zh-Hant': '「見返」是誤寫' },
    kind: 'editorial',
    body: {
      ja: '「見返りの滝」と書かれることもありますが、正式な表記は「見帰りの滝」です。' + '検索や案内看板で誤記を見かけることがあるため、地名・施設名を調べるときは「見帰り」で探すのが確実です。',
      en: 'You may see “Mikaeri” written with different characters, but the official spelling is 見帰りの滝. When searching, use 見帰り for reliable results.',
      'zh-Hant': '偶見寫作「見返りの滝」，但正式表記為「見歸里之瀧」。搜尋或看指引牌時若見誤寫，用「見歸」查找最準確。',
    },
  },
  {
    id: 'statues',
    era: { ja: '近代以降', en: 'Modern era', 'zh-Hant': '近世以後' },
    title: { ja: '右岸の石仏：不動尊・十一面観音・地蔵尊', en: 'Stone statues on the right bank', 'zh-Hant': '右岸石佛：不動尊・十一面觀音・地藏尊' },
    kind: 'editorial',
    body: {
      ja: '滝の右岸には不動尊・十一面観音・地蔵尊が安置されています。' + '水の音が絶えない渓谷に石仏が並ぶ光景は、この滝が単なる景勝地ではなく、祈りの場所でもあったことを伝えています。' + '水難よけや道中安全を願って祀られたと伝えられ、今も静かに滝を見守っています。',
      en: 'On the right bank stand statues of Fudō, Eleven-faced Kannon and Jizō. Stone figures in a sound-filled gorge show this was also a place of prayer, watching over the falls still.',
      'zh-Hant': '右岸安置不動尊・十一面觀音・地藏尊。水聲不絕的溪谷中石佛並立，說明此瀑不僅是名勝，也是祈禱之地，靜靜守護瀑布。',
    },
    note: { ja: '安置の経緯や年代については、現地の案内や地域の記録の確認をおすすめします。', en: 'Check local signage or regional records for the enshrinement background.', 'zh-Hant': '安置緣由與年代，建議查閱現場指引或地方記錄。' },
  },
  {
    id: 'bridges',
    era: { ja: '近代以降', en: 'Modern era', 'zh-Hant': '近世以後' },
    title: { ja: 'しぶき橋・あじさい橋', en: 'Spray Bridge & Hydrangea Bridge', 'zh-Hant': '飛沫橋・繡球花橋' },
    kind: 'editorial',
    body: {
      ja: '滝のすぐ下流には「しぶき橋」と「あじさい橋」が架かっています。' + '名前のとおり、水しぶきが届く距離の橋と、花の季節に彩られる橋。この二つの橋があることで、滝を上流・下流・横と、いくつもの角度から眺められるのが魅力です。',
      en: 'Just downstream are the “Spray Bridge” and “Hydrangea Bridge” — one within splash range, one framed by blooms. Two bridges let you view the falls from many angles.',
      'zh-Hant': '瀑布正下游架有「飛沫橋」與「繡球花橋」——一座在濺水範圍，一座於花季披彩。兩橋讓你能從上游、下游、側面等多角度欣賞。',
    },
  },
  {
    id: 'dam',
    era: { ja: '1979年（昭和54年）', en: '1979', 'zh-Hant': '1979年（昭和54年）' },
    title: { ja: '伊岐佐川ダムと滝の姿', en: 'The dam and the falls’ shape', 'zh-Hant': '伊岐佐川水壩與瀑布姿態' },
    kind: 'official',
    body: {
      ja: '滝のすぐ上流に伊岐佐川ダムが造られたのは1979年（昭和54年）と記録されています。' + 'これにより、ダムができる前より滝の幅は狭くなったと伝えられています。' + '自然の造形が人の営みで少しずつ姿を変えてきたことを示す、この場所ならではのエピソードです。',
      en: 'The Ikisagawa Dam just upstream was built in 1979; the falls is said narrower since. A local episode of nature’s form slowly changed by human life.',
      'zh-Hant': '瀑布正上游的伊岐佐川水壩建於1979年，相傳自此瀑布變窄。這是此地獨有的插曲，說明自然造形因人為活動逐漸改變。',
    },
    note: { ja: '治水・利水の目的や運用は、関係機関の公式情報をご確認ください。', en: 'Check official info for flood/water-use purpose and operation.', 'zh-Hant': '治水與水利目的及運用，請查相關機關官方資訊。' },
  },
  {
    id: 'festival',
    era: { ja: '1988年（昭和63年）以降', en: 'From 1988', 'zh-Hant': '1988年（昭和63年）起' },
    title: { ja: 'あじさい祭りのはじまり', en: 'The start of the festival', 'zh-Hant': '繡球花祭的開始' },
    kind: 'local',
    body: {
      ja: '地域にあじさいを植える取り組みが続けられ、やがて毎年6月の「見帰りの滝あじさい祭り」が催されるようになりました。' + '祭りの起点は1988年（昭和63年）とする資料が一般的ですが、開始年については唐津市・相知の観光窓口での最終確認をおすすめします。',
      en: 'Local hydrangea planting continued until the annual June festival began; 1988 is commonly cited, but confirm with Karatsu/Arito tourism.',
      'zh-Hant': '地方持續植繡球花，終於每年6月舉辦「見歸里之瀧繡球花祭」。一般認為始於1988年，但起始年建議向唐津・相知觀光窗口最終確認。',
    },
    note: { ja: '祭りの日程・交通規制は毎年変わります。必ず当年の公式案内をご確認ください。', en: 'Dates and traffic control change yearly — always check the current official notice.', 'zh-Hant': '祭典日期與交通管制每年變動，務必查當年官方公告。' },
  },
  {
    id: 'ouchi',
    era: { ja: '中世〜近世', en: 'Medieval–early modern', 'zh-Hant': '中世〜近世' },
    title: { ja: '相知という土地', en: 'The land of Arito', 'zh-Hant': '相知這片土地' },
    kind: 'editorial',
    body: {
      ja: '相知は、松浦川の支流がつくる谷あいの町です。中世には松浦党と呼ばれる武士の勢力圏にあり、岸岳城などの山城が築かれました。' + '近世以降は農業と、のちに炭鉱も含めた産業で栄えた時期があり、今も棚田や石仏、祭り（相知くんち）にその記憶が残ります。' + '見帰りの滝は、そうした相知の暮らしの延長にある風景です。',
      en: 'Arito is a valley town by a Matsura tributary; in the medieval era it was the Matsura clan’s sphere with hilltop castles like Kishidake. Later it thrived on farming and mining, memories kept in terraces, stone Buddha and festivals. The falls is part of that Arito life.',
      'zh-Hant': '相知是松浦川支流所成的谷間城鎮；中世屬松浦黨勢力，築有岸嶽城等山城。近世以農業、後含煤礦的產業繁榮，記憶留存於梯田、石佛與祭典（相知くんち）。見歸里之瀧正是相知生活的延伸。',
    },
    note: { ja: '地域史の詳細は市の資料・現地の案内をご参照ください。', en: 'See city materials or local signage for regional history details.', 'zh-Hant': '地方史細節請參閱市方資料或現場指引。' },
  },
  {
    id: 'hundred',
    era: { ja: '選定', en: 'Selection', 'zh-Hant': '選定' },
    title: { ja: '日本の滝百選', en: 'One of Japan’s 100 Falls', 'zh-Hant': '日本瀑布百選' },
    kind: 'official',
    body: {
      ja: '見帰りの滝は「日本の滝百選」のひとつに選ばれています。' + '落差約100m、佐賀県内有数の規模を誇り、季節ごとに表情を変えることから、遠方からも多くの人が訪れます。',
      en: 'Mikaeri No Taki is among Japan’s 100 Selected Falls — ~100 m drop, one of Saga’s largest, drawing visitors far and wide with its changing seasons.',
      'zh-Hant': '見歸里之瀧入選日本瀑布百選，落差約100m，為佐賀縣屈指可數的規模，四季表情各異，遠方來客眾多。',
    },
  },
];

export const kindLabel: Record<Story['kind'], Localized> = {
  official: { ja: '公的記録・選定', en: 'Official record', 'zh-Hant': '官方記錄・選定' },
  local: { ja: '地域の言い伝え', en: 'Local legend', 'zh-Hant': '地方傳說' },
  editorial: { ja: '編集による解説', en: 'Our editorial note', 'zh-Hant': '編輯說明' },
};
