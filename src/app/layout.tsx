// src/app/layout.tsx
import type { Metadata } from 'next'
import { Heebo } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

const heebo = Heebo({ 
  subsets: ['hebrew'],
  display: 'swap',
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://jacko.co.il'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'ג׳קו - מסעדת דגים ומאכלי ים | מאז 1973',
    template: '%s | ג׳קו - מסעדת דגים ומאכלי ים'
  },
  description: 'מסעדת דגים ומאכלי ים מובילה בנתניה. מאז 1973 מגישים את הטעמים האותנטיים של הים התיכון. מנות דגים טריים, פירות ים ומטעמים ים תיכוניים.',
  keywords: 'מסעדת דגים, מאכלי ים, נתניה, ג׳קו, jacko, seafood, restaurant, דגים טריים, פירות ים, מסעדה בנתניה, אוכל ים תיכוני',
  authors: [{ name: 'Jacko Restaurant' }],
  creator: 'Jacko Restaurant',
  publisher: 'Jacko Restaurant',
  
  openGraph: {
    type: 'website',
    title: 'ג׳קו - מסעדת דגים ומאכלי ים | מאז 1973',
    description: 'מסעדת דגים ומאכלי ים מובילה בנתניה. מאז 1973 מגישים את הטעמים האותנטיים של הים התיכון.',
    url: baseUrl,
    siteName: 'ג׳קו - מסעדת דגים ומאכלי ים',
    locale: 'he_IL',
    images: [
      {
        url: '/images/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'ג׳קו - מסעדת דגים ומאכלי ים בנתניה',
        type: 'image/webp',
      },
      {
        url: '/images/logo.webp',
        width: 800,
        height: 800,
        alt: 'לוגו ג׳קו',
        type: 'image/webp',
      }
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'ג׳קו - מסעדת דגים ומאכלי ים | מאז 1973',
    description: 'מסעדת דגים ומאכלי ים מובילה בנתניה. מאז 1973 מגישים את הטעמים האותנטיים של הים התיכון.',
    images: ['/images/og-image.webp'],
    creator: '@jackonetanya', // Update with actual Twitter handle
    site: '@jackonetanya', // Update with actual Twitter handle
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: baseUrl,
    languages: {
      'he-IL': baseUrl,
    },
  },
  
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
        color: '#0066cc'
      }
    ]
  },
  
  manifest: '/manifest.json',
  
  // Additional metadata
  applicationName: 'ג׳קו - מסעדת דגים ומאכלי ים',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  other: {
    'msapplication-TileColor': '#0066cc',
    'msapplication-TileImage': '/images/logo.webp',
    'theme-color': '#0066cc',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const restaurantJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': baseUrl,
    name: 'ג׳קו - מסעדת דגים ומאכלי ים',
    image: [
      `${baseUrl}/images/og-image.webp`,
      `${baseUrl}/images/logo.webp`
    ],
    url: baseUrl,
    telephone: '+972-9-8652878',
    priceRange: '₪₪₪',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'גיבורי ישראל 7',
      addressLocality: 'נתניה',
      addressRegion: 'מרכז',
      postalCode: '42400',
      addressCountry: 'IL'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.3292,
      longitude: 34.8554
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '12:00',
        closes: '22:30'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '12:00',
        closes: '23:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '12:00',
        closes: '22:30'
      }
    ],
    servesCuisine: ['Seafood', 'Mediterranean', 'Israeli'],
    acceptsReservations: 'true',
    menu: `${baseUrl}/menu`,
    description: 'מסעדת דגים ומאכלי ים מובילה בנתניה. מאז 1973 מגישים את הטעמים האותנטיים של הים התיכון.',
    foundingDate: '1973',
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/images/logo.webp`
    },
    sameAs: [
      'https://www.facebook.com/jako.rest/',
      'https://www.instagram.com/jacko_netanya/',
      'https://www.tiktok.com/@jackonetanya',
      'https://maps.app.goo.gl/NqtGsjewHd5kpeTG8'
    ]
  }

  return (
    <html lang="he" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd)
          }}
        />
      </head>
      <body className={`${heebo.className} bg-white text-black min-h-screen flex flex-col`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}