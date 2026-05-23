import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oumaystore-hub.github.io',
  base: '/ad-revenue-site',
  trailingSlash: 'never',  // ⚠️ غيّر هذا من 'always' إلى 'never'
  outDir: './dist',
});
