// src/components/sections/MenuPreview.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const menuItems = [
  {
    category: 'ראשונות',
    items: [
      { name: 'קרפצ׳יו דניס', price: 68, description: 'פרוסות דקות של דניס טרי, שמן זית, לימון ועשבי תיבול' },
      { name: 'סביצ׳ה ים תיכונית', price: 72, description: 'קוביות דג לבן, הדרים, כוסברה ובצל סגול' },
    ]
  },
  {
    category: 'דגים',
    items: [
      { name: 'לברק בגריל', price: 145, description: 'לברק שלם צלוי על הגריל, ירקות צלויים ותפוח אדמה' },
      { name: 'מוסר ים בחמאת לימון', price: 165, description: 'פילה מוסר ים ברוטב חמאה, לימון ושום, מוגש עם אורז' },
    ]
  },
  {
    category: 'פירות ים',
    items: [
      { name: 'שרימפס בשום וחמאה', price: 98, description: 'שרימפס ג׳מבו מוקפצים בחמאה, שום ויין לבן' },
      { name: 'פלטת פירות ים', price: 285, description: 'מבחר פירות ים טריים: שרימפס, קלמרי, מולים וסרטנים' },
    ]
  }
]

const MenuPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            מהתפריט שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            טעמים אותנטיים מהים התיכון
          </p>
        </motion.div>

        {/* Menu Categories */}
        <div className="space-y-12">
          {menuItems.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Category Title */}
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-2xl font-bold text-blue-primary">{category.category}</h3>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent via-yellow-accent to-transparent" />
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border-r-4 border-transparent hover:border-yellow-accent"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-xl font-semibold text-black">{item.name}</h4>
                      <span className="text-2xl font-bold text-blue-primary">₪{item.price}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-block bg-blue-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-dark transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            לתפריט המלא
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default MenuPreview