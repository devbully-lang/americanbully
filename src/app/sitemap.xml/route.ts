// /src/app/sitemap.xml/route.ts

// Helper function to generate the XML string for a sitemap
function generateSiteMap(allUrls: { url: string; lastModified: string; priority: number }[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allUrls
  .map(({ url, lastModified, priority }) => {
    return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastModified}</lastmod>
    <priority>${priority.toFixed(2)}</priority>
  </url>`;
  })
  .join('')}
</urlset>`;
}

export async function GET() {
  const baseUrl = 'https://www.601bullies.com';
  const lastModified = new Date('2025-07-26T16:46:00+00:00').toISOString();

  const staticUrls = [
    { path: '/', priority: 1.0 },
    { path: '/about', priority: 0.8 },
    { path: '/payment-plans', priority: 0.8 },
    { path: '/guarantee', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/puppies', priority: 0.8 },
    { path: '/puppies/apollo', priority: 0.8 },
    { path: '/puppies/luna', priority: 0.8 },
    { path: '/puppies/rocky', priority: 0.8 },
    { path: '/puppies/bella', priority: 0.64 },
    { path: '/males', priority: 0.8 },
    { path: '/females', priority: 0.8 },
    { path: '/shipping', priority: 0.8 },
    { path: '/service', priority: 0.8 },
    { path: '/testimonials', priority: 0.8 },
    { path: '/terms-conditions', priority: 0.8 },
    { path: '/privacy-policy', priority: 0.8 },
    { path: '/refund-policy', priority: 0.8 },
  ];

  const allUrls = staticUrls.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    priority,
  }));

  const body = generateSiteMap(allUrls);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
