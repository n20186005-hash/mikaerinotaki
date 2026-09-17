import type { Localized } from '../i18n/types';

export interface SeasonStatus {
  season: 'spring' | 'earlysummer' | 'summer' | 'autumn' | 'winter';
  title: Localized;
  highlights: Localized[];
  state: Localized;
}

// 季節ステータス。日付は表示しない方針のため lastCheckedAt は持たない。
export const status: SeasonStatus = {
  season: 'summer',
  title: {
    ja: '深緑',
    en: 'Deep green',
    'zh-Hant': '深綠',
  },
  highlights: [
    { ja: '滝', en: 'Falls', 'zh-Hant': '瀑布' },
    { ja: '渓谷', en: 'Gorge', 'zh-Hant': '溪谷' },
    { ja: 'ライトアップ', en: 'Light-up', 'zh-Hant': '點燈' },
  ],
  state: {
    ja: '通常観覧可能・散策路開放中',
    en: 'Open as usual — trail accessible',
    'zh-Hant': '一般可觀賞・步道開放中',
  },
};
