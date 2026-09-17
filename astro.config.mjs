// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

// 見帰りの滝 — static site, deployed to Cloudflare Workers (static assets).
// 无数据库 / 无登录 / 无CMS
export default defineConfig({
  site: 'https://mikaerinotaki.com',
  output: 'static',
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'zh-Hant'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwind()],
  },
});
