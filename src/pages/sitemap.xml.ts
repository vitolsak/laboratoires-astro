// src/pages/sitemap.xml.ts
import type { APIRoute } from 'astro';
import { produkty } from '../data/produkty.js';

const SITE_URL = 'https://www.laboratoires.cz';

export const GET: APIRoute = () => {
  const staticPages = ['', 'produkty', 'o-nas', 'kontakt', 'obchodni-podminky', 'ochrana-udaju'];

  const staticUrls = staticPages
    .map(page => {
      const loc = page === '' ? SITE_URL : `${SITE_URL}/${page}`;
      return `  <url>\n    <loc>${loc}</loc>\n  </url>`;
    })
    .join('\n');

  const productUrls = produkty
    .map(p => `  <url>\n    <loc>${SITE_URL}/produkty/${p.slug}</loc>\n  </url>`)
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
              `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
              `${staticUrls}\n` +
              `${productUrls}\n` +
              `</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
