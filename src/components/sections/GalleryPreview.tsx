// src/components/sections/GalleryPreview.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState, useEffect } from 'react'

const galleryImages = [
  '/images/gallery/grilled-fish.webp',
  '/images/gallery/fresh-fish.webp',
  '/images/gallery/baked-fish.webp',
  '/images/gallery/fried-fish.webp',
  '/images/gallery/restaurant-view.webp',
  '/images/gallery/family-cooking.webp',
  '/images/gallery/raw-fish.webp',
  '/images/hero-bg.webp'
]

const GalleryPreview = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const children = container.firstElementChild?.children
    if (!children || children.length === 0) return

    // Use Intersection Observer to track which image is most visible
    const observerOptions = {
      root: container,
      threshold: 0.5, // Trigger when 50% of the image is visible
      rootMargin: '0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const index = Array.from(children).indexOf(entry.target)
          if (index !== -1) {
            setActiveIndex(index)
          }
        }
      })
    }, observerOptions)

    // Observe all image elements
    Array.from(children).forEach((child) => {
      observer.observe(child)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  const scrollToImage = (index: number) => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const children = container.firstElementChild?.children
    if (!children) return

    const targetChild = children[index] as HTMLElement
    if (!targetChild) return

    // Scroll the target image into view
    targetChild.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
  }

  return (
    <section className="bg-white relative" id="gallery">
      {/* Gallery Horizontal Scroll */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar"
      >
        <div className="flex gap-2">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative w-[300px] md:w-[350px] h-[300px] md:h-[350px] flex-shrink-0 overflow-hidden group cursor-pointer"
            >
              <Image
                src={image}
                alt={`גלריית ג'קו ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center gap-2 py-6" dir="rtl">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToImage(index)}
            className={`transition-all duration-300 ${
              activeIndex === index
                ? 'w-8 h-3 bg-blue-primary'
                : 'w-3 h-3 bg-blue-primary/40 hover:bg-blue-primary/60'
            }`}
            aria-label={`עבור לתמונה ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default GalleryPreview
