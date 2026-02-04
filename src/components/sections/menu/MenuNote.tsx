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
      className="mt-12 mb-12 text-center bg-white/95 backdrop-blur rounded-2xl p-8 max-w-3xl mx-auto shadow-xl"
    >
      <p className="text-lg text-gray-700 mb-2">
        <strong>תפריט של סלטים בלבד:</strong> סלטים ללא עיקרית - 59 ₪
      </p>
      <p className="text-gray-600 mb-4">
        כל סועד שמזמין מנה עיקרית פטור מתשלום עבור הסלטים, אך אדם שבוחר לא להזמין עיקרית יחוייב.
      </p>
      <p className="text-gray-600">
        לבירורים והזמנות:{' '}
        <a href={`tel:${phoneNumber}`} className="text-blue-primary font-bold hover:text-blue-dark transition-colors">
          {phoneNumber}
        </a>
      </p>
    </motion.div>
  )
}
