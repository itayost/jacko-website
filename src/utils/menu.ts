// src/utils/menu.ts
import type { MenuData, MenuItem } from '@/types/menu'

/**
 * Get all menu items as a flat array with category information
 */
export function getAllMenuItems(menuData: MenuData): (MenuItem & { category: string })[] {
  return Object.entries(menuData).flatMap(([category, items]) => 
    items.map((item: MenuItem) => ({ ...item, category }))
  )
}

/**
 * Filter menu items by search query
 */
export function searchMenuItems(menuData: MenuData, query: string): MenuItem[] {
  const normalizedQuery = query.toLowerCase()
  const allItems = getAllMenuItems(menuData)
  
  return allItems.filter(item => 
    item.name.toLowerCase().includes(normalizedQuery) ||
    item.description.toLowerCase().includes(normalizedQuery)
  )
}

/**
 * Get menu items by price range
 */
export function filterByPriceRange(
  menuData: MenuData, 
  minPrice: number, 
  maxPrice: number
): MenuItem[] {
  const allItems = getAllMenuItems(menuData)
  return allItems.filter(item => item.price >= minPrice && item.price <= maxPrice)
}

/**
 * Sort menu items
 */
export function sortMenuItems(
  items: MenuItem[], 
  sortBy: 'price-asc' | 'price-desc' | 'name'
): MenuItem[] {
  const sorted = [...items]
  
  switch (sortBy) {
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    case 'name':
      return sorted.sort((a, b) => a.name.localeCompare(b.name, 'he'))
    default:
      return sorted
  }
}