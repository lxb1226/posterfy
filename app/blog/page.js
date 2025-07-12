'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Navbar from '../../src/components/Navbar/Navbar.jsx';
import Footer from '../../src/components/Footer.jsx';
import BlogCard from '../../src/components/Blog/BlogCard.jsx';
import BlogHero from '../../src/components/Blog/BlogHero.jsx';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 120px 20px 40px;
  width: 100%;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  font-size: 1.1rem;
  color: #666;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }
`;

export default function BlogPage() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Update SEO meta tags
  useEffect(() => {
    document.title = 'Blog | Posterfy - Music Poster Design Tips & Tutorials';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Discover design tips, music industry insights, and tutorials for creating stunning album posters. Learn about music visualization and poster design with Posterfy.'
      );
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        'Posterfy Blog - Design Tips & Music Insights'
      );
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]'
    );
    if (ogDescription) {
      ogDescription.setAttribute(
        'content',
        'Discover design tips, music industry insights, and tutorials for creating stunning album posters with Posterfy.'
      );
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.posterfy.art/blog');
    }

    // Add blog structured data
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
    };

    // Add breadcrumb structured data
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

    // Remove existing structured data
    const existingBlogData = document.getElementById('blog-structured-data');
    if (existingBlogData) {
      existingBlogData.remove();
    }

    const existingBreadcrumb = document.getElementById('blog-breadcrumb-data');
    if (existingBreadcrumb) {
      existingBreadcrumb.remove();
    }

    // Add new structured data
    const blogScript = document.createElement('script');
    blogScript.type = 'application/ld+json';
    blogScript.innerHTML = JSON.stringify(blogStructuredData);
    blogScript.id = 'blog-structured-data';
    document.head.appendChild(blogScript);

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.innerHTML = JSON.stringify(breadcrumbData);
    breadcrumbScript.id = 'blog-breadcrumb-data';
    document.head.appendChild(breadcrumbScript);

    // Cleanup
    return () => {
      const blogToRemove = document.getElementById('blog-structured-data');
      if (blogToRemove) {
        blogToRemove.remove();
      }

      const breadcrumbToRemove = document.getElementById(
        'blog-breadcrumb-data'
      );
      if (breadcrumbToRemove) {
        breadcrumbToRemove.remove();
      }
    };
  }, []);

  // Fetch blog posts
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/blog');
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return (
    <Container>
      <Navbar />
      <MainContent>
        <BlogHero />

        {loading ? (
          <LoadingState>Loading blog posts...</LoadingState>
        ) : posts.length === 0 ? (
          <EmptyState>
            <h3>No blog posts available yet</h3>
            <p>
              We&apos;re working on creating amazing content for you. Check back
              soon!
            </p>
          </EmptyState>
        ) : (
          <BlogGrid>
            {posts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </BlogGrid>
        )}
      </MainContent>
      <Footer />
    </Container>
  );
}
