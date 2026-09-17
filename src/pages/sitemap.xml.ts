import type { APIRoute } from 'astro';
import {
  locales,
  LOCALE_META,
  hasTranslation,
  canonicalUrl,
  defaultLocale,
  ROUTES,
  type Locale,
} from '../i18n/config';

const SITE = 'https://mikaerinotaki.com';

const priority: Record<string, string> = {
  '': '1.0',
  access: '0.9',
  food: '0.9',
  ajisai: '0.9',
  faq: '0.8',
  walk: '0.8',
  seasons: '0.8',
  history: '0.7',
  nearby: '0.7',
  facilities: '0.7',
  photo: '0.6',
};
const changefreq: Record<string, string> = {
  '': 'weekly',
  access: 'monthly',
  food: 'monthly',
  ajisai: 'weekly',
  faq: 'monthly',
  walk: 'monthly',
  seasons: 'monthly',
  history: 'yearly',
  nearby: 'monthly',
  photo: 'yearly',
  facilities: 'monthly',
};

/** 每个 slug 的 hreflang 备用链接（含 x-default = ja） */
function altsFor(slug: string): { code: string; loc: string }[] {
  const out = locales
    .filter((l: Locale) => hasTranslation(l, slug))
    .map((l) => ({ code: LOCALE_META[l].hreflang, loc: canonicalUrl(slug, l, SITE) }));
  out.push({ code: 'x-default', loc: canonicalUrl(slug, defaultLocale, SITE) });
  return out;
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const urls = ROUTES.map((slug) => {
    const loc = canonicalUrl(slug, 'ja', SITE);
    const alts = altsFor(slug);
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq[slug] ?? 'monthly'}</changefreq>
    <priority>${priority[slug] ?? '0.6'}</priority>
${alts.map((a) => `    <xhtml:link rel="alternate" hreflang="${a.code}" href="${a.loc}" />`).join('\n')}
  </url>`;
  }).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
