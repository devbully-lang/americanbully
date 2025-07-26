export async function GET() {
  const baseUrl = 'https://www.601bullies.com';

  const urls = [
    { path: '/', priority: 1.00 },
    { path: '/about', priority: 0.80 },
    { path: '/contact', priority: 0.80 },
    { path: '/puppies', priority: 0.80 },
    { path: '/puppies/apollo', priority: 0.64 },
    { path: '/puppies/luna', priority: 0.64 },
    { path: '/puppies/rocky', priority: 0.64 },
    { path: '/puppies/bella', priority: 0.51 },
    { path: '/gallery', priority: 0.70 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                      http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  ${urls.map(({ path, priority }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${priority.toFixed(2)}</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
