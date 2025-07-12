import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getAllPosts() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const matterResult = matter(fileContents);

        return {
          slug,
          title: matterResult.data.title || slug,
          date: matterResult.data.date || new Date().toISOString(),
          excerpt: matterResult.data.excerpt || '',
          author: matterResult.data.author || 'Posterfy Team',
          tags: matterResult.data.tags || [],
          featured: matterResult.data.featured || false,
          ...matterResult.data,
        };
      });

    // Sort posts by date (newest first)
    return allPostsData.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  } catch (error) {
    console.error('Error reading blog posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug) {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    // Convert markdown to HTML
    const processedContent = await remark()
      .use(remarkGfm)
      .use(html, { sanitize: false })
      .process(matterResult.content);

    const contentHtml = processedContent.toString();

    return {
      slug,
      title: matterResult.data.title || slug,
      date: matterResult.data.date || new Date().toISOString(),
      excerpt: matterResult.data.excerpt || '',
      author: matterResult.data.author || 'Posterfy Team',
      tags: matterResult.data.tags || [],
      featured: matterResult.data.featured || false,
      readingTime: calculateReadingTime(matterResult.content),
      contentHtml,
      ...matterResult.data,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getPostSlugs() {
  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => fileName.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading post slugs:', error);
    return [];
  }
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.featured);
}

export function getPostsByTag(tag) {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.tags && post.tags.includes(tag));
}

function calculateReadingTime(content) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(words / wordsPerMinute);
  return readingTimeMinutes;
}

// Generate blog sitemap data
export function getBlogSitemapData() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
    lastModified: post.date,
    changeFreq: 'weekly',
    priority: post.featured ? 0.8 : 0.6,
  }));
}
