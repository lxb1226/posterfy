'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Navbar from '../../src/components/Navbar/Navbar.jsx';
import Anchor from '../../src/components/Anchor.jsx';
import Grid from '../../src/components/Grid.jsx';
import Footer from '../../src/components/Footer.jsx';
import Searchbar from '../../src/components/Searchbar.jsx';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding-top: 100px;
`;

function SearchContent() {
  const { t } = useTranslation();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  function onClickAlbum(id) {
    // 调试日志：记录传入的id参数
    console.log('SearchPage onClickAlbum called with:', {
      id,
      type: typeof id,
      stringified: String(id),
      isObject: typeof id === 'object',
      objectKeys: typeof id === 'object' ? Object.keys(id) : null,
    });

    // 检查是否传入了对象而不是ID
    if (typeof id === 'object' && id !== null) {
      console.error('❌ ERROR: Object passed instead of ID:', id);
      console.error('❌ This will cause [object Object] in URL');
      return; // 阻止导航
    }

    // 确保id是字符串，防止传递对象导致[object Object]错误
    const albumId = String(id);
    console.log('Navigating to:', `/editor/${albumId}`);
    router.push(`/editor/${albumId}`);
  }

  const onSearch = newQuery => {
    if (newQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(newQuery)}`);
    } else {
      router.push('/');
    }
  };

  // Update document title and meta tags for SEO
  useEffect(() => {
    if (query) {
      document.title = `Search: ${query} | Posterfy - Album Poster Generator`;

      // Update meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          `Search results for "${query}" - Find and create stunning posters for your favorite albums with Posterfy. Powered by Spotify API.`
        );
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `Search: ${query} | Posterfy`);
      }

      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute(
          'content',
          `Search results for "${query}" - Create stunning album posters with Posterfy.`
        );
      }

      // Update canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute(
          'href',
          `https://www.posterfy.art/search?q=${encodeURIComponent(query)}`
        );
      }

      // Add search page breadcrumb structured data
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
            name: 'Search',
            item: 'https://www.posterfy.art/search',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: `Search: ${query}`,
            item: `https://www.posterfy.art/search?q=${encodeURIComponent(query)}`,
          },
        ],
      };

      // Remove existing breadcrumb structured data
      const existingBreadcrumb = document.getElementById(
        'search-breadcrumb-data'
      );
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      // Add new breadcrumb structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(breadcrumbData);
      script.id = 'search-breadcrumb-data';
      document.head.appendChild(script);
    } else {
      document.title = 'Search Albums | Posterfy - Album Poster Generator';

      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          'Search for your favorite albums and create stunning posters with Posterfy. Powered by Spotify API for instant high-quality results.'
        );
      }

      // Add basic search page breadcrumb
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
            name: 'Search',
            item: 'https://www.posterfy.art/search',
          },
        ],
      };

      const existingBreadcrumb = document.getElementById(
        'search-breadcrumb-data'
      );
      if (existingBreadcrumb) {
        existingBreadcrumb.remove();
      }

      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(breadcrumbData);
      script.id = 'search-breadcrumb-data';
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const breadcrumbToRemove = document.getElementById(
        'search-breadcrumb-data'
      );
      if (breadcrumbToRemove) {
        breadcrumbToRemove.remove();
      }
    };
  }, [query]);

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Anchor text={t('anchorArt')} type={1} />
        <Searchbar onSearch={onSearch} defaultValue={query} />
        {query && (
          <>
            <h2
              style={{
                textAlign: 'center',
                margin: '40px 0 20px',
                fontSize: '1.5em',
              }}
            >
              {t('SearchResults', `Search results for "${query}"`)}
            </h2>
            <Grid query={query} onclick={onClickAlbum} />
          </>
        )}
      </MainContent>
      <Footer />
    </Container>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchContent />
    </Suspense>
  );
}
