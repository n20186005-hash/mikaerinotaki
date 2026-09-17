import type { Locale } from './config';

/** 三语系字段：每个文本值都提供 ja / en / zh-Hant */
export type Localized = Record<Locale, string>;

/** 取值，缺省回退到 ja */
export function L(obj: Localized, locale: Locale): string {
  return obj[locale] ?? obj.ja;
}

export function LOpt(obj: Localized | undefined, locale: Locale): string {
  return obj ? (obj[locale] ?? obj.ja) : '';
}
