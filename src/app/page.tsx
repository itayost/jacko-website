// src/app/page.tsx
import HeroSection from '@/components/sections/HeroSection'
import StorySection from '@/components/sections/StorySection'
import Features from '@/components/sections/Features'
import MenuPreview from '@/components/sections/MenuPreview'
import ImageGallery from '@/components/sections/ImageGallery'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <StorySection />
      <Features />
      <MenuPreview />
      <ImageGallery />
      <Contact />
    </main>
  )
}