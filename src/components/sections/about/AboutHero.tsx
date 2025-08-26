// src/components/sections/about/AboutHero.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image
          src="/images/gallery/hero-bg.jpg"
          alt="רקע"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-black mb-4">הסיפור שלנו</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            מסורת של איכות, טעם וחוויה קולינרית מאז 1973
          </p>
        </motion.div>
      </div>
    </section>
  )
}