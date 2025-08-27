// src/components/sections/menu/CategoryFilter.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import type { MenuCategory, MenuCategoryId } from '@/types/menu'

interface CategoryFilterProps {
  categories: MenuCategory[]
  selectedCategory: MenuCategoryId
  onCategoryChange: (category: MenuCategoryId) => void
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}: CategoryFilterProps) {
  const [isSticky, setIsSticky] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        // Check if the element is stuck to the top (accounting for the navbar height)
        setIsSticky(rect.top <= 64) // 64px is roughly the navbar height (top-16 = 4rem)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`sticky top-16 z-40 py-4 transition-all duration-300 ${
        isSticky 
          ? 'bg-white/70 backdrop-blur-md shadow-lg' 
          : 'bg-blue-secondary shadow-sm'
      }`}
    >
      {/* Desktop - with container */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-3">
            {categories.map((category) => {
              return (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onCategoryChange(category.id as MenuCategoryId)}
                  className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${
                    selectedCategory === category.id
                      ? isSticky 
                        ? 'bg-blue-primary text-white shadow-lg'
                        : 'bg-yellow-accent text-black shadow-lg'
                      : isSticky
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-white/90 text-blue-primary hover:bg-white'
                  }`}
                >
                  <span>{category.name}</span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Mobile - Edge to edge horizontal scroll */}
      <div className="md:hidden overflow-x-auto no-scrollbar">
        <div className="flex gap-3 w-max px-4">
          {categories.map((category) => {
            return (
              <motion.button
                key={category.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category.id as MenuCategoryId)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category.id
                    ? isSticky 
                      ? 'bg-blue-primary text-white'
                      : 'bg-yellow-accent text-black'
                    : isSticky
                      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      : 'bg-white/90 text-blue-primary hover:bg-white'
                }`}
              >
                <span>{category.name}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}