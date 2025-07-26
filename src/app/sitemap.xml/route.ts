// src/app/sitemap.xml/route.ts

import { availablePups } from '@/lib/puppyData';

export async function GET() {
  const baseUrl = 'https://www.601bullies.com';

  const staticUrls = [
    '',
    '/about',
    '/males',
    '/females',
    '/puppies',
    '/payment-plans',
    '/guarantee',
    '/service',
    '/shipping',
    '/testimonials',
    '/blog',
    '/know-your-pup',
    '/contact',
  ];

  const allUrls = [
    ...staticUrls.map((path) => ({
      loc: `${baseUrl}${path}`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.7,
    })),
    ...availablePups.map((pup) => ({
      loc: `${baseUrl}/puppies/${pup.slug}`,
      lastmod: new Date().toISOString(),
      changefreq: 'weekly',
      priority: 0.8,
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
  ${allUrls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>
  `
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
