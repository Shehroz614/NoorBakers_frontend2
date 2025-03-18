import type { Metadata } from 'next';

const defaultMetadata: Metadata = {
  title: {
    default: 'Noor Bakers - Artisanal Bakery & Confectionery',
    template: '%s | Noor Bakers'
  },
  description: 'Experience the finest artisanal breads, pastries, and cakes at Noor Bakers. Fresh, delicious, and baked with love.',
  keywords: [
    'bakery',
    'artisanal bread',
    'pastries',
    'cakes',
    'fresh baked goods',
    'custom cakes',
    'wedding cakes',
    'sourdough',
    'croissants',
    'New York bakery'
  ],
  authors: [{ name: 'Noor Bakers' }],
  creator: 'Noor Bakers',
  publisher: 'Noor Bakers',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://noorbakers.com',
    siteName: 'Noor Bakers',
    title: 'Noor Bakers - Artisanal Bakery & Confectionery',
    description: 'Experience the finest artisanal breads, pastries, and cakes at Noor Bakers. Fresh, delicious, and baked with love.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Noor Bakers - Artisanal Bakery & Confectionery'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noor Bakers - Artisanal Bakery & Confectionery',
    description: 'Experience the finest artisanal breads, pastries, and cakes at Noor Bakers. Fresh, delicious, and baked with love.',
    images: ['/images/twitter-image.jpg']
  },
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  }
};

export default defaultMetadata; 