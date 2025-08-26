// src/components/sections/about/ValuesGrid.tsx
'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Fish } from 'lucide-react'

const values = [
  {
    icon: Fish,
    title: 'טריות',
    description: 'דגים טריים מדי יום ישירות מהים',
    bgColor: 'bg-blue-primary',
    textColor: 'text-white'
  },
  {
    icon: Award,
    title: 'איכות',
    description: 'חומרי גלם מובחרים ללא פשרות',
    bgColor: 'bg-yellow-accent',
    textColor: 'text-black'
  },
  {
    icon: Users,
    title: 'משפחתיות',
    description: 'אווירה חמה ומסורת משפחתית',
    bgColor: 'bg-blue-primary',
    textColor: 'text-white'
  },
  {
    icon: Clock,
    title: 'מסורת',
    description: '50 שנות ניסיון ומצוינות',
    bgColor: 'bg-yellow-accent',
    textColor: 'text-black'
  }
]

export default function ValuesGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
    >
      {values.map((value, index) => {
        const Icon = value.icon
        return (
          <div key={index} className="text-center">
            <div className={`${value.bgColor} ${value.textColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
              <Icon size={28} />
            </div>
            <h3 className="font-bold text-lg mb-2">{value.title}</h3>
            <p className="text-gray-600 text-sm">{value.description}</p>
          </div>
        )
      })}
    </motion.div>
  )
}