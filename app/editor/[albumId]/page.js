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
