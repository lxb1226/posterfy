'use client';

import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import Navbar from '../src/components/Navbar/Navbar.jsx';
import Hero from '../src/components/Hero.jsx';
import Anchor from '../src/components/Anchor.jsx';
import SectionExplanation from '../src/components/SectionExplanation.jsx';
import ClientSearchbar from '../src/components/ClientSearchbar.jsx';
import Footer from '../src/components/Footer.jsx';
import ClientGrid from '../src/components/ClientGrid.jsx';
import Faq from '../src/components/Faq/Faq.jsx';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default function Home() {
  const { t } = useTranslation();

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Hero />
        <Anchor text={t('anchorArt')} type={1} />
        <SectionExplanation
          title={t('ArtTitle')}
          paragraph={t('ArtParagraph')}
        />

        <ClientSearchbar />

        <Anchor text={t('TryTrend')} type={2} />
        <ClientGrid />

        <Faq />
      </MainContent>
      <Footer />
    </Container>
  );
}
