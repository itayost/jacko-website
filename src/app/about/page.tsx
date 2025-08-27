// src/app/about/page.tsx
'use client'

import { motion } from 'framer-motion'
import StoryWithGallery from '@/components/sections/about/StoryWithGallery'
import { AboutHero } from '@/components/sections/about'
import { aboutSections} from '@/data/about'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />

      {/* Story Sections with Integrated Galleries */}
      {aboutSections.map((section, index) => (
        <StoryWithGallery
          key={section.id}
          section={section}
          index={index}
        />
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-blue-primary to-blue-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              בואו להיות חלק מהסיפור שלנו
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              אנחנו מזמינים אתכם לחוות את המסורת, הטעמים והאווירה המיוחדת שלנו
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/menu"
                className="inline-block px-8 py-3 bg-yellow-accent text-black font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                צפו בתפריט
              </a>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-white text-blue-primary font-bold rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                הזמינו שולחן
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}