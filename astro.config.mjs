import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oumaystore-hub.github.io/ad-revenue-site-',
  base: '/ad-revenue-site-',  // يجبر Astro على إضافة المسار تلقائياً لكل رابط وملف
  outDir: './dist',
  build: {
    format: 'directory' // الافتراضي، يضمن توافقاً تاماً مع GitHub Pages
  }
});
