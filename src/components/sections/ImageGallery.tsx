// src/components/sections/ImageGallery.tsx
'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  { src: '/images/gallery/grilled-fish.jpg', alt: 'דגים צלויים על הגריל' },
  { src: '/images/gallery/fresh-fish.jpg', alt: 'דגים טריים' },
  { src: '/images/gallery/baked-fish.jpg', alt: 'דגים אפויים' },
  { src: '/images/gallery/fried-fish.jpg', alt: 'דגים מטוגנים' },
  { src: '/images/gallery/raw-fish.jpg', alt: 'קרפצ\'יו דגים' },
  { src: '/images/gallery/family-cooking.jpg', alt: 'המטבח של ג׳קו' },
  { src: '/images/gallery/restaurant-view.jpg', alt: 'מבט על המסעדה' },
  { src: '/images/hero-bg.jpg', alt: 'אווירת המסעדה' },
]

const ImageGallery = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-primary mb-4">
            הגלריה שלנו
          </h2>
          <div className="w-24 h-1 bg-yellow-accent mx-auto"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient Overlay for better aesthetics */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg z-10 transition-all hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronRight size={24} className="text-blue-primary" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg z-10 transition-all hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronLeft size={24} className="text-blue-primary" />
          </button>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'w-8 bg-blue-primary'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
