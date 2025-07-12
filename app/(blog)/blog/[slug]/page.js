import { getPostBySlug, getAllPosts } from '../../../../src/lib/markdown.js';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import BlogNavbar from '../../components/BlogNavbar.js';
import BlogFooter from '../../components/BlogFooter.js';
import '../../blog.css';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found | Posterfy Blog',
    };
  }

  return {
    title: `${post.title} | Posterfy Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.posterfy.art/blog/${post.slug}`,
      siteName: 'Posterfy',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    alternates: {
      canonical: `https://www.posterfy.art/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formatDate = dateString => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Generate structured data for article
  const articleStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image || 'https://www.posterfy.art/og-image.svg',
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Posterfy',
      url: 'https://www.posterfy.art',
      logo: 'https://www.posterfy.art/ico.png',
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.posterfy.art/blog/${post.slug}`,
    },
    url: `https://www.posterfy.art/blog/${post.slug}`,
    wordCount: post.content?.split(' ').length || 0,
    keywords: post.tags?.join(', ') || '',
  };

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.posterfy.art/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://www.posterfy.art/blog',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.title,
        item: `https://www.posterfy.art/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />

      <div className='blog-container'>
        <BlogNavbar />

        <main className='blog-post-content'>
          <Link href='/blog' className='blog-post-back-link'>
            ← Back to Blog
          </Link>

          <article>
            <header className='blog-post-header'>
              {post.featured && (
                <div className='blog-card-featured-badge'>Featured</div>
              )}

              <h1 className='blog-post-title'>{post.title}</h1>

              <div className='blog-post-meta'>
                <div className='blog-post-meta-item'>
                  <span>📅</span>
                  <span>{formatDate(post.date)}</span>
                </div>

                <div className='blog-post-meta-item'>
                  <span>👤</span>
                  <span>{post.author}</span>
                </div>

                {post.readingTime && (
                  <div className='blog-post-meta-item'>
                    <span>⏱️</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                )}
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className='blog-card-tags'>
                  {post.tags.map(tag => (
                    <span key={tag} className='blog-card-tag'>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </header>

            <div
              className='blog-post-content-body'
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>
        </main>

        <BlogFooter />
      </div>
    </>
  );
}
