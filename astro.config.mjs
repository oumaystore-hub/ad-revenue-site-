import { defineConfig } from 'astro/config';

export default defineConfig({
  // 1. الرابط الأساسي لموقعك (يجب أن يطابق اسم المستودع تماماً)
  site: 'https://oumaystore-hub.github.io/ad-revenue-site-',
  
  // 2. المسار الجذري (Base Path) - ضروري لأن موقعك ليس في الجذر الرئيسي
  base: '/ad-revenue-site-',
  
  // 3. الحل السحري لمشكلة 404:
  // يجبر الموقع على اعتبار كل صفحة كمجلد يحتوي على index.html
  trailingSlash: 'always', 

  outDir: './dist',
});
