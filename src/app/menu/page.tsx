// src/app/menu/page.tsx
import { MenuHero, MenuContainer } from '@/components/sections/menu'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'התפריט',
  description: 'תפריט מסעדת ג׳קו - מבחר עשיר של דגים טריים, פירות ים, מנות ראשונות ומנות עיקריות. מאז 1973 מגישים את הטוב ביותר מהים.',
  openGraph: {
    title: 'תפריט מסעדת ג׳קו | דגים ופירות ים',
    description: 'גלו את תפריט מסעדת ג׳קו - מבחר עשיר של דגים טריים, פירות ים ומטעמים ים תיכוניים. כל המנות מוכנות מחומרי גלם טריים ואיכותיים.',
    url: '/menu',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: 'תפריט מסעדת ג׳קו - דגים ופירות ים',
      }
    ],
  },
  alternates: {
    canonical: '/menu',
  },
}

export default function MenuPage() {
  const menuJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    '@id': '/menu',
    name: 'תפריט מסעדת ג׳קו',
    description: 'תפריט מסעדת ג׳קו - דגים טריים ופירות ים',
    hasMenuSection: [
      {
        '@type': 'MenuSection',
        name: 'מנות ראשונות',
        hasMenuItem: []
      },
      {
        '@type': 'MenuSection',
        name: 'דגים',
        hasMenuItem: []
      },
      {
        '@type': 'MenuSection',
        name: 'פירות ים',
        hasMenuItem: []
      }
    ],
    inLanguage: 'he',
    publisher: {
      '@type': 'Restaurant',
      name: 'ג׳קו - מסעדת דגים ומאכלי ים'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(menuJsonLd)
        }}
      />
      <main className="min-h-screen bg-blue-secondary">
        {/* Hero Section */}
        <MenuHero />
        
        {/* Menu Content - Categories, Items, and Note */}
        <MenuContainer />
      </main>
    </>
  )
}