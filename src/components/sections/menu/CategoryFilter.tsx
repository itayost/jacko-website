// src/components/sections/menu/CategoryFilter.tsx
'use client'

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
  return (
    <section className="sticky top-16 z-40 bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onCategoryChange(category.id as MenuCategoryId)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon size={18} />
                <span>{category.name}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </section>
  )
}