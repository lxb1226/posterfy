'use client';

import { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaNewspaper,
  FaShieldAlt,
  FaFileContract,
  FaPalette,
  FaGithub,
  FaSitemap,
} from 'react-icons/fa';
import Navbar from '../../src/components/Navbar/Navbar.jsx';
import Footer from '../../src/components/Footer.jsx';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1000px;
  margin: 0 auto;
  padding: 120px 20px 20px;
  width: 100%;
  line-height: 1.7;
  color: #e0e0e0;
`;

const Hero = styled.section`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #fff;
  background: linear-gradient(135deg, #1db954, #1aa34a);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #ccc;
  max-width: 600px;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SitemapGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const SitemapSection = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(29, 185, 84, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 10px;

    .icon {
      color: #1db954;
      font-size: 1.3rem;
    }
  }
`;

const SitemapList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SitemapItem = styled.li`
  margin-bottom: 0.8rem;
`;

const SitemapLink = styled(Link)`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;

  svg {
    font-size: 0.9rem;
    opacity: 0.7;
  }

  &:hover {
    color: #1db954;
    transform: translateX(5px);

    svg {
      opacity: 1;
    }
  }
`;

const ExternalSitemapLink = styled.a`
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 0;

  svg {
    font-size: 0.9rem;
    opacity: 0.7;
  }

  &:hover {
    color: #1db954;
    transform: translateX(5px);

    svg {
      opacity: 1;
    }
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  color: #ccc;
  font-size: 0.9rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export default function SitemapPage() {
  useEffect(() => {
    // Update SEO meta tags
    document.title = 'Site Map | Posterfy - Complete Site Navigation';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Complete site map of Posterfy showing all pages, features, and resources. Easy navigation to all sections of our album poster creation tool.'
      );
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.posterfy.art/sitemap');
    }

    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Site Map',
      description: 'Complete navigation map of Posterfy website',
      url: 'https://www.posterfy.art/sitemap',
      mainEntity: {
        '@type': 'SiteNavigationElement',
        name: 'Posterfy Site Map',
        url: 'https://www.posterfy.art/sitemap',
      },
      breadcrumb: {
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
            name: 'Site Map',
            item: 'https://www.posterfy.art/sitemap',
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    script.id = 'sitemap-structured-data';
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('sitemap-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Hero>
          <Title>Site Map</Title>
          <Subtitle>
            Complete navigation guide to all pages and features on Posterfy
          </Subtitle>
        </Hero>

        <SitemapGrid>
          {/* Main Pages */}
          <SitemapSection>
            <h2>
              <FaHome className='icon' />
              Main Pages
            </h2>
            <SitemapList>
              <SitemapItem>
                <SitemapLink href='/'>
                  <FaPalette />
                  Home - Create Poster
                </SitemapLink>
              </SitemapItem>
              <SitemapItem>
                <SitemapLink href='/#features'>Features</SitemapLink>
              </SitemapItem>
              <SitemapItem>
                <SitemapLink href='/#faq'>FAQ</SitemapLink>
              </SitemapItem>
            </SitemapList>
          </SitemapSection>

          {/* Company Pages */}
          <SitemapSection>
            <h2>
              <FaInfoCircle className='icon' />
              Company
            </h2>
            <SitemapList>
              <SitemapItem>
                <SitemapLink href='/about'>
                  <FaInfoCircle />
                  About Us
                </SitemapLink>
              </SitemapItem>
              <SitemapItem>
                <SitemapLink href='/contact'>
                  <FaEnvelope />
                  Contact
                </SitemapLink>
              </SitemapItem>
              <SitemapItem>
                <SitemapLink href='/blog'>
                  <FaNewspaper />
                  Blog
                </SitemapLink>
              </SitemapItem>
            </SitemapList>
          </SitemapSection>

          {/* Blog Posts */}
          <SitemapSection>
            <h2>
              <FaNewspaper className='icon' />
              Blog Articles
            </h2>
            <SitemapList>
              <SitemapItem>
                <SitemapLink href='/blog/designing-memorable-album-posters'>
                  Designing Memorable Album Posters
                </SitemapLink>
              </SitemapItem>
              <SitemapItem>
                <SitemapLink href='/blog/color-theory-music-visualization'>
                  Color Theory in Music Visualization
                </SitemapLink>
              </SitemapItem>
              <SitemapItem>
                <SitemapLink href='/blog/typography-music-poster-design'>
                  Typography in Music Poster Design
                </SitemapLink>
              </SitemapItem>
            </SitemapList>
          </SitemapSection>

          {/* Legal Pages */}
          <SitemapSection>
            <h2>
              <FaShieldAlt className='icon' />
              Legal & Policies
            </h2>
            <SitemapList>
              <SitemapItem>
                <SitemapLink href='/privacy'>
                  <FaShieldAlt />
                  Privacy Policy
                </SitemapLink>
              </SitemapItem>
              <SitemapItem>
                <SitemapLink href='/terms'>
                  <FaFileContract />
                  Terms of Service
                </SitemapLink>
              </SitemapItem>
            </SitemapList>
          </SitemapSection>

          {/* External Resources */}
          <SitemapSection>
            <h2>
              <FaGithub className='icon' />
              External Resources
            </h2>
            <SitemapList>
              <SitemapItem>
                <ExternalSitemapLink
                  href='https://github.com/avictormorais/posterfy'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaGithub />
                  GitHub Repository
                </ExternalSitemapLink>
              </SitemapItem>
              <SitemapItem>
                <ExternalSitemapLink
                  href='https://github.com/avictormorais/posterfy/issues'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Bug Reports & Issues
                </ExternalSitemapLink>
              </SitemapItem>
              <SitemapItem>
                <ExternalSitemapLink
                  href='https://github.com/avictormorais/posterfy/discussions'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Community Discussions
                </ExternalSitemapLink>
              </SitemapItem>
            </SitemapList>
          </SitemapSection>

          {/* Technical Resources */}
          <SitemapSection>
            <h2>
              <FaSitemap className='icon' />
              Technical
            </h2>
            <SitemapList>
              <SitemapItem>
                <SitemapLink href='/sitemap'>
                  <FaSitemap />
                  Site Map (Current Page)
                </SitemapLink>
              </SitemapItem>
            </SitemapList>
          </SitemapSection>
        </SitemapGrid>

        <LastUpdated>
          Last updated:{' '}
          {new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </LastUpdated>
      </MainContent>
      <Footer />
    </Container>
  );
}
