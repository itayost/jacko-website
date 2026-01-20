// src/components/sections/MenuPreview.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const sections = [
  {
    image: '/images/gallery/restaurant-view.jpg',
    title: 'מועדון לקוחות',
    description: 'אם זה תלוי בנו, כבר היינו חברים. אז בואו נסגור את זה, מצטרפים למועדון ג\'קו נתניה ונהנים מהטבות והפתעות מהמטבח לפני כולם.',
    buttonText: 'הצטרפו עכשיו',
    buttonLink: '#'
  },
  {
    image: '/images/gallery/grilled-fish.jpg',
    title: 'אירועים פרטיים',
    description: 'אתם עושים גם אירועים? בוודאי! אצל ג\'קו נתניה האורחים שלכם יהנו מדגים טריים, פוקאצ\'ות חמות, מנות ילדים וקינוחים. צרו קשר ונתכנן יחד אירוע שהאורחים לא ישכחו.',
    buttonText: 'צרו קשר',
    buttonLink: '/contact'
  }
]

const MenuPreview = () => {
  return (
    <section className="bg-white" id="menu">
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
                {/* Image - Second on mobile, Left on even desktop, Right on odd desktop */}
                <div className={`relative h-[350px] lg:h-[400px] overflow-hidden order-2 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                {/* Content - First on mobile, Right on even desktop, Left on odd desktop */}
                <div className={`bg-white h-[350px] lg:h-[400px] flex items-center justify-center px-8 md:px-16 order-1 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-center text-gray-800 max-w-xl">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                      {section.title}
                    </h3>
                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-600">
                      {section.description}
                    </p>
                    <Link
                      href={section.buttonLink}
                      className="inline-block bg-blue-primary text-white px-8 py-3 font-semibold text-lg hover:bg-blue-dark transition-all hover:shadow-md"
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
