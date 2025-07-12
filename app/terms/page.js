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

export default function TermsOfService() {
  useEffect(() => {
    // Update SEO meta tags
    document.title =
      'Terms of Service | Posterfy - Usage Guidelines & Policies';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        "Read Posterfy's Terms of Service covering acceptable use, intellectual property, and user responsibilities for our album poster creation service."
      );
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.posterfy.art/terms');
    }

    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Terms of Service',
      description: 'Posterfy Terms of Service - Usage Guidelines and Policies',
      url: 'https://www.posterfy.art/terms',
      mainEntity: {
        '@type': 'TermsOfService',
        name: 'Posterfy Terms of Service',
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
            name: 'Terms of Service',
            item: 'https://www.posterfy.art/terms',
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    script.id = 'terms-structured-data';
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('terms-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <Container>
      <Navbar />
      <MainContent>
        <Title>Terms of Service</Title>
        <LastUpdated>Last updated: December 20, 2024</LastUpdated>

        <Section>
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing and using Posterfy (&quot;Service&quot;,
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), you agree to be
            bound by these Terms of Service (&quot;Terms&quot;). If you disagree
            with any part of these terms, then you may not access the Service.
          </p>
          <p>
            <strong>
              Posterfy is a free, educational, and non-commercial service
            </strong>{' '}
            designed to help users create custom album posters using publicly
            available music data.
          </p>
        </Section>

        <Section>
          <h2>2. Description of Service</h2>
          <p>Posterfy provides a web-based tool that allows users to:</p>
          <ul>
            <li>
              Search for album information using Spotify&apos;s public API
            </li>
            <li>Create custom poster designs featuring album artwork</li>
            <li>Customize colors, fonts, layouts, and other design elements</li>
            <li>Download high-quality poster images for personal use</li>
            <li>Access design tutorials and educational content</li>
          </ul>
        </Section>

        <Section>
          <h2>3. Acceptable Use</h2>

          <h3>3.1 Permitted Uses</h3>
          <p>You may use our Service for:</p>
          <ul>
            <li>
              <strong>Personal projects:</strong> Creating posters for your own
              enjoyment
            </li>
            <li>
              <strong>Educational purposes:</strong> Learning about design and
              music visualization
            </li>
            <li>
              <strong>Non-commercial sharing:</strong> Sharing your creations on
              social media with proper attribution
            </li>
            <li>
              <strong>Portfolio work:</strong> Including your designs in
              personal portfolios
            </li>
          </ul>

          <h3>3.2 Prohibited Uses</h3>
          <p>You may NOT use our Service for:</p>
          <ul>
            <li>
              <strong>Commercial sales:</strong> Selling posters or designs
              created with our Service
            </li>
            <li>
              <strong>Copyright infringement:</strong> Using copyrighted
              materials without permission
            </li>
            <li>
              <strong>Misrepresentation:</strong> Claiming ownership of original
              album artwork or music
            </li>
            <li>
              <strong>Harmful activities:</strong> Creating offensive,
              defamatory, or inappropriate content
            </li>
            <li>
              <strong>System abuse:</strong> Attempting to harm, disable, or
              overburden our Service
            </li>
            <li>
              <strong>Automated access:</strong> Using bots, scrapers, or
              automated tools
            </li>
          </ul>
        </Section>

        <Section>
          <h2>4. Intellectual Property Rights</h2>

          <h3>4.1 Third-Party Content</h3>
          <p>
            <strong>
              All album artwork, music metadata, and related content accessed
              through our Service belongs to their respective owners.
            </strong>{' '}
            This includes:
          </p>
          <ul>
            <li>Album cover images and artwork</li>
            <li>Artist names and album titles</li>
            <li>Track listings and metadata</li>
            <li>Any other music-related information</li>
          </ul>

          <h3>4.2 Spotify Content</h3>
          <p>
            Album data and images are provided through Spotify&apos;s Web API
            and are subject to Spotify&apos;s terms of service. We do not claim
            ownership of any Spotify content.
          </p>

          <h3>4.3 User Creations</h3>
          <p>
            While you retain rights to the design elements you create (layout,
            color choices, typography), you acknowledge that:
          </p>
          <ul>
            <li>Original album artwork remains the property of its owners</li>
            <li>
              Your designs are derivative works based on existing copyrighted
              material
            </li>
            <li>
              Commercial use of such derivative works may require additional
              permissions
            </li>
          </ul>

          <h3>4.4 Posterfy Service</h3>
          <p>
            Our Service, including its design, functionality, and original
            content, is protected by intellectual property laws and remains our
            property.
          </p>
        </Section>

        <Section>
          <h2>5. User Responsibilities</h2>

          <h3>5.1 Account Security</h3>
          <p>
            While our Service does not require user accounts, you are
            responsible for:
          </p>
          <ul>
            <li>Maintaining the security of your device and browser</li>
            <li>Protecting any personal data you choose to input</li>
            <li>Using the Service in compliance with these Terms</li>
          </ul>

          <h3>5.2 Content Responsibility</h3>
          <p>You are solely responsible for:</p>
          <ul>
            <li>Any custom content you upload or create</li>
            <li>Ensuring you have rights to use any uploaded materials</li>
            <li>Complying with applicable laws and regulations</li>
            <li>Respecting intellectual property rights of others</li>
          </ul>

          <h3>5.3 Reporting Violations</h3>
          <p>
            If you become aware of any violations of these Terms, please report
            them to us immediately.
          </p>
        </Section>

        <Section>
          <h2>6. Privacy and Data</h2>
          <p>
            Our collection and use of personal information is described in our{' '}
            <a href='/privacy'>Privacy Policy</a>. By using our Service, you
            consent to the collection and use of information as outlined in our
            Privacy Policy.
          </p>
        </Section>

        <Section>
          <h2>7. Disclaimers and Limitations</h2>

          <h3>7.1 Service Availability</h3>
          <p>
            Our Service is provided &quot;as is&quot; and &quot;as
            available.&quot; We do not guarantee:
          </p>
          <ul>
            <li>Continuous availability or uptime</li>
            <li>Error-free operation</li>
            <li>Compatibility with all devices or browsers</li>
            <li>Availability of specific album data</li>
          </ul>

          <h3>7.2 Educational Purpose</h3>
          <p>
            This Service is provided for educational and non-commercial
            purposes. We make no warranties about the accuracy, completeness, or
            suitability of the information provided.
          </p>

          <h3>7.3 Third-Party Services</h3>
          <p>
            Our Service relies on third-party APIs and services. We are not
            responsible for:
          </p>
          <ul>
            <li>Changes to third-party APIs or their availability</li>
            <li>Accuracy of third-party data</li>
            <li>Third-party service interruptions</li>
          </ul>
        </Section>

        <Section>
          <h2>8. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Posterfy and its creators
            shall not be liable for any direct, indirect, incidental, special,
            consequential, or punitive damages resulting from:
          </p>
          <ul>
            <li>Your use or inability to use the Service</li>
            <li>Any errors, mistakes, or inaccuracies in content</li>
            <li>
              Personal injury or property damage from your use of the Service
            </li>
            <li>Any unauthorized access to or use of our servers</li>
            <li>Any bugs, viruses, or harmful code that may be transmitted</li>
          </ul>
        </Section>

        <Section>
          <h2>9. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless Posterfy, its
            creators, and affiliates from and against any claims, damages,
            obligations, losses, liabilities, costs, or expenses arising from:
          </p>
          <ul>
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any third-party rights</li>
            <li>Any content you upload or create using the Service</li>
          </ul>
        </Section>

        <Section>
          <h2>10. Copyright Policy</h2>

          <h3>10.1 DMCA Compliance</h3>
          <p>
            We respect intellectual property rights and comply with the Digital
            Millennium Copyright Act (DMCA). If you believe your copyrighted
            work has been infringed, please contact us with:
          </p>
          <ul>
            <li>A description of the copyrighted work</li>
            <li>Location of the alleged infringement</li>
            <li>Your contact information</li>
            <li>A statement of good faith belief</li>
            <li>A statement of accuracy and authority</li>
          </ul>

          <h3>10.2 Fair Use</h3>
          <p>
            We believe our Service may qualify for fair use protections as it:
          </p>
          <ul>
            <li>Serves educational and non-commercial purposes</li>
            <li>Uses publicly available information</li>
            <li>Does not substitute for original works</li>
            <li>Encourages music discovery and appreciation</li>
          </ul>
        </Section>

        <Section>
          <h2>11. Termination</h2>
          <p>
            We may terminate or suspend your access to the Service immediately,
            without prior notice, for conduct that we believe:
          </p>
          <ul>
            <li>Violates these Terms</li>
            <li>Is harmful to other users or our Service</li>
            <li>Violates applicable laws</li>
            <li>Is otherwise objectionable</li>
          </ul>
          <p>
            Upon termination, your right to use the Service will cease
            immediately.
          </p>
        </Section>

        <Section>
          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. When we make
            changes, we will:
          </p>
          <ul>
            <li>Update the &quot;Last updated&quot; date</li>
            <li>Notify users through our website</li>
            <li>Provide reasonable notice for material changes</li>
          </ul>
          <p>
            Your continued use of the Service after any changes constitutes
            acceptance of the new Terms.
          </p>
        </Section>

        <Section>
          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            applicable laws, without regard to conflict of law principles. Any
            legal action related to these Terms shall be subject to the
            exclusive jurisdiction of competent courts.
          </p>
        </Section>

        <Section>
          <h2>14. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision will be limited or eliminated to the minimum
            extent necessary so that the remaining Terms will remain in full
            force and effect.
          </p>
        </Section>

        <Section>
          <h2>15. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{' '}
              <a href='mailto:legal@posterfy.art'>legal@posterfy.art</a>
            </li>
            <li>
              <strong>GitHub:</strong>{' '}
              <a
                href='https://github.com/avictormorais/posterfy/issues'
                target='_blank'
                rel='noopener noreferrer'
              >
                Open an issue
              </a>
            </li>
            <li>
              <strong>Website:</strong> <a href='/contact'>Contact page</a>
            </li>
          </ul>
        </Section>

        <Section>
          <h2>16. Acknowledgments</h2>
          <p>
            By using our Service, you acknowledge that you have read and
            understood these Terms of Service and agree to be bound by them. You
            also acknowledge that:
          </p>
          <ul>
            <li>This is a free, educational service</li>
            <li>All music content belongs to its respective owners</li>
            <li>Commercial use may require additional permissions</li>
            <li>You will use the Service responsibly and legally</li>
          </ul>
        </Section>
      </MainContent>
      <Footer />
    </Container>
  );
}
