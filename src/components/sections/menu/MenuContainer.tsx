// src/components/sections/menu/MenuContainer.tsx
'use client'

import { useState, useRef, useCallback } from 'react'
import CategoryFilter from './CategoryFilter'
import MenuGrid from './MenuGrid'
import MenuNote from './MenuNote'
import { menuCategories, menuData } from '@/data/menu'
import type { MenuCategoryId } from '@/types/menu'

export default function MenuContainer() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>('all')
  const gridRef = useRef<HTMLDivElement>(null)

  const handleCategoryChange = useCallback((category: MenuCategoryId) => {
    setSelectedCategory(category)
    if (gridRef.current) {
      const top = gridRef.current.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      {/* Category Filter */}
      <CategoryFilter
        categories={menuCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Menu Items Grid */}
      <div ref={gridRef}>
        <MenuGrid
          menuData={menuData}
          selectedCategory={selectedCategory}
          categories={menuCategories}
        />
      </div>

      {/* Special Note */}
      <div className="bg-gradient-to-b from-blue-primary to-blue-secondary pb-12">
        <div className="container mx-auto px-4">
          <MenuNote />
        </div>
      </div>
    </>
  )
}