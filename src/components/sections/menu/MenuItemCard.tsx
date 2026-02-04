// src/components/sections/menu/MenuItemCard.tsx
'use client'

import { motion } from 'framer-motion'
import type { MenuItem } from '@/types/menu'

interface MenuItemCardProps {
  item: MenuItem
  index: number
}

export default function MenuItemCard({ item, index }: MenuItemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Menu Item Content */}
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-black">{item.name}</h3>
        <span className="text-2xl font-bold text-blue-primary whitespace-nowrap">
          {item.priceDisplay ?? `₪${item.price}`}
        </span>
      </div>
      {item.description && (
        <p className="text-gray-600 leading-relaxed">{item.description}</p>
      )}

      {/* Decorative Element */}
      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-accent/10 to-transparent rounded-tl-full" />
    </motion.div>
  )
}
