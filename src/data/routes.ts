import type { Localized } from '../i18n/types';

export interface RouteMeta {
  k: Localized;
  v: Localized;
}

export interface WalkRoute {
  id: string;
  icon: string;
  tab: Localized;
  tag: Localized;
  title: Localized;
  desc: Localized;
  distance: string;
  time: string;
  meta: RouteMeta[];
  steps: Localized[];
  note: Localized;
}

export const routes: WalkRoute[] = [
  {
    id: 'standard',
    icon: '🚶',
    tab: { ja: '標準', en: 'Standard', 'zh-Hant': '標準' },
    tag: { ja: '初めて・写真', en: 'First visit / photo', 'zh-Hant': '初次・攝影' },
    title: { ja: '標準ルート（クイック観瀑＋撮影）', en: 'Standard route (quick view + photo)', 'zh-Hant': '標準路線（快速觀瀑＋攝影）' },
    desc: { ja: '駐車場から遊歩道をのぼり、あじさいの群生を眺めながら、橋の上から滝を観賞。最も基本となるルートです。', en: 'From the parking, climb the trail, enjoy the hydrangea beds, and view the falls from the bridge — the most basic route.', 'zh-Hant': '從停車場上步道，邊賞繡球花群邊走，於橋上觀瀑，最基礎的路線。' },
    distance: '約1.5km',
    time: '約60分',
    meta: [
      { k: { ja: '歩行距離', en: 'Distance', 'zh-Hant': '步行距離' }, v: { ja: '約1.5km（往復）', en: '~1.5 km (round trip)', 'zh-Hant': '約1.5km（往返）' } },
      { k: { ja: '所要時間', en: 'Time', 'zh-Hant': '所需時間' }, v: { ja: '約60分（撮影込み）', en: '~60 min (with photos)', 'zh-Hant': '約60分（含拍照）' } },
      { k: { ja: '難易度', en: 'Difficulty', 'zh-Hant': '難度' }, v: { ja: '初級（石段あり）', en: 'Easy (some steps)', 'zh-Hant': '初級（有石階）' } },
      { k: { ja: 'ベスト季節', en: 'Best season', 'zh-Hant': '最佳季節' }, v: { ja: '6月（あじさい）', en: 'June (hydrangea)', 'zh-Hant': '6月（繡球花）' } },
    ],
    steps: [
      { ja: '駐車場または滝入り口付近に車を停める', en: 'Park near the lot or trail entrance', 'zh-Hant': '停在停車場或瀑布入口附近' },
      { ja: '遊歩道をのぼり、あじさいの群生ポイントを通る', en: 'Climb the trail past the hydrangea beds', 'zh-Hant': '上步道經過繡球花群點' },
      { ja: '「しぶき橋」「あじさい橋」の上から滝を見下ろす', en: 'Look down at the falls from the Spray/Hydrangea bridges', 'zh-Hant': '從飛沫橋・繡球花橋上俯瞰瀑布' },
      { ja: '下流側の展望スポットで記念撮影', en: 'Photo at a downstream viewpoint', 'zh-Hant': '在下流式觀景點合影' },
      { ja: '同じ道を戻る', en: 'Return the same way', 'zh-Hant': '原路返回' },
    ],
    note: { ja: '石段が濡れていることが多いので、滑りにくい靴がおすすめです。', en: 'Steps are often wet — grippy shoes advised.', 'zh-Hant': '石階常濕滑，建議止滑鞋。' },
  },
  {
    id: 'full',
    icon: '🥾',
    tab: { ja: 'じっくり', en: 'Thorough', 'zh-Hant': '仔細' },
    tag: { ja: '自然観察・散策', en: 'Nature watch / walk', 'zh-Hant': '自然觀察・散步' },
    title: { ja: 'じっくりコース（渓谷と滝つぼ方面）', en: 'Thorough course (gorge & pool side)', 'zh-Hant': '仔細路線（溪谷與瀑潭方向）' },
    desc: { ja: '標準ルートに加え、滝つぼに近い下流側まで足をのばし、水音と水しぶきを間近で感じるコースです。', en: 'Beyond the standard route, reach downstream near the pool to feel the sound and spray up close.', 'zh-Hant': '在標準路線之外，走到靠近瀑潭的下游，近距離感受水聲與水花。' },
    distance: '約2.5km',
    time: '約90分',
    meta: [
      { k: { ja: '歩行距離', en: 'Distance', 'zh-Hant': '步行距離' }, v: { ja: '約2.5km（往復）', en: '~2.5 km (round trip)', 'zh-Hant': '約2.5km（往返）' } },
      { k: { ja: '所要時間', en: 'Time', 'zh-Hant': '所需時間' }, v: { ja: '約90分', en: '~90 min', 'zh-Hant': '約90分' } },
      { k: { ja: '難易度', en: 'Difficulty', 'zh-Hant': '難度' }, v: { ja: '中級（勾配・石段あり）', en: 'Moderate (slopes & steps)', 'zh-Hant': '中級（有坡與石階）' } },
      { k: { ja: 'ベスト季節', en: 'Best season', 'zh-Hant': '最佳季節' }, v: { ja: '通年（増水時は注意）', en: 'Year-round (care if swollen)', 'zh-Hant': '全年（漲水注意）' } },
    ],
    steps: [
      { ja: '標準ルートを通って橋まで到達', en: 'Take the standard route to the bridge', 'zh-Hant': '走標準路線到橋' },
      { ja: '下流側の遊歩道をさらに進む', en: 'Go further along the downstream trail', 'zh-Hant': '續走下游步道' },
      { ja: '滝つぼに近い場所で水音・水しぶきを観察', en: 'Observe sound & spray near the pool', 'zh-Hant': '在靠近瀑潭處觀察水聲水花' },
      { ja: '岩肌と植生をゆっくり観察して戻る', en: 'Slowly watch rock & plants, then return', 'zh-Hant': '慢慢看岩壁與植被後返回' },
      { ja: '同じ道を戻る', en: 'Return the same way', 'zh-Hant': '原路返回' },
    ],
    note: { ja: '増水時や悪天候のあとは、下流への立ち入りは避けてください。', en: 'After swelling or bad weather, avoid going downstream.', 'zh-Hant': '漲水或惡劣天候後，勿前往下游。' },
  },
  {
    id: 'easy',
    icon: '♿',
    tab: { ja: 'やさしい', en: 'Easy', 'zh-Hant': '輕鬆' },
    tag: { ja: 'ベビー・シニア', en: 'Babies / seniors', 'zh-Hant': '嬰兒・長輩' },
    title: { ja: 'やさしい観瀑（短時間・車椅子・ベビー）', en: 'Easy view (short / wheelchair / stroller)', 'zh-Hant': '輕鬆觀瀑（短時・輪椅・嬰兒車）' },
    desc: { ja: '駐車場に近い区間から、遠景で滝を眺めるだけのプランです。歩行がむずかしい方でも参加しやすいよう、石段を避けて組んでいます。', en: 'View the falls at a distance from near the parking — no steps, easy for those who find walking hard.', 'zh-Hant': '從靠近停車場的地段遠觀瀑布，避開石階，步行困難者也易參與。' },
    distance: '約300m',
    time: '約30分',
    meta: [
      { k: { ja: '歩行距離', en: 'Distance', 'zh-Hant': '步行距離' }, v: { ja: '約300m', en: '~300 m', 'zh-Hant': '約300m' } },
      { k: { ja: '所要時間', en: 'Time', 'zh-Hant': '所需時間' }, v: { ja: '約30分', en: '~30 min', 'zh-Hant': '約30分' } },
      { k: { ja: '難易度', en: 'Difficulty', 'zh-Hant': '難度' }, v: { ja: 'やさしい（段差最小）', en: 'Easy (least steps)', 'zh-Hant': '輕鬆（落差最小）' } },
      { k: { ja: 'ベスト季節', en: 'Best season', 'zh-Hant': '最佳季節' }, v: { ja: '通年', en: 'Year-round', 'zh-Hant': '全年' } },
    ],
    steps: [
      { ja: '滝に近い駐車スペース（上流側）に停める', en: 'Use the falls-near (upstream) parking', 'zh-Hant': '用靠近瀑布（上游側）車位' },
      { ja: '傾斜の少ない区間から、遠景で滝を眺める', en: 'View from a gentle-slope section at a distance', 'zh-Hant': '從坡度小地段遠觀瀑布' },
      { ja: '橋のたもと・東屋で休憩', en: 'Rest at the bridge base / gazebo', 'zh-Hant': '在橋墩・涼亭休息' },
      { ja: '無理に滝つぼへ下りず、同じ道を戻る', en: 'Don’t force down to the pool; return the same way', 'zh-Hant': '勿勉強下瀑潭，原路返回' },
    ],
    note: { ja: '車椅子での滝つぼ近くの通行は難しい区間があります。入口付近の観瀑が現実的です。', en: 'Wheelchair access near the pool is hard; viewing near the entrance is realistic.', 'zh-Hant': '輪椅前往瀑潭附近有難行段，入口附近賞瀑較實際。' },
  },
  {
    id: 'photo',
    icon: '📷',
    tab: { ja: '写真', en: 'Photo', 'zh-Hant': '攝影' },
    tag: { ja: '三脚・早朝', en: 'Tripod / dawn', 'zh-Hant': '三腳架・清晨' },
    title: { ja: '撮影優先ルート（早朝・橋・長秒）', en: 'Photo-first route (dawn, bridge, long exposure)', 'zh-Hant': '攝影優先路線（清晨・橋・慢門）' },
    desc: { ja: '光がやわらかい早朝をねらい、橋の上と下流の複数ポイントで撮影するルートです。', en: 'Aimed at soft dawn light, shooting from the bridge and several downstream points.', 'zh-Hant': '瞄準光線柔和的清晨，在橋上與下游多點拍攝。' },
    distance: '約2km',
    time: '約90分',
    meta: [
      { k: { ja: '歩行距離', en: 'Distance', 'zh-Hant': '步行距離' }, v: { ja: '約2km', en: '~2 km', 'zh-Hant': '約2km' } },
      { k: { ja: '所要時間', en: 'Time', 'zh-Hant': '所需時間' }, v: { ja: '約90分（撮影込み）', en: '~90 min (with photos)', 'zh-Hant': '約90分（含拍照）' } },
      { k: { ja: '難易度', en: 'Difficulty', 'zh-Hant': '難度' }, v: { ja: '初級〜中級', en: 'Easy–moderate', 'zh-Hant': '初級〜中級' } },
      { k: { ja: 'ベスト季節', en: 'Best season', 'zh-Hant': '最佳季節' }, v: { ja: '6月（あじさい）', en: 'June (hydrangea)', 'zh-Hant': '6月（繡球花）' } },
    ],
    steps: [
      { ja: '早朝に到着し、橋の上から展望', en: 'Arrive at dawn, view from the bridge', 'zh-Hant': '清晨抵達，於橋上展望' },
      { ja: 'あじさいを前景にした構図を確保', en: 'Frame hydrangea in the foreground', 'zh-Hant': '以繡球花為前景構圖' },
      { ja: '中望遠で岩壁と水流を圧縮', en: 'Compress rock & flow with a medium telephoto', 'zh-Hant': '中長焦壓縮岩壁與水流' },
      { ja: '水しぶきの近景を長秒で', en: 'Spray close-up with long exposure', 'zh-Hant': '水花近景用慢門' },
      { ja: '人が増える前に引き上げる', en: 'Leave before crowds grow', 'zh-Hant': '在人潮增多前撤離' },
    ],
    note: { ja: '三脚は通路をふさがない位置で。早朝・夜間は近隣への配慮を。', en: 'Tripod off the path; respect neighbours at dawn/night.', 'zh-Hant': '三腳架勿擋通道；清晨夜間體諒鄰里。' },
  },
];
