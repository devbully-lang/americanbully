import { availablePups } from '@/lib/puppyData'; // Import your puppy data

// Helper function to generate the XML string for the sitemap
function generateSiteMap(allUrls: { url: string; lastModified: string; priority: number }[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${allUrls
       .map(({ url, lastModified, priority }) => {
         return `
       <url>
           <loc>${url}</loc>
           <lastmod>${lastModified}</lastmod>
           <priority>${priority.toFixed(1)}</priority>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export async function GET() {
  const baseUrl = 'https://www.601bullies.com';
  const lastModified = new Date().toISOString();

  // 1. Core Static Pages
  const staticPages = [
    '', // Homepage
    '/about',
    '/males',
    '/females',
    '/payment-plans',
    '/guarantee',
    '/service',
    '/shipping',
    '/testimonials',
    '/blog',
    '/know-your-pup',
    '/contact',
    '/puppies',
    '/terms-conditions',
    '/privacy-policy',
    '/refund-policy',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified,
    priority: path === '' ? 1.0 : 0.8,
  }));
  
  // 2. Dynamic Pages for each available puppy
  const puppyPages = availablePups.map(pup => ({
    url: `${baseUrl}/puppies/${pup.slug}`,
    lastModified,
    priority: 0.9, // Higher priority for pages that lead to a sale
  }));

  // Combine all URL sets
  const allUrls = [
    ...staticPages,
    ...puppyPages
  ];

  const body = generateSiteMap(allUrls);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}