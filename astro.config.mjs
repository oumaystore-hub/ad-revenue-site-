import { defineConfig } from 'astro/config';

export default defineConfig({
  // ضع رابط موقعك الكامل كما يظهر في المتصفح عند فتح الصفحة الرئيسية
  site: 'https://oumaystore-hub.github.io/ad-revenue-site-',
  
  // لا تضع base هنا إذا كان اسم المستودع مطابقاً للرابط
  // trailingSlash يضمن توافق الروابط
  trailingSlash: 'always',
  
  outDir: './dist',
});
