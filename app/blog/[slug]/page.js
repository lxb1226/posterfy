'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Navbar from '../../../src/components/Navbar/Navbar.jsx';
import Footer from '../../../src/components/Footer.jsx';
import BlogContent from '../../../src/components/Blog/BlogContent.jsx';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 40px;
  width: 100%;
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  font-size: 1.1rem;
  color: #666;
`;

const ErrorState = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #666;

  h2 {
    margin-bottom: 1rem;
    color: #333;
  }

  button {
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    background: #1db954;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1rem;

    &:hover {
      background: #1aa34a;
    }
  }
`;

export default function BlogPostPage() {
  const params = useParams();
  const router = useRouter();
  const { t } = useTranslation();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const slug = params.slug;

  // Update SEO meta tags when post loads
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Posterfy Blog`;

      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          post.excerpt ||
            `Read "${post.title}" on Posterfy Blog - Design tips and music industry insights.`
        );
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `${post.title} | Posterfy Blog`);
      }

      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute(
          'content',
          post.excerpt || `Read "${post.title}" on Posterfy Blog`
        );
      }

      // Update canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', `https://www.posterfy.art/blog/${slug}`);
      }

      // Add article structured data
      const articleStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.lastModified || post.date,
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
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.posterfy.art/blog/${slug}`,
        },
        url: `https://www.posterfy.art/blog/${slug}`,
        inLanguage: 'en',
        keywords: post.tags ? post.tags.join(', ') : '',
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
          {
            '@type': 'ListItem',
            position: 3,
            name: post.title,
            item: `https://www.posterfy.art/blog/${slug}`,
          },
        ],
      };

      // Remove existing structured data
      const existingArticleData = document.getElementById(
        'article-structured-data'
      );
      if (existingArticleData) {
        existingArticleData.remove();
      }

      const existingBreadcrumb = document.getElementById(
        'article-breadcrumb-data'
      );
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      // Add new structured data
      const articleScript = document.createElement('script');
      articleScript.type = 'application/ld+json';
      articleScript.innerHTML = JSON.stringify(articleStructuredData);
      articleScript.id = 'article-structured-data';
      document.head.appendChild(articleScript);

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.innerHTML = JSON.stringify(breadcrumbData);
      breadcrumbScript.id = 'article-breadcrumb-data';
      document.head.appendChild(breadcrumbScript);
    }

    // Cleanup
    return () => {
      const articleToRemove = document.getElementById(
        'article-structured-data'
      );
      if (articleToRemove) {
        articleToRemove.remove();
      }

      const breadcrumbToRemove = document.getElementById(
        'article-breadcrumb-data'
      );
      if (breadcrumbToRemove) {
        breadcrumbToRemove.remove();
      }
    };
  }, [post, slug]);

  // Fetch blog post
  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await fetch(`/api/blog/${slug}`);
        if (response.ok) {
          const data = await response.json();
          setPost(data);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const handleGoBack = () => {
    router.push('/blog');
  };

  if (loading) {
    return (
      <Container>
        <Navbar />
        <MainContent>
          <LoadingState>Loading blog post...</LoadingState>
        </MainContent>
        <Footer />
      </Container>
    );
  }

  if (error || !post) {
    return (
      <Container>
        <Navbar />
        <MainContent>
          <ErrorState>
            <h2>Blog post not found</h2>
            <p>
              The blog post you&apos;re looking for doesn&apos;t exist or has
              been moved.
            </p>
            <button onClick={handleGoBack}>← Back to Blog</button>
          </ErrorState>
        </MainContent>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Navbar />
      <MainContent>
        <BlogContent post={post} onGoBack={handleGoBack} />
      </MainContent>
      <Footer />
    </Container>
  );
}
