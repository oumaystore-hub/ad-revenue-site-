import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://oumaystore-hub.github.io',
  // انتبه هنا: تم إزالة الشرطة الأخيرة لتطابق اسم المستودع الجديد
  base: '/ad-revenue-site', 
  trailingSlash: 'always',
  outDir: './dist', 
});
