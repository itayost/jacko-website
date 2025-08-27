// src/components/sections/about/StoryWithGallery.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import type { AboutSection } from '@/data/about'
import Lightbox from './Lightbox'

interface StoryWithGalleryProps {
  section: AboutSection
  index: number
}

export default function StoryWithGallery({ section, index }: StoryWithGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const isEven = index % 2 === 0

  const openLightbox = (imageIndex: number) => {
    setSelectedImage(imageIndex)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % section.images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + section.images.length) % section.images.length)
    }
  }

  // Layout variations based on section.layout
  const renderLayout = () => {
    switch (section.layout) {
      case 'left':
        return (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Images on left - Mobile: vertical animation, Desktop: horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                x: 0 
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {section.images.map((image, imgIndex) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + imgIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`
                      relative cursor-pointer group overflow-hidden rounded-xl
                      ${imgIndex === 0 && section.images.length === 2 ? 'col-span-2 aspect-video' : 'aspect-square'}
                      ${section.images.length === 3 && imgIndex === 0 ? 'col-span-2 aspect-video' : ''}
                    `}
                    onClick={() => openLightbox(imgIndex)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {image.caption && (
                      <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                        {image.caption}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Text on right - Mobile: vertical animation, Desktop: horizontal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                x: 0
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-accent mb-6">
                {section.title}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>
          </div>
        )

      case 'right':
        return (
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text on left - Mobile: vertical animation only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                x: 0
              }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-accent mb-6">
                {section.title}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>

            {/* Images on right - Mobile: vertical animation only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                x: 0
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {section.images.map((image, imgIndex) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + imgIndex * 0.1 }}
                    viewport={{ once: true }}
                    className={`
                      relative cursor-pointer group overflow-hidden rounded-xl
                      ${imgIndex === 0 && section.images.length === 2 ? 'col-span-2 aspect-video' : 'aspect-square'}
                      ${section.images.length === 3 && imgIndex === 2 ? 'col-span-2 aspect-video' : ''}
                    `}
                    onClick={() => openLightbox(imgIndex)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {image.caption && (
                      <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                        {image.caption}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )

      case 'grid':
        return (
          <div>
            {/* Text centered - Only vertical animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-8"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-accent mb-6">
                {section.title}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>

            {/* Images in grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {section.images.map((image, imgIndex) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + imgIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-square cursor-pointer group overflow-hidden rounded-xl"
                  onClick={() => openLightbox(imgIndex)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {image.caption && (
                    <p className="absolute bottom-3 left-3 right-3 text-white text-xs lg:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                      {image.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        )

      case 'full':
      default:
        return (
          <div>
            {/* Text centered - Only vertical animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto mb-10"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-yellow-accent mb-6">
                {section.title}
              </h2>
              <p className="text-lg lg:text-xl leading-relaxed text-white/90 whitespace-pre-line">
                {section.content}
              </p>
            </motion.div>

            {/* Images in masonry-like grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {section.images.map((image, imgIndex) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + imgIndex * 0.1 }}
                  viewport={{ once: true }}
                  className={`
                    relative cursor-pointer group overflow-hidden rounded-xl
                    ${imgIndex === 0 ? 'lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-auto' : 'aspect-square'}
                  `}
                  onClick={() => openLightbox(imgIndex)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {image.caption && (
                    <p className="absolute bottom-3 left-3 right-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">
                      {image.caption}
                    </p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        )
    }
  }

  return (
    <>
      <section className="py-16 lg:py-24 overflow-x-hidden bg-blue-secondary">
        <div className="container mx-auto px-4">
          {renderLayout()}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <Lightbox
          images={section.images.map(img => ({
            id: 0,
            src: img.src,
            alt: img.alt,
            category: 'story'
          }))}
          selectedIndex={selectedImage}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </>
  )
}