/**
 * i18n 基础设置（Astro 静态站，多语系路由）
 * - 默认语系 ja（无前缀，根路径 /）
 * - en → /en/...，zh-Hant → /zh-Hant/...
 * URL 生成手动实现，避免依赖 astro:i18n 虚拟模块在 .ts 下的解析问题。
 */
export const locales = ['ja', 'en', 'zh-Hant'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'ja';

export const LOCALE_META: Record<Locale, { label: string; htmlLang: string; ogLocale: string; hreflang: string }> = {
  ja: { label: '日本語', htmlLang: 'ja', ogLocale: 'ja_JP', hreflang: 'ja' },
  en: { label: 'English', htmlLang: 'en', ogLocale: 'en_US', hreflang: 'en' },
  'zh-Hant': { label: '繁體中文', htmlLang: 'zh-Hant', ogLocale: 'zh_Hant', hreflang: 'zh-Hant' },
};

/** 各非默认语系中，已提供译文的 slug（'' = 首页）。ja 默认拥有全部页面。 */
export const translatedSlugs: Record<Exclude<Locale, 'ja'>, string[]> = {
  en: ['access', 'ajisai', 'food', 'faq'],
  'zh-Hant': ['access', 'ajisai', 'food', 'faq'],
};

/** 全站路由（slug，'' = 首页），sitemap 使用 */
export const ROUTES: string[] = [
  '',
  'access',
  'ajisai',
  'food',
  'faq',
  'seasons',
  'facilities',
  'nearby',
  'photo',
  'history',
  'walk',
];

export function hasTranslation(locale: Locale, slug: string): boolean {
  if (locale === 'ja') return true;
  const s = slug.replace(/^\/+/, '');
  return translatedSlugs[locale as Exclude<Locale, 'ja'>].includes(s);
}

/** 生成带语系前缀的路径（不校验是否存在）。slug 可带或不带前导斜杠。 */
export function localeUrl(slug: string, locale: Locale): string {
  const s = slug.replace(/^\/+/, '');
  const path = s === '' ? '/' : `/${s}`;
  if (locale === 'ja') return path;
  return `/${locale}${path === '/' ? '/' : path}`;
}

/** 若目标语系有该页译文则用语系路径，否则回退到 ja 路径（避免 404） */
export function localeUrlSafe(slug: string, locale: Locale): string {
  return hasTranslation(locale, slug) ? localeUrl(slug, locale) : localeUrl(slug, 'ja');
}

/** 从 pathname 推导当前 slug（去掉语系前缀） */
export function currentSlug(pathname: string): string {
  let p = pathname.replace(/\/+$/, '');
  if (p === '') return '';
  for (const loc of locales) {
    if (loc !== 'ja' && p.startsWith(`/${loc}`)) {
      p = p.slice(`/${loc}`.length);
      break;
    }
  }
  return p.replace(/^\//, '');
}

/** 绝对 URL */
export function absolute(slug: string, locale: Locale, siteUrl: string): string {
  return new URL(localeUrl(slug, locale), siteUrl).toString().replace(/\/$/, slug === '' ? '/' : '');
}

/** canonical（带结尾斜杠，与默认 ja 行为一致） */
export function canonicalUrl(slug: string, locale: Locale, siteUrl: string): string {
  const p = slug === '' ? '/' : localeUrl(slug, locale) + '/';
  return new URL(p, siteUrl).toString();
}

/** 将 HTML 中内部链接 href="/slug" 改写为当前语系路径（无译文则回退 ja） */
export function localizeHref(html: string, locale: Locale): string {
  if (locale === 'ja') return html;
  return html.replace(/href="\/([a-z-]+)"/g, (_m, slug: string) => {
    return `href="${localeUrlSafe(slug, locale)}"`;
  });
}
