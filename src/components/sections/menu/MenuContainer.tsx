// src/components/sections/menu/MenuContainer.tsx
'use client'

import { useState } from 'react'
import CategoryFilter from './CategoryFilter'
import MenuGrid from './MenuGrid'
import MenuNote from './MenuNote'
import { menuCategories, menuData } from '@/data/menu'
import type { MenuCategoryId } from '@/types/menu'

export default function MenuContainer() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>('all')

  return (
    <>
      {/* Category Filter */}
      <CategoryFilter
        categories={menuCategories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Menu Items Grid */}
      <MenuGrid
        menuData={menuData}
        selectedCategory={selectedCategory}
        categories={menuCategories}
      />

      {/* Special Note */}
      <div className="bg-gradient-to-b from-blue-secondary to-blue-primary pb-12">
        <div className="container mx-auto px-4">
          <MenuNote />
        </div>
      </div>
    </>
  )
}