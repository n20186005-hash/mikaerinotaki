import { entity } from './entity';

/**
 * Google 地図（Google Maps）のユーザー評価。
 * 最新同期：2026 年 9 月  /  評価 4.2  /  件数 1,518
 *
 * ※ 評価はページ上でのみ表示し、JSON-LD（構造化データ）には含めない。
 *   引用元を必ず明記し、Google の利用規約に配慮する。
 */
export const reviews = {
  rating: 4.2,
  maxRating: 5,
  ratingCount: 1518,
  ratingCountLabel: '1,518',
  syncedAt: '2026 年 9 月', // 同步时间
  sourceName: 'Google マップ（Google Maps）',

  /* 全部評価へのリンク（Google マップ） */
  allReviewsUrl: entity.mapsShareUrl,
  placeUrl: entity.mapsPlaceUrl,

  /* 見出し */
  headline: '评价来自谷歌地图用户评价',
  headlineJa: 'Google マップのユーザー評価',
  viewAllLabel: '点击查看谷歌地图全部评价',

  /* 下一行小字 */
  syncLinePrefix: '评分与评价数同步自谷歌地图（Google Maps）用户评价 · 2026 年 9 月 · ',
  syncLineLink: '点击查看谷歌地图全部评价↗',

  /* 来源说明 */
  sourceNote:
    '同步自 Google 地图用户评价，同步时间 2026 年 9 月；版权归原作者与 Google 地图所有',

  /* ボタン */
  ctaLabel: '在谷歌地图查看全部评价',

  /* 资料来源区块用 */
  sourcesEntryLabel: '评价',
  sourcesEntrySync: `评价 · 同步时间 ${'2026 年 9 月'}`,
} as const;

/** 星評価の塗り幅（%） */
export const ratingPercent = Math.round((reviews.rating / reviews.maxRating) * 100);
