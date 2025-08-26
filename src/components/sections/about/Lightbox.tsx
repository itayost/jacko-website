// src/components/sections/about/Lightbox.tsx
'use client'

import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '@/types/about'

interface LightboxProps {
  images: GalleryImage[]
  selectedIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ images, selectedIndex, onClose, onNext, onPrev }: LightboxProps) {
  const currentImage = images[selectedIndex]

  if (!currentImage) return null

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors z-50"
        aria-label="סגור"
      >
        <X size={32} />
      </button>
      
      <button
        onClick={(e) => { 
          e.stopPropagation()
          onPrev() 
        }}
        className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
        aria-label="תמונה קודמת"
      >
        <ChevronRight size={32} />
      </button>
      
      <button
        onClick={(e) => { 
          e.stopPropagation()
          onNext() 
        }}
        className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
        aria-label="תמונה הבאה"
      >
        <ChevronLeft size={32} />
      </button>
      
      <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          className="object-contain"
          sizes="100vw"
        />
      </div>
    </div>
  )
}