import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import ClientProviders from './components/ClientProviders';
import '../src/index.css';

const inter = Inter({ subsets: ['latin'] });

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  themeColor: '#1DB954',
};

export const metadata = {
  title: 'Posterfy - Create Stunning Album Posters | Spotify Powered',
  description:
    'Create beautiful, customizable posters of your favorite albums with Posterfy. Powered by Spotify API, generate high-quality album artwork posters instantly. Free online poster maker for music lovers.',
  keywords:
    'album poster, spotify, music poster, album art, poster maker, music artwork, album cover, poster generator, spotify poster, music design',
  authors: [{ name: 'Posterfy Team' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Posterfy - Create Stunning Album Posters',
    description:
      'Create beautiful, customizable posters of your favorite albums with Posterfy. Powered by Spotify API for instant high-quality results.',
    url: 'https://www.posterfy.art/',
    siteName: 'Posterfy',
    images: [
      {
        url: 'https://www.posterfy.art/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Posterfy - Album Poster Generator',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Posterfy - Create Stunning Album Posters',
    description:
      'Create beautiful, customizable posters of your favorite albums with Posterfy. Powered by Spotify API.',
    images: ['https://www.posterfy.art/og-image.svg'],
    creator: '@posterfy',
    site: '@posterfy',
  },
  icons: {
    icon: '/ico.png',
    apple: '/ico.png',
    shortcut: '/ico.png',
  },
  manifest: '/manifest.json',
  alternates: {
    canonical: 'https://www.posterfy.art/',
    languages: {
      en: 'https://www.posterfy.art/',
      pt: 'https://www.posterfy.art/?lang=pt',
      es: 'https://www.posterfy.art/?lang=es',
      'x-default': 'https://www.posterfy.art/',
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Additional meta tags */}
        <meta name='language' content='English' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta name='apple-mobile-web-app-title' content='Posterfy' />
        <meta name='msapplication-TileColor' content='#1DB954' />
        <meta name='msapplication-config' content='/browserconfig.xml' />

        {/* Preconnect for Performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://i.scdn.co' />
        <link rel='preconnect' href='https://mosaic.scdn.co' />
        <link rel='dns-prefetch' href='https://api.spotify.com' />
        <link rel='dns-prefetch' href='https://itunes.apple.com' />

        {/* Resource Hints for Performance */}
        <link rel='prefetch' href='/ico.png' as='image' />
        <link rel='prefetch' href='/og-image.svg' as='image' />

        {/* Structured Data - JSON-LD */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebApplication',
              name: 'Posterfy',
              description:
                'Create beautiful, customizable posters of your favorite albums with Posterfy. Powered by Spotify API.',
              url: 'https://www.posterfy.art/',
              applicationCategory: 'DesignApplication',
              operatingSystem: 'Web Browser',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              creator: {
                '@type': 'Organization',
                name: 'Posterfy Team',
              },
              featureList: [
                'Album poster generation',
                'Spotify API integration',
                'Customizable designs',
                'High-quality downloads',
                'Free to use',
              ],
              inLanguage: ['en', 'pt', 'es'],
              audience: {
                '@type': 'Audience',
                audienceType: 'Music lovers, designers, social media users',
              },
              keywords:
                'album poster, spotify, music poster, album art, poster maker, music artwork, album cover, poster generator',
            }),
          }}
        />

        {/* Additional Organization Structured Data */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Posterfy',
              url: 'https://www.posterfy.art/',
              logo: 'https://www.posterfy.art/ico.png',
              description: 'Album poster generator powered by Spotify API',
            }),
          }}
        />

        {/* Breadcrumb Structured Data for Home Page */}
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.posterfy.art/',
                },
              ],
            }),
          }}
        />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Umami Analytics */}
        {process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID &&
          process.env.NEXT_PUBLIC_UMAMI_SRC && (
            <script
              async
              src={process.env.NEXT_PUBLIC_UMAMI_SRC}
              data-website-id={process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
            />
          )}
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <ClientProviders>{children}</ClientProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
