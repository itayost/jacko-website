// src/app/menu/page.tsx
import { MenuHero, MenuContainer } from '@/components/sections/menu'
import { menuData, menuCategories } from '@/data/menu'
import type { MenuData } from '@/types/menu'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'התפריט',
  description: 'תפריט מסעדת ג׳קו - מבחר עשיר של דגים טריים, פירות ים, בשרים, קינוחים, יינות ואלכוהול. מאז 1973 מגישים את הטוב ביותר מהים.',
  openGraph: {
    title: 'תפריט מסעדת ג׳קו | דגים ופירות ים',
    description: 'גלו את תפריט מסעדת ג׳קו - מבחר עשיר של דגים טריים, פירות ים, בשרים, קינוחים ומשקאות. כל המנות מוכנות מחומרי גלם טריים ואיכותיים.',
    url: '/menu',
    type: 'website',
    images: [
      {
        url: '/images/hero-bg.webp',
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
    description: 'תפריט מסעדת ג׳קו - דגים טריים, פירות ים, בשרים, קינוחים ומשקאות',
    hasMenuSection: (Object.keys(menuData) as (keyof MenuData)[]).map(key => {
      const cat = menuCategories.find(c => c.id === key)
      return {
        '@type': 'MenuSection',
        name: cat?.name ?? key,
        hasMenuItem: menuData[key].map(item => ({
          '@type': 'MenuItem',
          name: item.name,
          offers: {
            '@type': 'Offer',
            price: item.price,
            priceCurrency: 'ILS',
          },
          ...(item.description ? { description: item.description } : {}),
        })),
      }
    }),
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
      <main className="min-h-screen bg-blue-primary">
        {/* Hero Section */}
        <MenuHero />

        {/* Menu Content - Categories, Items, and Note */}
        <MenuContainer />
      </main>
    </>
  )
}
