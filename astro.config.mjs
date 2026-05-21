import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oumaystore-hub.github.io',
  base: '/ad-revenue-site/', // لاحظ: بدون شرطة في البداية إذا أردت، لكن الأفضل وضعها للتوافق
  trailingSlash: 'always',
  outDir: './dist',
});
