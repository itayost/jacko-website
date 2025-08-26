// src/components/sections/about/Timeline.tsx
'use client'

import { motion } from 'framer-motion'

const milestones = [
  { year: 1973, title: 'ההתחלה', description: 'פתיחת המסעדה הקטנה בלב נתניה' },
  { year: 1985, title: 'התרחבות', description: 'הרחבת המסעדה ושיפוץ מקיף' },
  { year: 1998, title: 'דור שני', description: 'הבנים מצטרפים לניהול המסעדה' },
  { year: 2010, title: 'חידוש', description: 'עיצוב מחדש ותפריט מורחב' },
  { year: 2023, title: '50 שנה', description: 'חגיגות יובל למסעדה האהובה' },
]

export default function Timeline() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-black mb-12"
        >
          ציוני דרך
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`flex items-center gap-8 mb-8 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <h3 className="text-2xl font-bold text-blue-primary mb-2">{milestone.year}</h3>
                <h4 className="text-xl font-semibold mb-1">{milestone.title}</h4>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
              <div className="w-4 h-4 bg-yellow-accent rounded-full ring-4 ring-white shadow-lg" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}