// src/components/sections/menu/MenuHero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface MenuHeroProps {
  backgroundImage?: string
  title?: string
  subtitle?: string
}

export default function MenuHero({ 
  backgroundImage = '/images/hero/menu-hero.jpg',
  title = 'התפריט שלנו',
  subtitle = 'מבחר עשיר של מנות דגים ופירות ים טריים, מוכנים בשיטות בישול מסורתיות ומודרניות'
}: MenuHeroProps) {
  return (
    <section className="relative h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Menu Hero Background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        {/* Top subtle darkening */}
        <div className="absolute inset-0 bg-black/20" />
        
        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-primary/90 via-blue-primary/50 to-transparent" />
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
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto drop-shadow-lg">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  )
}