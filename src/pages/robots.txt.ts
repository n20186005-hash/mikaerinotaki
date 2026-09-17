import type { APIRoute } from 'astro';

const SITE = 'https://mikaerinotaki.com';

const body = `User-agent: *
Allow: /

# クロール不要なパス
Disallow: /offline.html

# サイトマップ
Sitemap: ${SITE}/sitemap.xml
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
