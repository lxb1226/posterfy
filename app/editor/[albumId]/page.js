'use client';

import { useParams, useRouter } from 'next/navigation';
import PosterEditor from '../../../src/components/PosterEditor/PosterEditor.jsx';
import Navbar from '../../../src/components/Navbar/Navbar.jsx';
import Footer from '../../../src/components/Footer.jsx';

export default function EditorPage() {
  const params = useParams();
  const router = useRouter();
  const albumId = params.albumId;

  const handleClickBack = () => {
    router.push('/');
  };

  if (!albumId) {
    router.push('/');
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
