export interface SeasonStatus {
  season: 'spring' | 'earlysummer' | 'summer' | 'autumn' | 'winter';
  title: string;
  highlights: string[];
  state: string;
}

// 季節ステータス。日付は表示しない方針のため lastCheckedAt は持たない。
export const status: SeasonStatus = {
  season: 'summer',
  title: '深緑',
  highlights: ['滝', '渓谷', 'ライトアップ'],
  state: '通常観覧可能・散策路開放中',
};
