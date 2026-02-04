// src/types/menu.ts

export interface MenuCategory {
  id: string
  name: string
  note?: string
}

export interface MenuItem {
  name: string
  price: number
  priceDisplay?: string
  description?: string
  category?: string
  subcategory?: string
}

export interface MenuData {
  fish: MenuItem[]
  meats: MenuItem[]
  seafood: MenuItem[]
  kids: MenuItem[]
  salads: MenuItem[]
  desserts: MenuItem[]
  alcohol: MenuItem[]
  wines: MenuItem[]
}

export type MenuCategoryId = 'all' | keyof MenuData
