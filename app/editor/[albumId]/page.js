'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import PosterEditor from '../../../src/components/PosterEditor/PosterEditor.jsx';
import Navbar from '../../../src/components/Navbar/Navbar.jsx';
import Footer from '../../../src/components/Footer.jsx';

export default function EditorPage() {
  const params = useParams();
  const router = useRouter();
  const albumId = params.albumId;
  const [isValidId, setIsValidId] = useState(true);
  const [albumData, setAlbumData] = useState(null);

  // Function to update SEO meta tags
  const updateSEOTags = albumInfo => {
    if (albumInfo) {
      document.title = `${albumInfo.name} by ${albumInfo.artists?.[0]?.name || 'Unknown Artist'} | Posterfy Editor`;

      // Update meta description
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute(
          'content',
          `Create a stunning poster for "${albumInfo.name}" by ${albumInfo.artists?.[0]?.name || 'Unknown Artist'}. Customize colors, fonts, and download high-quality posters with Posterfy.`
        );
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', `${albumInfo.name} Poster | Posterfy`);
      }

      const ogDescription = document.querySelector(
        'meta[property="og:description"]'
      );
      if (ogDescription) {
        ogDescription.setAttribute(
          'content',
          `Create a custom poster for "${albumInfo.name}" by ${albumInfo.artists?.[0]?.name || 'Unknown Artist'} with Posterfy.`
        );
      }

      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage && albumInfo.images?.[0]?.url) {
        ogImage.setAttribute('content', albumInfo.images[0].url);
      }

      // Update canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute(
          'href',
          `https://www.posterfy.art/editor/${albumId}`
        );
      }
    } else {
      document.title = 'Album Poster Editor | Posterfy';
    }
  };

  console.log('🎯 EditorPage params:', params);
  console.log('🎯 EditorPage albumId:', albumId, typeof albumId);

  useEffect(() => {
    // 检测到 [object Object] 错误时重定向到主页
    if (albumId) {
      const decodedAlbumId = decodeURIComponent(albumId);
      if (
        decodedAlbumId === '[object Object]' ||
        albumId === '%5Bobject%20Object%5D'
      ) {
        console.error(
          '❌ Detected [object Object] in URL, redirecting to home page'
        );
        console.error(
          '❌ This indicates an object was passed instead of a string ID'
        );
        setIsValidId(false);
        router.push('/');
        return;
      }
    }

    if (!albumId) {
      console.log('❌ No albumId found, redirecting to home');
      setIsValidId(false);
      router.push('/');
      return;
    }
  }, [albumId, router]);

  const handleClickBack = () => {
    router.push('/');
  };

  // 如果 ID 无效，显示加载状态或返回 null
  if (!isValidId || !albumId) {
    return null;
  }

  return (
    <>
      <Navbar />
      <PosterEditor albumID={albumId} handleClickBack={handleClickBack} />
      <Footer />
    </>
  );
}
