import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import readingTime from 'reading-time';

export type Post = {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  category?: string;
  minutes: number;
  html: string;
};

const contentRoot = path.join(process.cwd(), 'content');

export function getCollectionDir(collection: string) {
  return path.join(contentRoot, collection);
}

export function getSlugs(collection: string): string[] {
  const dir = getCollectionDir(collection);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => f.endsWith('.md') || f.endsWith('.mdx'));
}

export async function getBySlug(collection: string, slug: string): Promise<Post | null> {
  const dir = getCollectionDir(collection);
  const fullPath = path.join(dir, `${slug}.md`);
  const altPath = path.join(dir, `${slug}.mdx`);
  const filePath = fs.existsSync(fullPath) ? fullPath : (fs.existsSync(altPath) ? altPath : null);
  if (!filePath) return null;
  const file = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(file);
  
  // Handle both direct markdown content and CMS-generated 'body' field
  const markdownContent = data.body || content;
  
  const processed = await remark().use(html as any, { sanitize: false }).process(markdownContent);
  const result = processed.toString();
  const time = readingTime(markdownContent);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    tags: data.tags ?? [],
    category: data.category ?? collection,
    minutes: Math.ceil(time.minutes),
    html: result
  };
}

export async function listCollection(collection: string): Promise<Post[]> {
  const slugs = getSlugs(collection).map(s => s.replace(/\.(md|mdx)$/,'')).sort().reverse();
  const posts: Post[] = [];
  for (const slug of slugs) {
    const post = await getBySlug(collection, slug);
    if (post) posts.push(post);
  }
  return posts;
}
