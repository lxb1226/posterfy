'use client';

import { useEffect } from 'react';
import { FaCode, FaPalette, FaSpotify } from 'react-icons/fa';
import { MdCode, MdSchool, MdTrendingUp } from 'react-icons/md';
import styled from 'styled-components';
import Footer from '../../src/components/Footer.jsx';
import Navbar from '../../src/components/Navbar/Navbar.jsx';

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

const Section = styled.section`
  margin-bottom: 3rem;

  h2 {
    color: #fff;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    position: relative;

    &:after {
      content: '';
      display: block;
      width: 60px;
      height: 3px;
      background: linear-gradient(135deg, #1db954, #1aa34a);
      margin: 1rem auto;
      border-radius: 2px;
    }
  }

  h3 {
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 1rem;
    margin-top: 2rem;
  }

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li {
    margin-bottom: 0.8rem;
    font-size: 1.05rem;
  }

  strong {
    color: #1db954;
    font-weight: 600;
  }

  a {
    color: #1db954;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
      color: #fff;
    }
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(29, 185, 84, 0.3);
  }

  .icon {
    font-size: 2.5rem;
    color: #1db954;
    margin-bottom: 1rem;
  }

  h3 {
    color: #fff;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    margin-top: 0;
  }

  p {
    color: #ccc;
    margin-bottom: 0;
    font-size: 1rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 1.5rem;
  background: rgba(29, 185, 84, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(29, 185, 84, 0.2);

  .number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #1db954;
    display: block;
    margin-bottom: 0.5rem;
  }

  .label {
    color: #ccc;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

const TeamSection = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;

  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1db954, #1aa34a);
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    color: white;
    font-weight: bold;
  }

  h3 {
    color: #fff;
    margin-bottom: 0.5rem;
  }

  .role {
    color: #1db954;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      transition: all 0.3s ease;

      &:hover {
        background: rgba(29, 185, 84, 0.2);
        transform: translateY(-2px);
      }
    }
  }
`;

