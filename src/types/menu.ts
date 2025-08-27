// src/types/menu.ts

export interface MenuCategory {
  id: string
  name: string
}

export interface MenuItem {
  name: string
  price: number
  description: string
  category?: string
}

export interface MenuData {
  appetizers: MenuItem[]
  fish: MenuItem[]
  seafood: MenuItem[]
  mains: MenuItem[]
  desserts: MenuItem[]
}

export type MenuCategoryId = 'all' | keyof MenuData