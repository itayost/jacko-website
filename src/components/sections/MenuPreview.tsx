// src/components/sections/MenuPreview.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const preparations = [
  {
    image: '/images/gallery/grilled-fish.jpg',
    title: 'צלוי על הגריל',
    description: 'דגים שלמים או פילה על אש חיה, עם סימני צריבה מושלמים וטעם מעושן עדין'
  },
  {
    image: '/images/gallery/baked-fish.jpg',
    title: 'אפוי בתנור',
    description: 'אפייה איטית עם עשבי תיבול, שמן זית ותבלינים ים תיכוניים'
  },
  {
    image: '/images/gallery/fried-fish.jpg',
    title: 'מטוגן פריך',
    description: 'ציפוי זהוב ופריך מבחוץ, עסיסי ורך מבפנים, מוגש עם רטבים מיוחדים'
  },
  {
    image: '/images/gallery/raw-fish.jpg',
    title: 'נא וכבוש',
    description: 'קרפצ׳יו, סביצ׳ה וטרטר - לאוהבי הטעמים הטריים והעדינים'
  }
]

const MenuPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // In RTL, "next" goes to the left (decreases index)
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? preparations.length - 1 : prevIndex - 1
    )
  }

  // In RTL, "prev" goes to the right (increases index)
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === preparations.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <section className="py-20 bg-blue-primary" id="menu">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
             אז איך אתם אוהבים את הדג שלכם?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            בחרו את שיטת ההכנה המועדפת עליכם וגלו את המנות המושלמות בשבילכם
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {preparations.map((prep, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href="/menu">
                <div className="relative h-[350px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer">
                  {/* Full Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={prep.image}
                      alt={prep.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0">
                    {/* Subtle darkening */}
                    <div className="absolute inset-0 bg-black/20" />
                    
                    {/* Bottom gradient */}
                    <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-blue-secondary via-blue-primary/80 to-transparent" />
                  </div>
                  
                  {/* Content positioned at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                      {prep.title}
                    </h3>
                    <p className="text-white/90 text-sm leading-relaxed drop-shadow">
                      {prep.description}
                    </p>
                  </div>
                  
                  {/* Bottom Accent Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-20" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel - RTL Version */}
        <div className="md:hidden relative mb-12" dir="rtl">
          <div className="relative overflow-hidden rounded-2xl mx-4" ref={carouselRef}>
            <div className="relative h-[400px] w-full">
              {/* All Slides Positioned Absolutely - RTL Animation */}
              {preparations.map((prep, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0 w-full h-full"
                  initial={false}
                  animate={{
                    x: `${-(index - currentIndex) * 100}%`, // Negative for RTL
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <Link href="/menu">
                    <div className="relative h-full w-full">
                      {/* Full Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={prep.image}
                          alt={prep.title}
                          fill
                          className="object-cover"
                          sizes="100vw"
                          priority={index === 0}
                        />
                      </div>
                      
                      {/* Gradient Overlays */}
                      <div className="absolute inset-0">
                        {/* Subtle darkening */}
                        <div className="absolute inset-0 bg-black/20" />
                        
                        {/* Bottom gradient */}
                        <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-blue-secondary via-blue-primary/80 to-transparent" />
                      </div>
                      
                      {/* Content positioned at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10" dir="rtl">
                        <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg text-right">
                          {prep.title}
                        </h3>
                        <p className="text-white/90 text-base leading-relaxed drop-shadow text-right">
                          {prep.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Carousel Controls - Swapped for RTL */}
          <button
            onClick={prevSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg z-10 transition-all"
            aria-label="Previous slide"
          >
            <ChevronRight size={24} className="text-blue-primary" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg z-10 transition-all"
            aria-label="Next slide"
          >
            <ChevronLeft size={24} className="text-blue-primary" />
          </button>
          
          {/* Carousel Indicators - RTL Order */}
          <div className="flex justify-center gap-2 mt-6 flex-row-reverse">
            {preparations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'w-8 bg-yellow-accent' 
                    : 'w-2 bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-white/80 mb-6">
            לא יכולים להחליט? אנחנו כאן כדי לעזור!
          </p>
          <Link
            href="/menu"
            className="inline-block bg-white text-blue-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            גלו את התפריט המלא
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default MenuPreview