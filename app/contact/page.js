'use client';

import { useEffect } from 'react';
import styled from 'styled-components';
import {
  FaGithub,
  FaEnvelope,
  FaBug,
  FaLightbulb,
  FaQuestionCircle,
  FaShieldAlt,
} from 'react-icons/fa';
import { MdFeedback, MdBusiness, MdHelp } from 'react-icons/md';
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const ContactCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(29, 185, 84, 0.3);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }

  .icon {
    font-size: 3rem;
    color: #1db954;
    margin-bottom: 1.5rem;
  }

  h3 {
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
    margin-bottom: 1.5rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  .action-button {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #1db954, #1aa34a);
    color: white;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(29, 185, 84, 0.4);
      color: white;
    }

    svg {
      font-size: 1.1rem;
    }
  }

  .secondary-button {
    background: rgba(255, 255, 255, 0.1);
    color: #1db954;

    &:hover {
      background: rgba(255, 255, 255, 0.15);
      color: #1db954;
    }
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

  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    text-align: center;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  ul {
    max-width: 600px;
    margin: 0 auto;

    li {
      margin-bottom: 0.8rem;
      font-size: 1.05rem;
    }
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

const ResponseTimeCard = styled.div`
  background: rgba(29, 185, 84, 0.1);
  border: 1px solid rgba(29, 185, 84, 0.2);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem auto;
  max-width: 600px;
  text-align: center;

  h3 {
    color: #1db954;
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }

  p {
    color: #ccc;
    margin-bottom: 0;
    font-size: 0.95rem;
  }
`;

const FAQLink = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem auto;
  max-width: 600px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  h3 {
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    color: #ccc;
    margin-bottom: 1.5rem;
  }

  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: rgba(29, 185, 84, 0.2);
    color: #1db954;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 500;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(29, 185, 84, 0.3);
      transform: translateY(-2px);
      color: #1db954;
    }
  }
