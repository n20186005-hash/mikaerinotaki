import { entity } from './entity';
import { reviews } from './reviews';

export interface SourceItem {
  /** 出典名 */
  name: string;
  /** 種別ラベル（公的機関 / 地域観光団体 / 百科事典 / ユーザー評価） */
  kind: string;
  /** 何を参照したか */
  usage: string;
  url: string;
  /** 同期・最終確認（あるものだけ） */
  syncedAt?: string;
  /** 追加の注記 */
  note?: string;
}

/**
 * 资料来源 / Sources — E-E-A-T 強化のための出典一覧。
 * 公的機関・地域観光団体・百科事典・ユーザー評価を明示し、引用元を明記する。
 */
export const sources: SourceItem[] = [
  {
    name: '佐賀県公式観光サイト あそぼーさが（見帰りの滝）',
    kind: '公的機関',
    usage: '日本の滝百選、あじさい約50種4万株、アクセス・駐車場の一次情報',
    url: entity.govtTourismUrl,
  },
  {
    name: '唐津市役所（見帰りの滝）',
    kind: '公的機関',
    usage: '所在地・天山県立自然公園内の位置づけ、周辺環境の確認',
    url: 'https://www.city.karatsu.lg.jp/bunka/tanbo/shizen/taki.html',
  },
  {
    name: '旅Karatsu 唐津観光協会（見帰りの滝）',
    kind: '地域観光団体',
    usage: 'ライトアップ時間、あじさい祭りの時期、現地の最新案内',
    url: 'https://www.karatsu-kankou.jp/sp/spots/detail/33/',
  },
  {
    name: 'Wikipedia「見帰りの滝」',
    kind: '百科事典',
    usage: '名称の由来、伊岐佐川ダム、周辺施設の補足情報',
    url: 'https://ja.wikipedia.org/wiki/%E8%A6%8B%E5%B8%B0%E3%82%8A%E3%81%AE%E6%BB%9D',
  },
  {
    name: `Google マップ（Google Maps）— ${reviews.sourcesEntryLabel}`,
    kind: 'ユーザー評価',
    usage: `評価 ${reviews.rating} / 件数 ${reviews.ratingCountLabel}`,
    url: reviews.allReviewsUrl,
    syncedAt: reviews.syncedAt,
    note: reviews.sourceNote,
  },
];
