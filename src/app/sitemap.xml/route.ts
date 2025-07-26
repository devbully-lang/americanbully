import { availablePups } from '@/lib/puppyData'; // Import your puppy data

// This function generates the final XML string
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
  // IMPORTANT: Replace this with your actual, live domain name
  const baseUrl = 'https://www.601bullies.com'; 
  const lastModified = new Date().toISOString();

  // 1. Define all of your static pages
  const staticPages = [
    '', // Homepage
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
    '/terms-conditions',
    '/privacy-policy',
    '/refund-policy',
  ].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified,
    priority: path === '' ? 1.0 : 0.8,
  }));
  
  // 2. Dynamically create a URL for each available puppy
  const puppyPages = availablePups.map(pup => ({
    url: `${baseUrl}/puppies/${pup.slug}`,
    lastModified,
    priority: 0.9,
  }));

  // 3. Combine all URLs
  const allUrls = [
    ...staticPages,
    ...puppyPages
  ];

  // 4. Generate the XML and return it with the correct headers
  const body = generateSiteMap(allUrls);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}