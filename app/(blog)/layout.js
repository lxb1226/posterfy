import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function BlogLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='theme-color' content='#1DB954' />

        {/* Preconnect for Performance */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='anonymous'
        />

        {/* Favicon */}
        <link rel='icon' href='/ico.png' />
        <link rel='apple-touch-icon' href='/ico.png' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
