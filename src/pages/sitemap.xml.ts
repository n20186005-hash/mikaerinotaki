import type { APIRoute } from 'astro';

const SITE = 'https://mikaerinotaki.com';

/** 質量の高いページから順に。lastmod はビルド日。 */
const pages: { path: string; priority: string; changefreq: string }[] = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/access', priority: '0.9', changefreq: 'monthly' },
  { path: '/food', priority: '0.9', changefreq: 'monthly' },
  { path: '/ajisai', priority: '0.9', changefreq: 'weekly' },
  { path: '/faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/walk', priority: '0.8', changefreq: 'monthly' },
  { path: '/seasons', priority: '0.8', changefreq: 'monthly' },
  { path: '/history', priority: '0.7', changefreq: 'yearly' },
  { path: '/nearby', priority: '0.7', changefreq: 'monthly' },
  { path: '/photo', priority: '0.6', changefreq: 'yearly' },
  { path: '/facilities', priority: '0.7', changefreq: 'monthly' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
