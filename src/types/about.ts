// src/types/about.ts

export interface GalleryImage {
  id: number
  src: string
  alt: string
  category: 'food' | 'restaurant' | 'team' | 'story'
}

export interface AboutImage {
  id: string
  src: string
  alt: string
  caption?: string
}

export interface AboutSection {
  id: string
  title: string
  content: string
  images: AboutImage[]
  layout?: 'left' | 'right' | 'full' | 'grid'
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