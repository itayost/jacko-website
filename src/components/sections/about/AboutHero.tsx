// src/components/sections/about/AboutHero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface AboutHeroProps {
  backgroundImage?: string
  title?: string
  subtitle?: string
}

export default function AboutHero({ 
  backgroundImage = '/images/hero/about-hero.jpg',
  title = 'הסיפור שלנו',
  subtitle = 'מסורת של איכות, טעם וחוויה קולינרית מאז 1973'
}: AboutHeroProps) {
  return (
    <section className="relative h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="About Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        {/* Overall darkening overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Bottom gradient - matching the home hero style */}
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-blue-primary via-blue-primary/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            {title}
          </h1>
          <div className="w-24 h-1 bg-yellow-accent mx-auto mb-4" />
          <p className="text-xl md:text-2xl text-white max-w-2xl mx-auto drop-shadow-lg">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}