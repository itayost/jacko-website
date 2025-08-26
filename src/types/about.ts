// src/types/about.ts

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: 'food' | 'restaurant' | 'team'
}

export interface Milestone {
  year: number
  title: string
  description: string
}

export interface Value {
  icon: React.ComponentType<{ size?: number }>
  title: string
  description: string
  bgColor: string
  textColor: string
}