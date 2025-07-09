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
        <title>Posterfy</title>
        <meta
          name='description'
          content="Create stunning posters of your favorite albums powered by Spotify's API."
        />
        <link rel='icon' href='/ico.png' />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
