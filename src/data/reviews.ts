import { entity } from './entity';
import type { Localized } from '../i18n/types';

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
  ratingCountLabel: {
    ja: '1,518',
    en: '1,518',
    'zh-Hant': '1,518',
  } as Localized,
  syncedAt: '2026 年 9 月', // 同步时间
  sourceName: {
    ja: 'Google マップ（Google Maps）',
    en: 'Google Maps',
    'zh-Hant': 'Google 地圖（Google Maps）',
  } as Localized,

  /* 全部評価へのリンク（Google マップ） */
  allReviewsUrl: entity.mapsShareUrl,
  placeUrl: entity.mapsPlaceUrl,

  /* 見出し */
  headline: {
    ja: 'Google マップのユーザー評価',
    en: 'Google Maps user reviews',
    'zh-Hant': 'Google 地圖使用者評價',
  } as Localized,
  viewAllLabel: {
    ja: 'Google マップで全評価を見る',
    en: 'View all reviews on Google Maps',
    'zh-Hant': '在 Google 地圖查看全部評價',
  } as Localized,

  /* 下一行小字 */
  syncLinePrefix: {
    ja: '評価と評価件数は Google マップのユーザー評価から同期・2026年9月・',
    en: 'Ratings synced from Google Maps user reviews · Sep 2026 · ',
    'zh-Hant': '評分與評價數同步自 Google 地圖使用者評價・2026年9月・',
  } as Localized,
  syncLineLink: {
    ja: 'Google マップで全評価を見る↗',
    en: 'View all reviews on Google Maps ↗',
    'zh-Hant': '在 Google 地圖查看全部評價↗',
  } as Localized,

  /* 来源说明 */
  sourceNote: {
    ja: 'Google マップのユーザー評価から同期（2026年9月）。著作権は各作成者および Google マップに帰属します。',
    en: 'Synced from Google Maps user reviews (Sep 2026). Copyright belongs to each author and Google Maps.',
    'zh-Hant': '同步自 Google 地圖使用者評價（2026年9月），著作權歸各作者與 Google 地圖所有。',
  } as Localized,

  /* ボタン */
  ctaLabel: {
    ja: 'Google マップで全評価を見る',
    en: 'See all reviews on Google Maps',
    'zh-Hant': '在 Google 地圖查看全部評價',
  } as Localized,

  /* 资料来源区块用 */
  sourcesEntryLabel: {
    ja: '評価',
    en: 'Reviews',
    'zh-Hant': '評價',
  } as Localized,
} as const;

/** 星評価の塗り幅（%） */
export const ratingPercent = Math.round((reviews.rating / reviews.maxRating) * 100);
