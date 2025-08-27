// src/components/sections/menu/MenuGrid.tsx
'use client'

import MenuItemCard from './MenuItemCard'
import type { MenuItem, MenuCategory, MenuData, MenuCategoryId } from '@/types/menu'

interface MenuGridProps {
  menuData: MenuData
  selectedCategory: MenuCategoryId
  categories: MenuCategory[]
}

export default function MenuGrid({ menuData, selectedCategory, categories }: MenuGridProps) {
  const getFilteredItems = (): MenuItem[] => {
    if (selectedCategory === 'all') {
      return Object.entries(menuData).flatMap(([category, items]) => 
        items.map((item: MenuItem) => ({ ...item, category }))
      )
    }
    return menuData[selectedCategory as keyof MenuData] || []
  }

  const filteredItems = getFilteredItems()

  return (
    <section className="py-12 bg-blue-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredItems.map((item, index) => {
            const categoryName = 'category' in item 
              ? categories.find(cat => cat.id === item.category)?.name
              : undefined

            return (
              <MenuItemCard
                key={`${item.name}-${index}`}
                item={item}
                index={index}
                categoryName={categoryName}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}