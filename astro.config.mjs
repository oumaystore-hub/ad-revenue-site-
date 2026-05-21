import { defineConfig } from 'astro/config';

export default defineConfig({
  // ⚠️ لا تضع اسم المستودع هنا، فقط الدومين الأساسي
  site: 'https://oumaystore-hub.github.io',
  
  // ✅ هذا السطر يجبر Astro على بناء المسار الصحيح تلقائياً
  base: '/ad-revenue-site-',
  
  // ✅ ضروري لـ GitHub Pages ليتعرف على الصفحات كمجلدات
  trailingSlash: 'always',
  
  outDir: './dist',
});