`;

export default function ContactPage() {
  useEffect(() => {
    // Update SEO meta tags
    document.title = 'Contact Us | Posterfy - Get Help & Support';

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Get in touch with the Posterfy team. Find support for technical issues, report bugs, request features, or ask questions about our album poster creation tool.'
      );
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', 'https://www.posterfy.art/contact');
    }

    // Add structured data
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact Posterfy',
      description:
        'Get in touch with the Posterfy team for support and inquiries',
      url: 'https://www.posterfy.art/contact',
      mainEntity: {
        '@type': 'Organization',
        name: 'Posterfy',
        url: 'https://www.posterfy.art',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'Technical Support',
            url: 'https://github.com/avictormorais/posterfy/issues',
          },
          {
            '@type': 'ContactPoint',
            contactType: 'General Inquiries',
            email: 'contact@posterfy.art',
          },
          {
            '@type': 'ContactPoint',
            contactType: 'Privacy Concerns',
            email: 'privacy@posterfy.art',
          },
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
            name: 'Contact',
            item: 'https://www.posterfy.art/contact',
          },
        ],
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(structuredData);
    script.id = 'contact-structured-data';
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.getElementById('contact-structured-data');
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
          <Title>Contact Us</Title>
          <Subtitle>
            We&apos;re here to help! Choose the best way to reach us based on
            your needs.
          </Subtitle>
        </Hero>

        <Section>
          <h2>How Can We Help?</h2>
          <p>
            Whether you&apos;re experiencing technical difficulties, have a
            brilliant feature idea, or just want to say hello, we&apos;d love to
            hear from you. Choose the contact method that best fits your
            inquiry.
          </p>
        </Section>

        <ContactGrid>
          <ContactCard>
            <FaBug className='icon' />
            <h3>Report a Bug</h3>
            <p>
              Found something that&apos;s not working as expected? Help us
              improve Posterfy by reporting bugs and technical issues.
            </p>
            <a
              href='https://github.com/avictormorais/posterfy/issues/new?template=bug_report.md'
              target='_blank'
              rel='noopener noreferrer'
              className='action-button'
            >
              <FaGithub />
              Report Bug
            </a>
          </ContactCard>

          <ContactCard>
            <FaLightbulb className='icon' />
            <h3>Request a Feature</h3>
            <p>
              Have an idea that could make Posterfy even better? We&apos;d love
              to hear your feature suggestions and improvements.
            </p>
            <a
              href='https://github.com/avictormorais/posterfy/issues/new?template=feature_request.md'
              target='_blank'
              rel='noopener noreferrer'
              className='action-button'
            >
              <FaLightbulb />
              Suggest Feature
            </a>
          </ContactCard>

          <ContactCard>
            <MdFeedback className='icon' />
            <h3>General Feedback</h3>
            <p>
              Share your thoughts, experiences, or general feedback about
              Posterfy. We value all user input and suggestions.
            </p>
            <a
              href='https://github.com/avictormorais/posterfy/discussions'
              target='_blank'
              rel='noopener noreferrer'
              className='action-button'
            >
              <MdFeedback />
              Start Discussion
            </a>
          </ContactCard>

          <ContactCard>
            <FaQuestionCircle className='icon' />
            <h3>Get Help</h3>
            <p>
              Need help using Posterfy? Check our FAQ first, or reach out if you
              can&apos;t find the answer you&apos;re looking for.
            </p>
            <a href='/#faq' className='action-button'>
              <MdHelp />
              View FAQ
            </a>
          </ContactCard>

          <ContactCard>
            <FaShieldAlt className='icon' />
            <h3>Privacy & Security</h3>
            <p>
              Have questions about privacy, data handling, or security? We take
              these concerns seriously and respond promptly.
            </p>
            <a href='mailto:privacy@posterfy.art' className='action-button'>
              <FaEnvelope />
              Email Privacy Team
            </a>
          </ContactCard>

          <ContactCard>
            <MdBusiness className='icon' />
            <h3>General Inquiries</h3>
            <p>
              For partnerships, media inquiries, or other general questions that
              don&apos;t fit the above categories.
            </p>
            <a href='mailto:contact@posterfy.art' className='action-button'>
              <FaEnvelope />
              Send Email
            </a>
          </ContactCard>
        </ContactGrid>

        <Section>
          <h2>Before You Contact Us</h2>
          <FAQLink>
            <h3>Check Our FAQ First</h3>
            <p>
              Many common questions are already answered in our FAQ section. You
              might find the solution you need right away!
            </p>
            <a href='/#faq'>
              <FaQuestionCircle />
              Browse FAQ
            </a>
          </FAQLink>
        </Section>

        <Section>
          <h2>What to Include</h2>
          <p>
            To help us assist you more effectively, please include the following
            information when contacting us:
          </p>
          <ul>
            <li>
              <strong>For Bug Reports:</strong> Steps to reproduce, expected
              behavior, actual behavior, browser/device info
            </li>
            <li>
              <strong>For Feature Requests:</strong> Detailed description, use
              case, potential benefits
            </li>
            <li>
              <strong>For General Help:</strong> Specific question or issue,
              what you&apos;ve already tried
            </li>
            <li>
              <strong>For Privacy Concerns:</strong> Specific data or privacy
              issue you&apos;re concerned about
            </li>
          </ul>
        </Section>

        <ResponseTimeCard>
          <h3>🕐 Response Times</h3>
          <p>
            <strong>GitHub Issues & Discussions:</strong> Usually within 24-48
            hours
            <br />
            <strong>Email Inquiries:</strong> Within 2-3 business days
            <br />
            <strong>Privacy Concerns:</strong> Within 24 hours
          </p>
        </ResponseTimeCard>

        <Section>
          <h2>Community Guidelines</h2>
          <p>
            When reaching out to us, please help us maintain a positive and
            productive community by:
          </p>
          <ul>
            <li>
              <strong>Being Respectful:</strong> Treat everyone with courtesy
              and professionalism
            </li>
            <li>
              <strong>Being Clear:</strong> Provide specific details and context
              for your inquiry
            </li>
            <li>
              <strong>Being Patient:</strong> We&apos;re a small team and
              appreciate your understanding
            </li>
            <li>
              <strong>Being Constructive:</strong> Focus on solutions and
              improvements
            </li>
            <li>
              <strong>Searching First:</strong> Check existing issues and
              discussions before creating new ones
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Open Source Contributions</h2>
          <p>
            Interested in contributing to Posterfy? We welcome contributions
            from developers, designers, and enthusiasts of all skill levels:
          </p>
          <ul>
            <li>
              <strong>Code Contributions:</strong> Bug fixes, new features,
              performance improvements
            </li>
            <li>
              <strong>Design Contributions:</strong> UI/UX improvements, design
              assets, mockups
            </li>
            <li>
              <strong>Documentation:</strong> Help improve our docs, tutorials,
              and guides
            </li>
            <li>
              <strong>Testing:</strong> Help us test new features and report
              issues
            </li>
            <li>
              <strong>Translation:</strong> Help us make Posterfy available in
              more languages
            </li>
          </ul>
          <p>
            Check out our{' '}
            <a
              href='https://github.com/avictormorais/posterfy'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub repository
            </a>{' '}
            to get started!
          </p>
        </Section>

        <Section>
          <h2>Stay Connected</h2>
          <p>
            Follow our development progress and stay updated with the latest
            features:
          </p>
          <ul>
            <li>
              <strong>GitHub:</strong>{' '}
              <a
                href='https://github.com/avictormorais/posterfy'
                target='_blank'
                rel='noopener noreferrer'
              >
                @avictormorais/posterfy
              </a>
            </li>
            <li>
              <strong>Blog:</strong> <a href='/blog'>Posterfy Blog</a> for
              updates and tutorials
            </li>
            <li>
              <strong>Changelog:</strong> Track our progress and new releases
            </li>
          </ul>
        </Section>

        <Section>
          <h2>Alternative Contact Methods</h2>
          <p>
            If the above methods don&apos;t work for you, here are some
            additional ways to get in touch:
          </p>
          <ul>
            <li>
              <strong>GitHub Profile:</strong> Message{' '}
              <a
                href='https://github.com/avictormorais'
                target='_blank'
                rel='noopener noreferrer'
              >
                @avictormorais
              </a>{' '}
              directly
            </li>
            <li>
              <strong>Project Wiki:</strong> Check our{' '}
              <a
                href='https://github.com/avictormorais/posterfy/wiki'
                target='_blank'
                rel='noopener noreferrer'
              >
                documentation wiki
              </a>
            </li>
            <li>
              <strong>Community Forum:</strong> Join discussions in our{' '}
              <a
                href='https://github.com/avictormorais/posterfy/discussions'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub Discussions
              </a>
            </li>
          </ul>
        </Section>
      </MainContent>
      <Footer />
    </Container>
  );
}
