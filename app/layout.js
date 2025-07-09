'use client';

import { Inter } from 'next/font/google';
import StyledComponentsRegistry from './lib/registry';
import '../src/index.css';
import '../src/i18n/i18n';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        {/* Basic Meta Tags */}
        <title>
          Posterfy - Create Stunning Album Posters | Spotify Powered
        </title>
        <meta
          name='description'
          content='Create beautiful, customizable posters of your favorite albums with Posterfy. Powered by Spotify API, generate high-quality album artwork posters instantly. Free online poster maker for music lovers.'
        />
        <meta
          name='keywords'
          content='album poster, spotify, music poster, album art, poster maker, music artwork, album cover, poster generator, spotify poster, music design'
        />
        <meta name='author' content='Posterfy Team' />
        <meta name='robots' content='index, follow' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='language' content='English' />
        <meta name='theme-color' content='#1DB954' />

        {/* Open Graph Meta Tags */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='Posterfy - Create Stunning Album Posters'
        />
        <meta
          property='og:description'
          content='Create beautiful, customizable posters of your favorite albums with Posterfy. Powered by Spotify API for instant high-quality results.'
        />
        <meta property='og:url' content='https://www.posterfy.art/' />
        <meta property='og:site_name' content='Posterfy' />
        <meta
          property='og:image'
          content='https://www.posterfy.art/og-image.svg'
        />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />
        <meta
          property='og:image:alt'
          content='Posterfy - Album Poster Generator'
        />
        <meta property='og:locale' content='en_US' />

        {/* Twitter Card Meta Tags */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Posterfy - Create Stunning Album Posters'
        />
        <meta
          name='twitter:description'
          content='Create beautiful, customizable posters of your favorite albums with Posterfy. Powered by Spotify API.'
        />
        <meta
          name='twitter:image'
          content='https://www.posterfy.art/og-image.svg'
        />
        <meta
          name='twitter:image:alt'
          content='Posterfy - Album Poster Generator'
        />
        <meta name='twitter:creator' content='@posterfy' />
        <meta name='twitter:site' content='@posterfy' />

        {/* Favicon and Icons */}
        <link rel='icon' href='/ico.png' />
        <link rel='apple-touch-icon' href='/ico.png' />
        <link rel='shortcut icon' href='/ico.png' />
        <link rel='manifest' href='/manifest.json' />

        {/* Apple Meta Tags */}
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='black-translucent'
        />
        <meta name='apple-mobile-web-app-title' content='Posterfy' />

        {/* Microsoft Meta Tags */}
        <meta name='msapplication-TileColor' content='#1DB954' />
        <meta name='msapplication-config' content='/browserconfig.xml' />

        {/* Canonical URL */}
        <link rel='canonical' href='https://www.posterfy.art/' />

        {/* Preconnect for Performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />
        <link rel='preconnect' href='https://i.scdn.co' />
        <link rel='preconnect' href='https://mosaic.scdn.co' />

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
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
