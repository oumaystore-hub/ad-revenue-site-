import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oumaystore-hub.github.io/ad-revenue-site-',
  base: '/ad-revenue-site-',
  trailingSlash: 'always',
  outDir: './dist',
  // هذا السطر مهم جداً لضمان توافق الروابط
  build: {
    format: 'directory'
  }
});
