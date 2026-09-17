import { entity } from './entity';
import { reviews } from './reviews';
import type { Localized } from '../i18n/types';

export interface SourceItem {
  /** 出典名 */
  name: Localized;
  /** 種別ラベル（公的機関 / 地域観光団体 / 百科事典 / ユーザー評価） */
  kind: Localized;
  /** 何を参照したか */
  usage: Localized;
  url: string;
  /** 同期・最終確認（あるものだけ） */
  syncedAt?: string;
  /** 追加の注記 */
  note?: Localized;
}

/**
 * 资料来源 / Sources — E-E-A-T 強化のための出典一覧。
 * 公的機関・地域観光団体・百科事典・ユーザー評価を明示し、引用元を明記する。
 */
export const sources: SourceItem[] = [
  {
    name: { ja: '佐賀県公式観光サイト あそぼーさが（見帰りの滝）', en: 'Saga Official Tourism Site “asobo saga” (Mikaeri No Taki)', 'zh-Hant': '佐賀縣官方觀光網站 あそぼーさが（見歸里之瀧）' },
    kind: { ja: '公的機関', en: 'Official', 'zh-Hant': '官方機構' },
    usage: { ja: '日本の滝百選、あじさい約50種4万株、アクセス・駐車場の一次情報', en: 'Japan’s 100 Falls, ~50 hydrangea varieties/40k plants, access & parking (primary)', 'zh-Hant': '日本瀑布百選、繡球花約50種4萬株、交通與停車場一次資訊' },
    url: entity.govtTourismUrl,
  },
  {
    name: { ja: '唐津市役所（見帰りの滝）', en: 'Karatsu City Hall (Mikaeri No Taki)', 'zh-Hant': '唐津市公所（見歸里之瀧）' },
    kind: { ja: '公的機関', en: 'Official', 'zh-Hant': '官方機構' },
    usage: { ja: '所在地・天山県立自然公園内の位置づけ、周辺環境の確認', en: 'Location, status within Tenzan Natural Park, surroundings', 'zh-Hant': '所在地、天山縣立自然公園內的定位、周邊環境' },
    url: 'https://www.city.karatsu.lg.jp/bunka/tanbo/shizen/taki.html',
  },
  {
    name: { ja: '旅Karatsu 唐津観光協会（見帰りの滝）', en: 'Tabi Karatsu Tourism Association (Mikaeri No Taki)', 'zh-Hant': '旅Karatsu 唐津觀光協會（見歸里之瀧）' },
    kind: { ja: '地域観光団体', en: 'Tourism assoc.', 'zh-Hant': '觀光協會' },
    usage: { ja: 'ライトアップ時間、あじさい祭りの時期、現地の最新案内', en: 'Light-up hours, hydrangea festival dates, latest local notice', 'zh-Hant': '點燈時間、繡球花祭時期、當地最新公告' },
    url: 'https://www.karatsu-kankou.jp/sp/spots/detail/33/',
  },
  {
    name: { ja: 'Wikipedia「見帰りの滝」', en: 'Wikipedia “Mikaeri No Taki”', 'zh-Hant': 'Wikipedia「見歸里之瀧」' },
    kind: { ja: '百科事典', en: 'Encyclopedia', 'zh-Hant': '百科全書' },
    usage: { ja: '名称の由来、伊岐佐川ダム、周辺施設の補足情報', en: 'Name origin, Ikisagawa Dam, facility notes', 'zh-Hant': '名稱由來、伊岐佐川水壩、周邊設施補充' },
    url: 'https://ja.wikipedia.org/wiki/%E8%A6%8B%E5%B8%B0%E3%82%8A%E3%81%AE%E6%BB%9D',
  },
  {
    name: { ja: 'Google マップ（Google Maps）', en: 'Google Maps', 'zh-Hant': 'Google 地圖' },
    kind: { ja: 'ユーザー評価', en: 'User reviews', 'zh-Hant': '使用者評價' },
    usage: { ja: `評価 ${reviews.rating} / 件数 ${reviews.ratingCountLabel}`, en: `Rating ${reviews.rating} / ${reviews.ratingCountLabel} reviews`, 'zh-Hant': `評分 ${reviews.rating} / ${reviews.ratingCountLabel} 則評價` },
    url: reviews.allReviewsUrl,
    syncedAt: reviews.syncedAt,
    note: reviews.sourceNote,
  },
];
