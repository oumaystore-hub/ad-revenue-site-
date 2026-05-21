const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const sitemapPath = path.join(distDir, 'sitemap.xml');
const siteUrl = 'https://oumaystore-hub.github.io/ad-revenue-site'; // ✅ تم التعديل

function getHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of list) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory() && !['ads', 'fonts', 'images'].includes(file.name) && !file.name.startsWith('.')) {
      results = results.concat(getHtmlFiles(fullPath));
    } else if (file.name.endsWith('.html')) {
      results.push(fullPath.replace(distDir, ''));
    }
  }
  return results;
}

const pages = getHtmlFiles(distDir);
let xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const page of pages) {
  const loc = `${siteUrl}${page.replace(/index\.html$/, '').replace(/\.html$/, '/')}`;
  xml += `  <url>\n    <loc>${loc}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${loc === siteUrl + '/' ? '1.0' : '0.7'}</priority>\n  </url>\n`;
}

xml += `</urlset>`;
fs.writeFileSync(sitemapPath, xml);
console.log('✅ تم إنشاء sitemap.xml بنجاح');
