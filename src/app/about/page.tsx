// src/app/about/page.tsx
import {
  AboutHero,
  AboutStory,
  ValuesGrid,
  Timeline,
  Gallery
} from '@/components/sections/about'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AboutHero />

      {/* Story Section */}
      <section className="py-16 bg-blue-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <AboutStory />
            <ValuesGrid />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <Timeline />

      {/* Gallery */}
      <Gallery />
    </main>
  )
}