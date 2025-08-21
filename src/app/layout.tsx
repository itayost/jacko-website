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

export const metadata: Metadata = {
  title: 'ג׳קו - מסעדת דגים ומאכלי ים | מאז 1973',
  description: 'מסעדת דגים ומאכלי ים מובילה בנתניה. מאז 1973 מגישים את הטעמים האותנטיים של הים התיכון.',
  keywords: 'מסעדת דגים, מאכלי ים, נתניה, ג׳קו, jacko, seafood, restaurant',
  openGraph: {
    title: 'ג׳קו - מסעדת דגים ומאכלי ים',
    description: 'מסעדת דגים ומאכלי ים מובילה בנתניה מאז 1973',
    locale: 'he_IL',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl">
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