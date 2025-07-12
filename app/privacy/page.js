'use client';

import { useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../../src/components/Navbar/Navbar.jsx';
import Footer from '../../src/components/Footer.jsx';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 800px;
  margin: 0 auto;
  padding: 120px 20px 20px;
  width: 100%;
  line-height: 1.7;
  color: #e0e0e0;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const LastUpdated = styled.p`
  text-align: center;
  color: #ccc;
  margin-bottom: 3rem;
  font-style: italic;
`;

const Section = styled.section`
  margin-bottom: 2rem;

  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid #1db954;
    padding-bottom: 0.5rem;
  }

  h3 {
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 0.8rem;
    margin-top: 1.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #1db954;
    font-weight: 600;
  }

  a {
    color: #1db954;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function PrivacyPolicy() {
  useEffect(() => {
    // Update SEO meta tags
    document.title = 'Privacy Policy | Posterfy - How We Protect Your Data';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Learn how Posterfy protects your privacy and handles your data. Comprehensive privacy policy covering data collection, usage, and your rights.'
      );
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.posterfy.art/privacy');
    }

    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy',
      description: 'Posterfy Privacy Policy - Data Protection and User Rights',
      url: 'https://www.posterfy.art/privacy',
      mainEntity: {
        '@type': 'PrivacyPolicy',
        name: 'Posterfy Privacy Policy',
        dateModified: '2024-12-20',
        publisher: {
          '@type': 'Organization',
          name: 'Posterfy',
          url: 'https://www.posterfy.art',
        },
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
            name: 'Privacy Policy',
            item: 'https://www.posterfy.art/privacy',
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    script.id = 'privacy-structured-data';
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('privacy-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Title>Privacy Policy</Title>
        <LastUpdated>Last updated: December 20, 2024</LastUpdated>

        <Section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to Posterfy (&quot;we,&quot; &quot;our,&quot; or
            &quot;us&quot;). We are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our album poster creation service.
          </p>
          <p>
            <strong>
              Posterfy is a free, educational, and non-commercial service
            </strong>{' '}
            that allows users to create custom album posters using publicly
            available music data from Spotify&apos;s API.
          </p>
        </Section>

        <Section>
          <h2>2. Information We Collect</h2>

          <h3>2.1 Information You Provide</h3>
          <ul>
            <li>
              <strong>Search queries:</strong> Album and artist names you search
              for
            </li>
            <li>
              <strong>Design preferences:</strong> Color choices, fonts, and
              layout settings you select
            </li>
            <li>
              <strong>Custom uploads:</strong> Any images or content you choose
              to upload (stored locally on your device)
            </li>
          </ul>

          <h3>2.2 Automatically Collected Information</h3>
          <ul>
            <li>
              <strong>Usage data:</strong> How you interact with our service,
              pages visited, time spent
            </li>
            <li>
              <strong>Device information:</strong> Browser type, operating
              system, IP address
            </li>
            <li>
              <strong>Analytics data:</strong> Anonymous usage statistics to
              improve our service
            </li>
          </ul>

          <h3>2.3 Third-Party Data</h3>
          <ul>
            <li>
              <strong>Spotify API data:</strong> Publicly available album
              information, artwork, and metadata
            </li>
            <li>
              <strong>iTunes API data:</strong> Additional album artwork and
              information (when available)
            </li>
          </ul>
        </Section>

        <Section>
          <h2>3. How We Use Your Information</h2>
          <p>We use the collected information for the following purposes:</p>
          <ul>
            <li>
              <strong>Service provision:</strong> To provide and maintain our
              poster creation service
            </li>
            <li>
              <strong>Personalization:</strong> To remember your design
              preferences during your session
            </li>
            <li>
              <strong>Improvement:</strong> To analyze usage patterns and
              improve our service
            </li>
            <li>
              <strong>Security:</strong> To detect and prevent abuse or misuse
              of our service
            </li>
            <li>
              <strong>Legal compliance:</strong> To comply with applicable laws
              and regulations
            </li>
          </ul>
        </Section>

        <Section>
          <h2>4. Data Storage and Security</h2>

          <h3>4.1 Local Storage</h3>
          <p>
            Most of your data is stored locally on your device using browser
            storage technologies. This includes:
          </p>
          <ul>
            <li>Your design preferences and settings</li>
            <li>Recently searched albums</li>
            <li>Custom uploads and modifications</li>
          </ul>

          <h3>4.2 Server Storage</h3>
          <p>We maintain minimal server-side storage for:</p>
          <ul>
            <li>Anonymous usage analytics</li>
            <li>Error logs for service improvement</li>
            <li>Temporary caching of public API responses</li>
          </ul>

          <h3>4.3 Security Measures</h3>
          <p>
            We implement appropriate security measures to protect your
            information:
          </p>
          <ul>
            <li>HTTPS encryption for all data transmission</li>
            <li>Regular security updates and monitoring</li>
            <li>Limited data collection and retention</li>
            <li>No storage of personal identification information</li>
          </ul>
        </Section>

        <Section>
          <h2>5. Third-Party Services</h2>

          <h3>5.1 Spotify API</h3>
          <p>
            We use Spotify&apos;s Web API to fetch publicly available music
            data. We do not access your Spotify account or personal listening
            data. All album information is publicly available and used in
            accordance with Spotify&apos;s terms of service.
          </p>

          <h3>5.2 Analytics Services</h3>
          <p>
            We may use analytics services like Google Analytics or Umami to
            understand how our service is used. These services collect anonymous
            usage data and do not identify individual users.
          </p>

          <h3>5.3 Hosting and Infrastructure</h3>
          <p>
            Our service is hosted on secure platforms that comply with
            industry-standard security practices.
          </p>
        </Section>

        <Section>
          <h2>6. Your Rights and Choices</h2>

          <h3>6.1 Data Control</h3>
          <p>You have the following rights regarding your data:</p>
          <ul>
            <li>
              <strong>Access:</strong> You can view all data stored in your
              browser&apos;s local storage
            </li>
            <li>
              <strong>Deletion:</strong> You can clear your browser data to
              remove all stored information
            </li>
            <li>
              <strong>Portability:</strong> You can export your created posters
              at any time
            </li>
            <li>
              <strong>Opt-out:</strong> You can disable analytics tracking in
              your browser settings
            </li>
          </ul>

          <h3>6.2 Browser Controls</h3>
          <p>You can control your privacy through your browser settings:</p>
          <ul>
            <li>Disable cookies and local storage</li>
            <li>Use private/incognito browsing mode</li>
            <li>Clear browsing data regularly</li>
            <li>Block analytics scripts with ad blockers</li>
          </ul>
        </Section>

        <Section>
          <h2>7. Children&apos;s Privacy</h2>
          <p>
            Our service is intended for general audiences and does not knowingly
            collect personal information from children under 13. If we become
            aware that we have collected information from a child under 13, we
            will take steps to delete such information promptly.
          </p>
        </Section>

        <Section>
          <h2>8. International Users</h2>
          <p>
            Our service is available globally. If you are using our service from
            outside the United States, please be aware that your information may
            be processed in countries with different privacy laws. We take
            appropriate steps to ensure adequate protection of your information.
          </p>
        </Section>

        <Section>
          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we make
            changes, we will:
          </p>
          <ul>
            <li>
              Update the &quot;Last updated&quot; date at the top of this policy
            </li>
            <li>Notify users of significant changes through our website</li>
            <li>Maintain previous versions for reference</li>
          </ul>
          <p>
            Your continued use of our service after any changes indicates your
            acceptance of the updated policy.
          </p>
        </Section>

        <Section>
          <h2>10. Contact Information</h2>
          <p>
            If you have questions, concerns, or requests regarding this Privacy
            Policy or your personal information, please contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href='mailto:heyjude1817@gmail.com'>heyjude1817@gmail.com</a>
            </li>
            <li>
              <strong>Website:</strong> <a href='/contact'>Contact page</a>
            </li>
          </ul>
        </Section>

        <Section>
          <h2>11. Legal Basis for Processing (GDPR)</h2>
          <p>
            For users in the European Union, our legal basis for processing
            personal information includes:
          </p>
          <ul>
            <li>
              <strong>Legitimate Interest:</strong> To provide and improve our
              service
            </li>
            <li>
              <strong>Consent:</strong> When you voluntarily provide information
              or use our service
            </li>
            <li>
              <strong>Legal Obligation:</strong> To comply with applicable laws
            </li>
          </ul>
        </Section>

        <Section>
          <h2>12. Data Retention</h2>
          <p>We retain information only as long as necessary:</p>
          <ul>
            <li>
              <strong>Local storage:</strong> Until you clear your browser data
            </li>
            <li>
              <strong>Analytics data:</strong> Anonymized and retained for up to
              26 months
            </li>
            <li>
              <strong>Error logs:</strong> Automatically deleted after 90 days
            </li>
            <li>
              <strong>API cache:</strong> Cleared every 24 hours
            </li>
          </ul>
        </Section>
      </MainContent>
      <Footer />
    </Container>
  );
}
