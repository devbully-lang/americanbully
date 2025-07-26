// next.config.ts
import type { NextConfig } from 'next';
import withMDX from '@next/mdx';

const mdx = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require('remark-gfm'), require('remark-slug')],
    rehypePlugins: [require('rehype-autolink-headings')],
  }
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // treat .mdx as page extensions
  pageExtensions: ['ts', 'tsx', 'mdx']
};

export default mdx(nextConfig);
