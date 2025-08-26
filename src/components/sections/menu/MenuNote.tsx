// src/components/sections/menu/MenuNote.tsx
'use client'

import { motion } from 'framer-motion'

interface MenuNoteProps {
  phoneNumber?: string
}

export default function MenuNote({ phoneNumber = '09-8652878' }: MenuNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-12 text-center bg-blue-50 rounded-2xl p-8 max-w-3xl mx-auto"
    >
      <p className="text-lg text-gray-700 mb-2">
        <strong>שימו לב:</strong> המחירים עשויים להשתנות בהתאם לעונה ולזמינות הדגים
      </p>
      <p className="text-gray-600">
        לבירורים והזמנות:{' '}
        <a href={`tel:${phoneNumber}`} className="text-blue-primary font-bold">
          {phoneNumber}
        </a>
      </p>
    </motion.div>
  )
}