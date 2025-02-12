import type { Metadata } from 'next';

import localFont from 'next/font/local';

import './globals.css';
import { UIConfigProvider } from '@/context/UIConfigProvider';

const neueMontreal = localFont({
  src: [
    {
      path: './fonts/PPNeueMontreal-Thin.otf',
      weight: '300',
      style: 'thin',
    },
    {
      path: './fonts/PPNeueMontreal-Medium.otf',
      weight: '500',
      style: 'medium',
    },
    {
      path: './fonts/PPNeueMontreal-SemiBolditalic.otf',
      weight: '600',
      style: 'semibold',
    },

    {
      path: './fonts/PPNeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Afroofingand Sidinginc - Durable, Affordable Roofing Solutions',
  description:
    'Afroofingand Sidinginc provides top-rated roofing services in San Pablo, CA, including installations, repairs, and inspections. 500+ happy customers trust us for quality and reliability.',
  keywords: [
    'roofing services',
    'roof repairs',
    'roof installations',
    'San Pablo CA',
    'roof inspections',
    'Afroofingand Sidinginc',
    'affordable roofing',
    'durable roofs',
    'siding services',
  ],
  openGraph: {
    title: 'Afroofingand Sidinginc - Top Rated Roofing Experts in San Pablo CA',
    description:
      'Protect your home with durable and affordable roofing solutions. Afroofingand Sidinginc offers professional installations, repairs, and maintenance for homes in San Pablo, CA.',
    url: 'https://afroofingandsidinginc.com', // Update with your actual domain
    images: [
      {
        url: 'https://afroofingandsidinginc.com/og-image.jpg', // Update with your actual OG image URL
        width: 1200,
        height: 630,
        alt: 'Afroofingand Sidinginc Hero Image',
      },
    ],
    emails: 'info@afroofingandsidinginc.com',
    siteName: 'Afroofingand Sidinginc',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Afroofingand Sidinginc - Durable, Affordable Roofing Solutions',
    description:
      'Protecting your home with top-rated roofing services in San Pablo, CA. Reliable roof repairs, installations, and inspections you can count on.',
    images: ['https://afroofingandsidinginc.com/images/hero.jpg'], // Update with your actual hero image URL
  },

  icons: {
    icon: '/favicon.ico', // Update with your actual favicon path
    shortcut: '/favicon.ico', // Update with your actual favicon path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${neueMontreal.className} antialiased`}>
        <UIConfigProvider>{children}</UIConfigProvider>
      </body>
    </html>
  );
}
