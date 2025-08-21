// src/components/sections/HeroSection.tsx
'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0)
  const { scrollY } = useScroll()
  
  // Parallax transform
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  
  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <div className="relative w-full h-[120%]">
          <Image
            src="/images/hero-bg.jpg"
            alt="ג׳קו מסעדת דגים"
            fill
            className="object-cover"
            priority
            quality={90}
          />
        </div>
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10">
        {/* Top gradient - darker for better text visibility */}
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent" />
        
        {/* Bottom gradient with #004da6 like in the reference image */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-deep-blue via-deep-blue/60 to-transparent" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-20 h-full flex items-center justify-center px-4"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          {/* Logo with parallax effect */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            style={{
              transform: `translateY(${offsetY * 0.3}px)`
            }}
          >
            <Image
              src="/images/logo.png"
              alt="ג׳קו"
              width={300}
              height={300}
              className="mx-auto drop-shadow-2xl"
              priority
            />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg"
            style={{
              transform: `translateY(${offsetY * 0.2}px)`
            }}
          >
            ג׳קו
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-3xl text-yellow-accent mb-6 drop-shadow-lg"
            style={{
              transform: `translateY(${offsetY * 0.15}px)`
            }}
          >
            מסעדת דגים ומאכלי ים
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              transform: `translateY(${offsetY * 0.1}px)`
            }}
          >
            <span className="inline-block bg-yellow-accent text-black px-8 py-3 rounded-full font-bold text-lg shadow-lg">
              מאז 1973
            </span>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/menu"
              className="bg-white text-deep-blue px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all hover:shadow-xl"
            >
              לתפריט שלנו
            </Link>
            <Link
              href="/contact#reservation"
              className="bg-yellow-accent text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-dark transition-all hover:shadow-xl border-2 border-white/30"
            >
              הזמן שולחן
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-30"
        onClick={scrollToContent}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} className="text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection