import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oumaystore-hub.github.io/ad-revenue-site-',
  base: '/ad-revenue-site-',  // ← أضف هذا السطر
  outDir: './dist',
  integrations: []
});
