// src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection'
import Features from '@/components/sections/Features'
import ParallaxImage from '@/components/sections/ParallaxImage'
import MenuPreview from '@/components/sections/MenuPreview'
import GalleryPreview from '@/components/sections/GalleryPreview'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen space-y-2 bg-white">
      <HeroSection />
      <Features />
      <ParallaxImage />
      <MenuPreview />
      <GalleryPreview />
      <Contact />
    </main>
  )
}