export default function AboutPage() {
  useEffect(() => {
    // Update SEO meta tags
    document.title = 'About Us | Posterfy - Open Source Album Poster Creator';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Learn about Posterfy's mission to democratize music design. Discover our open-source, educational approach to creating beautiful album posters for everyone."
      );
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.posterfy.art/about');
    }

    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About Posterfy',
      description:
        'Learn about Posterfy - an open-source album poster creation tool',
      url: 'https://www.posterfy.art/about',
      mainEntity: {
        '@type': 'Organization',
        name: 'Posterfy',
        url: 'https://www.posterfy.art',
        description:
          'Open-source album poster generator powered by Spotify API',
        foundingDate: '2024',
        founder: {
          '@type': 'Person',
          name: 'Victor Morais',
        },
        knowsAbout: [
          'Web Design',
          'Music Visualization',
          'Album Art',
          'Graphic Design',
          'Open Source Software',
        ],
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
            name: 'About',
            item: 'https://www.posterfy.art/about',
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    script.id = 'about-structured-data';
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('about-structured-data');
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
          <Title>About Posterfy</Title>
          <Subtitle>
            Democratizing music design through open-source innovation and
            community collaboration
          </Subtitle>
        </Hero>

        <Section>
          <h2>Our Mission</h2>
          <p>
            At Posterfy, we believe that{' '}
            <strong>
              everyone should have access to professional-quality design tools
            </strong>{' '}
            regardless of their technical expertise or budget. Our mission is to
            bridge the gap between music and visual art by providing a free,
            intuitive platform that transforms album data into stunning poster
            designs.
          </p>
          <p>
            We&apos;re passionate about music, design, and open-source software.
            By combining these elements, we&apos;ve created a tool that not only
            serves practical needs but also inspires creativity and learning in
            the music and design communities.
          </p>
        </Section>

        <Section>
          <h2>What We Do</h2>
          <FeatureGrid>
            <FeatureCard>
              <FaPalette className='icon' />
              <h3>Design Made Simple</h3>
              <p>
                Transform album data into beautiful posters with our intuitive
                design tools. No design experience required.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FaSpotify className='icon' />
              <h3>Spotify Integration</h3>
              <p>
                Access millions of albums through Spotify&apos;s API. Find any
                artist or album and start designing instantly.
              </p>
            </FeatureCard>
            <FeatureCard>
              <MdCode className='icon' />
              <h3>Open Source</h3>
              <p>
                Built with transparency and community in mind. Our code is open
                for everyone to learn, contribute, and improve.
              </p>
            </FeatureCard>
            <FeatureCard>
              <MdSchool className='icon' />
              <h3>Educational Focus</h3>
              <p>
                Learn design principles, color theory, and typography through
                hands-on creation and our educational content.
              </p>
            </FeatureCard>
            <FeatureCard>
              <FaCode className='icon' />
              <h3>Modern Technology</h3>
              <p>
                Built with Next.js, React, and modern web technologies for a
                fast, responsive, and reliable experience.
              </p>
            </FeatureCard>
            <FeatureCard>
              <MdTrendingUp className='icon' />
              <h3>Continuous Innovation</h3>
              <p>
                Constantly evolving with new features, design trends, and
                community feedback to stay current and useful.
              </p>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <Section>
          <h2>Our Impact</h2>
          <StatsGrid>
            <StatCard>
              <span className='number'>Free</span>
              <span className='label'>Always & Forever</span>
            </StatCard>
            <StatCard>
              <span className='number'>100%</span>
              <span className='label'>Open Source</span>
            </StatCard>
            <StatCard>
              <span className='number'>3</span>
              <span className='label'>Languages Supported</span>
            </StatCard>
            <StatCard>
              <span className='number'>∞</span>
              <span className='label'>Design Possibilities</span>
            </StatCard>
          </StatsGrid>
          <p>
            Since our launch, we&apos;ve been committed to providing a
            completely free service that respects user privacy, promotes
            learning, and celebrates the intersection of music and visual
            design. Our platform has helped users discover new music, learn
            design skills, and create meaningful visual content.
          </p>
        </Section>

        <Section>
          <h2>Our Values</h2>

          <h3>🎵 Music First</h3>
          <p>
            Music is at the heart of everything we do. We respect artists,
            celebrate creativity, and believe that great music deserves great
            visual representation.
          </p>

          <h3>🎨 Design for Everyone</h3>
          <p>
            Good design shouldn&apos;t be exclusive. We make professional design
            tools accessible to anyone with an internet connection and a passion
            for creativity.
          </p>

          <h3>🌟 Open & Transparent</h3>
          <p>
            We believe in open-source principles, transparent development, and
            community-driven innovation. Our code, our process, and our
            intentions are open for all to see.
          </p>

          <h3>📚 Education & Learning</h3>
          <p>
            Every feature we build includes an educational component. We
            don&apos;t just provide tools—we help users understand design
            principles and grow their skills.
          </p>

          <h3>🌍 Community & Collaboration</h3>
          <p>
            We&apos;re stronger together. We encourage contributions, feedback,
            and collaboration from designers, developers, and music lovers
            worldwide.
          </p>

          <h3>🔒 Privacy & Respect</h3>
          <p>
            We respect user privacy, minimize data collection, and believe that
            creative tools should empower users without compromising their
            personal information.
          </p>
        </Section>

        <Section>
          <h2>Technology & Innovation</h2>
          <p>
            Posterfy is built using cutting-edge web technologies to ensure a
            smooth, fast, and reliable experience:
          </p>
          <ul>
            <li>
              <strong>Next.js 14:</strong> React framework for production-ready
              applications
            </li>
            <li>
              <strong>Styled Components:</strong> CSS-in-JS for maintainable,
              dynamic styling
            </li>
            <li>
              <strong>Spotify Web API:</strong> Access to millions of albums and
              artists
            </li>
            <li>
              <strong>Canvas API:</strong> High-quality image generation and
              manipulation
            </li>
            <li>
              <strong>Progressive Web App:</strong> Mobile-friendly with offline
              capabilities
            </li>
            <li>
              <strong>Responsive Design:</strong> Optimized for all devices and
              screen sizes
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Looking Forward</h2>
          <p>
            Our journey is just beginning. We&apos;re constantly working on new
            features, improvements, and educational content. Some of our
            upcoming initiatives include:
          </p>
          <ul>
            <li>
              <strong>Advanced Design Tools:</strong> More customization options
              and creative features
            </li>
            <li>
              <strong>Community Gallery:</strong> A space to share and discover
              amazing poster designs
            </li>
            <li>
              <strong>Educational Content:</strong> Expanded tutorials, design
              principles, and case studies
            </li>
            <li>
              <strong>Accessibility Improvements:</strong> Making our tools
              usable by everyone
            </li>
            <li>
              <strong>API Expansions:</strong> Integration with more music
              services and platforms
            </li>
            <li>
              <strong>Mobile Apps:</strong> Native mobile applications for iOS
              and Android
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Join Our Community</h2>
          <p>
            Posterfy is more than just a tool—it&apos;s a community of music
            lovers, designers, and creators. We invite you to:
          </p>
          <ul>
            <li>
              <strong>Contribute:</strong> Help us improve by contributing code,
              reporting bugs, or suggesting features
            </li>
            <li>
              <strong>Share:</strong> Show off your creations and inspire others
              in the community
            </li>
            <li>
              <strong>Learn:</strong> Explore our tutorials and educational
              content to grow your design skills
            </li>
            <li>
              <strong>Connect:</strong> Engage with other users and share your
              passion for music and design
            </li>
            <li>
              <strong>Spread the Word:</strong> Help others discover Posterfy
              and the joy of music visualization
            </li>
          </ul>
          <p>
            Ready to start creating? <a href='/'>Try Posterfy now</a> and join
            thousands of users who are already bringing their musical visions to
            life.
          </p>
        </Section>

        <Section>
          <h2>Contact & Support</h2>
          <p>
            We love hearing from our users! Whether you have questions,
            suggestions, or just want to share your latest creation, we&apos;re
            here to help:
          </p>
          <ul>
            <li>
              <strong>General Questions:</strong>{' '}
              <a href='/contact'>Contact us</a>
            </li>
            <li>
              <strong>Technical Issues:</strong>{' '}
              <a href='mailto:heyjude1817@gmail.com'>heyjude1817@gmail.com</a>
            </li>
            <li>
              <strong>Feature Requests:</strong>{' '}
              <a href='mailto:heyjude1817@gmail.com'>heyjude1817@gmail.com</a>
            </li>
            <li>
              <strong>Privacy Concerns:</strong>{' '}
              <a href='mailto:heyjude1817@gmail.com'>heyjude1817@gmail.com</a>
            </li>
          </ul>
        </Section>
      </MainContent>
      <Footer />
    </Container>
  );
}
