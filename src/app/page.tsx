// src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection'
import Features from '@/components/sections/Features'
import MenuPreview from '@/components/sections/MenuPreview'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Features />
      <MenuPreview />
      <Contact />
    </main>
  )
}