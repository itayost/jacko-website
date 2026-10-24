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

export interface BusinessMenuGroup {
  title?: string
  items: string[]
}

export interface BusinessMenuTier {
  price: number
  groups: BusinessMenuGroup[]
}

export interface BusinessMenuExtra {
  name: string
  price: number
}

export interface BusinessMenu {
  days: string
  hours: string
  includes: string
  drinksNote: string
  tiers: BusinessMenuTier[]
  extras: BusinessMenuExtra[]
}

export type MenuCategoryId = 'all' | 'business' | keyof MenuData
