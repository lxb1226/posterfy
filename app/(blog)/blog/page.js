import { getAllPosts } from '../../../src/lib/markdown.js';
import BlogNavbar from '../components/BlogNavbar.js';
import BlogFooter from '../components/BlogFooter.js';
import BlogCard from '../components/BlogCard.js';
import BlogHero from '../components/BlogHero.js';
import '../blog.css';

// Static metadata for SEO
export const metadata = {
  title: 'Blog | Posterfy - Music Poster Design Tips & Tutorials',
  description:
    'Discover design tips, music industry insights, and tutorials for creating stunning album posters. Learn about music visualization and poster design with Posterfy.',
  openGraph: {
    title: 'Posterfy Blog - Design Tips & Music Insights',
    description:
      'Discover design tips, music industry insights, and tutorials for creating stunning album posters with Posterfy.',
    url: 'https://www.posterfy.art/blog',
    siteName: 'Posterfy',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.posterfy.art/blog',
  },
};

// Enable ISR with revalidation
export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  // Server-side data fetching
  const posts = getAllPosts();

  // Generate structured data
  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Posterfy Blog',
    description:
      'Design tips, music industry insights, and tutorials for creating stunning album posters',
    url: 'https://www.posterfy.art/blog',
    publisher: {
      '@type': 'Organization',
      name: 'Posterfy',
      url: 'https://www.posterfy.art',
      logo: 'https://www.posterfy.art/ico.png',
    },
    inLanguage: 'en',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.posterfy.art/blog',
    },
    blogPost: posts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      datePublished: post.date,
      url: `https://www.posterfy.art/blog/${post.slug}`,
    })),
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
    ],
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogStructuredData),
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
        <main className='blog-main'>
          <BlogHero />

          {posts.length === 0 ? (
            <div className='blog-empty-state'>
              <h3>No blog posts available yet</h3>
              <p>
                We&apos;re working on creating amazing content for you. Check
                back soon!
              </p>
            </div>
          ) : (
            <div className='blog-grid'>
              {posts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </main>
        <BlogFooter />
      </div>
    </>
  );
}
