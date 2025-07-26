// src/app/lib/posts.ts
import { promises as fs } from 'fs';
import path from 'path';

export interface Post {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string; // Changed from React.ComponentType to string
}

export async function getPosts() {
  const postsDir = path.join(process.cwd(), 'src/app/blog/posts');
  const postFiles = await fs.readdir(postsDir);
  
  const posts = await Promise.all(
    postFiles.map(async (fileName) => {
      const { metadata } = await import(`../blog/posts/${fileName}`);
return {
  slug: fileName.replace(/\.tsx?$/, ''),
  ...metadata
};
    })
  );

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCategories(posts: Post[]) {
  return [...new Set(posts.map(post => post.category))];
}