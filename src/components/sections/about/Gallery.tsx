// src/components/sections/about/Gallery.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Lightbox from './Lightbox'
import type { GalleryImage } from '@/types/about'

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery/dish-1.jpg', alt: 'מנת דג מעולה', category: 'food' },
  { id: 2, src: '/images/gallery/dish-2.jpg', alt: 'פלטת פירות ים', category: 'food' },
  { id: 3, src: '/images/gallery/dish-3.jpg', alt: 'לברק בגריל', category: 'food' },
  { id: 4, src: '/images/gallery/dish-4.jpg', alt: 'קינוח מיוחד', category: 'food' },
  { id: 5, src: '/images/gallery/dish-5.jpg', alt: 'סלט פירות ים', category: 'food' },
  { id: 6, src: '/images/gallery/dish-6.jpg', alt: 'מנת דג צלוי', category: 'food' },
  { id: 7, src: '/images/gallery/dish-7.jpg', alt: 'מנה מיוחדת', category: 'food' },
  { id: 8, src: '/images/gallery/dish-8.jpg', alt: 'מבחר דגים', category: 'food' },
  { id: 9, src: '/images/gallery/restaurant-view.jpg', alt: 'חלל המסעדה', category: 'restaurant' },
  { id: 10, src: '/images/gallery/family-cooking.jpg', alt: 'המטבח שלנו', category: 'team' },
  { id: 11, src: '/images/gallery/fresh-fish.jpg', alt: 'דגים טריים', category: 'food' },
]

const categories = [
  { id: 'all', label: 'הכל' },
  { id: 'food', label: 'מנות' },
  { id: 'restaurant', label: 'המסעדה' },
  { id: 'team', label: 'הצוות' }
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <section className="py-16 bg-blue-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">גלריה</h2>
          <p className="text-lg text-white/80 mb-8">רגעים וטעמים מהמסעדה שלנו</p>
          
          {/* Category Filter */}
          <div className="flex justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-yellow-accent text-black shadow-lg'
                    : 'bg-white/90 text-blue-primary hover:bg-white'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => openLightbox(index)}
              className="relative aspect-square bg-white/10 rounded-2xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <p className="absolute bottom-4 right-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 drop-shadow-lg">
                {image.alt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <Lightbox
          images={filteredImages}
          selectedIndex={selectedImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </section>
  )
}