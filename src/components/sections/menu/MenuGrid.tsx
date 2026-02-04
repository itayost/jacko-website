// src/components/sections/menu/MenuGrid.tsx
'use client'

import MenuItemCard from './MenuItemCard'
import type { MenuItem, MenuCategory, MenuData, MenuCategoryId } from '@/types/menu'

interface MenuGridProps {
  menuData: MenuData
  selectedCategory: MenuCategoryId
  categories: MenuCategory[]
}

const SUBCATEGORY_ORDER: Record<string, number> = { 'אדום': 0, 'לבן': 1 }

function getSubcategories(items: MenuItem[]): string[] {
  const subs = items
    .map(i => i.subcategory)
    .filter((s): s is string => typeof s === 'string')
  return [...new Set(subs)].sort((a, b) => (SUBCATEGORY_ORDER[a] ?? 99) - (SUBCATEGORY_ORDER[b] ?? 99))
}

export default function MenuGrid({ menuData, selectedCategory, categories }: MenuGridProps) {
  const categoryConfig = categories.find(cat => cat.id === selectedCategory)

  if (selectedCategory === 'all') {
    return (
      <section className="py-12 bg-blue-primary">
        <div className="container mx-auto px-4 max-w-5xl">
          {(Object.keys(menuData) as (keyof MenuData)[]).map(categoryKey => {
            const items = menuData[categoryKey]
            const cat = categories.find(c => c.id === categoryKey)
            if (!cat || items.length === 0) return null

            const subcategories = getSubcategories(items)
            const hasSubcategories = subcategories.length > 0

            return (
              <div key={categoryKey} className="mb-16">
                {/* Category Header */}
                <h2 className="text-3xl font-bold text-white text-center mb-4">{cat.name}</h2>

                {/* Category Note */}
                {cat.note && (
                  <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
                    {cat.note}
                  </p>
                )}

                {hasSubcategories ? (
                  subcategories.map(sub => {
                    const subItems = items.filter(i => i.subcategory === sub)
                    return (
                      <div key={sub} className="mb-8">
                        <h3 className="text-xl font-bold text-yellow-accent text-center mb-4">{sub}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {subItems.map((item, index) => (
                            <MenuItemCard key={`${item.name}-${index}`} item={item} index={index} />
                          ))}
                        </div>
                      </div>
                    )
                  })
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {items.map((item, index) => (
                      <MenuItemCard key={`${item.name}-${index}`} item={item} index={index} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>
    )
  }

  // Single category view
  const items = menuData[selectedCategory as keyof MenuData] || []
  const subcategories = getSubcategories(items)
  const hasSubcategories = subcategories.length > 0

  return (
    <section className="py-12 bg-blue-primary">
      <div className="container mx-auto px-4">
        {/* Category Note */}
        {categoryConfig?.note && (
          <p className="text-white/80 text-center mb-8 max-w-2xl mx-auto text-sm leading-relaxed">
            {categoryConfig.note}
          </p>
        )}

        {hasSubcategories ? (
          <div className="max-w-5xl mx-auto">
            {subcategories.map(sub => {
              const subItems = items.filter(i => i.subcategory === sub)
              return (
                <div key={sub} className="mb-8">
                  <h3 className="text-xl font-bold text-yellow-accent text-center mb-4">{sub}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {subItems.map((item, index) => (
                      <MenuItemCard key={`${item.name}-${index}`} item={item} index={index} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {items.map((item, index) => (
              <MenuItemCard key={`${item.name}-${index}`} item={item} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
