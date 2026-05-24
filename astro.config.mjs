import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://oumaystore-hub.github.io/ad-revenue-site',
  integrations: [sitemap()],
  base: '/ad-revenue-site'
});
