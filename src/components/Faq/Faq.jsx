import styled from 'styled-components';
import Anchor from '../Anchor';
import Question from './Question';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Container = styled.div`
  width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

const Questions = styled.div`
  width: 80%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
`;

function Faq() {
  const { t } = useTranslation();

  // Add FAQ structured data for SEO
  useEffect(() => {
    const faqStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: t('FAQ_HowItWorks_Question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('FAQ_HowItWorks_Answer'),
          },
        },
        {
          '@type': 'Question',
          name: t('FAQ_Affiliation_Question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('FAQ_Affiliation_Answer'),
          },
        },
        {
          '@type': 'Question',
          name: t('FAQ_AlbumSearch_Question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('FAQ_AlbumSearch_Answer'),
          },
        },
        {
          '@type': 'Question',
          name: t('FAQ_SaveData_Question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('FAQ_SaveData_Answer'),
          },
        },
        {
          '@type': 'Question',
          name: t('FAQ_ReportIssue_Question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('FAQ_ReportIssue_Answer'),
          },
        },
      ],
    };

    // Add FAQ structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(faqStructuredData);
    script.id = 'faq-structured-data';

    // Remove existing FAQ structured data if present
    const existingScript = document.getElementById('faq-structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      const scriptToRemove = document.getElementById('faq-structured-data');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [t]);

  return (
    <Container>
      <Anchor text={'Faq'} type={1} />
      <Questions>
        <Question
          q={t('FAQ_HowItWorks_Question')}
          a={t('FAQ_HowItWorks_Answer')}
        />
        <Question
          q={t('FAQ_Affiliation_Question')}
          a={t('FAQ_Affiliation_Answer')}
        />
        <Question
          q={t('FAQ_AlbumSearch_Question')}
          a={t('FAQ_AlbumSearch_Answer')}
        />
        <Question q={t('FAQ_SaveData_Question')} a={t('FAQ_SaveData_Answer')} />
        <Question
          q={t('FAQ_ReportIssue_Question')}
          a={t('FAQ_ReportIssue_Answer')}
        />
      </Questions>
    </Container>
  );
}

export default Faq;
