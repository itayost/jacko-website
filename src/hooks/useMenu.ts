// src/hooks/useMenu.ts
'use client'

import { useState, useMemo } from 'react'
import type { MenuData, MenuItem, MenuCategoryId } from '@/types/menu'
import { getAllMenuItems, searchMenuItems, sortMenuItems } from '@/utils/menu'

interface UseMenuOptions {
  initialCategory?: MenuCategoryId
  initialSortBy?: 'price-asc' | 'price-desc' | 'name'
}

export function useMenu(menuData: MenuData, options: UseMenuOptions = {}) {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategoryId>(
    options.initialCategory || 'all'
  )
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState(options.initialSortBy || 'name')

  const filteredItems = useMemo(() => {
    let items: MenuItem[] = []

    // Apply category filter
    if (selectedCategory === 'all') {
      items = getAllMenuItems(menuData)
    } else {
      items = menuData[selectedCategory as keyof MenuData] || []
    }

    // Apply search filter if query exists
    if (searchQuery) {
      items = searchMenuItems(menuData, searchQuery).filter(item => {
        if (selectedCategory === 'all') return true
        return 'category' in item && item.category === selectedCategory
      })
    }

    // Apply sorting
    items = sortMenuItems(items, sortBy)

    return items
  }, [menuData, selectedCategory, searchQuery, sortBy])

  const stats = useMemo(() => {
    const allItems = getAllMenuItems(menuData)
    return {
      totalItems: allItems.length,
      averagePrice: Math.round(
        allItems.reduce((sum, item) => sum + item.price, 0) / allItems.length
      ),
      priceRange: {
        min: Math.min(...allItems.map(item => item.price)),
        max: Math.max(...allItems.map(item => item.price))
      },
      currentCount: filteredItems.length
    }
  }, [menuData, filteredItems])

  return {
    // State
    selectedCategory,
    searchQuery,
    sortBy,
    filteredItems,
    stats,
    
    // Actions
    setSelectedCategory,
    setSearchQuery,
    setSortBy,
    
    // Helpers
    resetFilters: () => {
      setSelectedCategory('all')
      setSearchQuery('')
      setSortBy('name')
    }
  }
}