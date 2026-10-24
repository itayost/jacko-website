// src/components/sections/menu/BusinessMenuSection.tsx
'use client'

import { motion } from 'framer-motion'
import { businessMenu } from '@/data/menu'

export default function BusinessMenuSection() {
  const { days, hours, includes, drinksNote, tiers, extras } = businessMenu
  const half = Math.ceil(extras.length / 2)
  const extrasColumns = [extras.slice(0, half), extras.slice(half)]

  return (
    <section className="py-12 bg-blue-primary">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-6">תפריט עסקיות</h2>

        {/* Info */}
        <div className="bg-white/95 rounded-2xl shadow-xl p-6 max-w-3xl mx-auto mb-8 text-center">
          <span className="inline-block bg-blue-primary text-white font-bold rounded-full px-4 py-1.5 mb-4">
            {days} · <bdi dir="ltr">{hours}</bdi>
          </span>
          <p className="text-gray-700 leading-relaxed">{includes}</p>
          <p className="text-gray-500 text-sm mt-2">{drinksNote}</p>
        </div>

        {/* Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier, index) => {
            const isWide = tier.groups.length > 1 && index === tiers.length - 1 && tiers.length % 2 === 1
            return (
              <motion.div
                key={tier.price}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="flex justify-between items-baseline border-b border-gray-100 pb-3 mb-4">
                  <h3 className="text-xl font-bold text-black">עסקית</h3>
                  <span className="text-2xl font-bold text-blue-primary whitespace-nowrap">{tier.price} ₪</span>
                </div>

                <div className={isWide ? 'grid grid-cols-1 md:grid-cols-2 gap-x-6' : ''}>
                  {tier.groups.map((group, groupIndex) => (
                    <div key={group.title ?? groupIndex} className="mb-3 last:mb-0">
                      {group.title && (
                        <h4 className="text-sm font-bold text-blue-primary mb-1">{group.title}</h4>
                      )}
                      <ul className="text-gray-700 leading-loose">
                        {group.items.map(item => (
                          <li key={item} className="flex gap-2">
                            <span className="text-yellow-accent font-black">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-accent/10 to-transparent rounded-tl-full" />
              </motion.div>
            )
          })}
        </div>

        {/* Desserts & drinks */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">
          <h3 className="text-xl font-bold text-black text-center mb-3">קינוחים ושתייה בעסקית</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10">
            {extrasColumns.map((column, columnIndex) => (
              <div key={columnIndex}>
                {column.map(extra => (
                  <div
                    key={extra.name}
                    className="flex justify-between items-baseline py-2 border-b border-dashed border-gray-200"
                  >
                    <span className="text-gray-900">{extra.name}</span>
                    <span className="font-bold text-blue-primary whitespace-nowrap">{extra.price} ₪</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
