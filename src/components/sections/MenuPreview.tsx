// src/components/sections/MenuPreview.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const sections = [
  {
    image: '/images/gallery/restaurant-view.jpg',
    title: '50 שנה של מסורת',
    description: 'מאז 1973, מסעדת ג\'קו משרתת את קהילת נתניה עם דגים ומאכלי ים טריים. שלושה דורות של מצוינות קולינרית והכנסת אורחים חמה.',
    buttonText: 'הסיפור שלנו',
    buttonLink: '/about'
  },
  {
    image: '/images/gallery/fresh-fish.jpg',
    title: 'המלאי הטרי של היום',
    description: 'הדגים שלנו מגיעים טריים מדי בוקר ישירות מהדייגים המקומיים. איכות מובטחת, טריות מעולה, טעם שאין לטעות בו.',
    buttonText: 'התפריט המלא',
    buttonLink: '/menu'
  },
  {
    image: '/images/gallery/restaurant-view.jpg',
    title: 'חגגו איתנו',
    description: 'מושלם לחגיגות משפחתיות, אירועי חברה, וימי הולדת. אנחנו מקבלים קבוצות מכל הגדלים - מזוג אינטימי ועד 100+ אורחים.',
    buttonText: 'הזמינו שולחן',
    buttonLink: '/contact#reservation'
  },
  {
    image: '/images/gallery/grilled-fish.jpg',
    title: 'עקבו אחר המסע שלנו',
    description: 'הצטרפו לקהילה שלנו ברשתות החברתיות. מנות מיוחדות יומיות, מבט מאחורי הקלעים, והצצה לחיי המטבח שלנו.',
    buttonText: 'עקבו אחרינו',
    buttonLink: '#contact'
  }
]

const MenuPreview = () => {
  return (
    <section className="bg-blue-primary" id="menu">
      {/* Alternating Full-Width Rows */}
      <div className="w-full">
        {sections.map((section, index) => {
          const isEven = index % 2 === 0

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image - Left on even, Right on odd */}
                <div className={`relative h-[600px] overflow-hidden ${!isEven ? 'lg:order-2' : ''}`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content - Right on even, Left on odd */}
                <div className={`bg-blue-primary h-[600px] flex items-center justify-center px-8 md:px-16 ${!isEven ? 'lg:order-1' : ''}`}>
                  <div className="text-center text-white max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                      {section.title}
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-white/90">
                      {section.description}
                    </p>
                    <Link
                      href={section.buttonLink}
                      className="inline-block bg-white text-blue-primary px-8 py-3 font-semibold text-lg hover:bg-gray-100 transition-all hover:shadow-md"
                    >
                      {section.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default MenuPreview
