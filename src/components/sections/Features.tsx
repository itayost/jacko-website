// src/components/sections/Features.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const features = [
  {
    image: '/images/gallery/fresh-fish.jpg',
    title: 'דגים טריים מדי יום',
    description: 'הדגים שלנו מגיעים ישירות מהים לצלחת שלכם. אנחנו עובדים עם דייגים מקומיים כדי להבטיח את הטריות המקסימלית.',
  },
  {
    image: '/images/gallery/family-cooking.jpg',
    title: 'מסורת משפחתית',
    description: 'מתכונים שעוברים במשפחה כבר שלושה דורות. כל מנה מוכנה באהבה ובתשומת לב לפרטים הקטנים.',
  },
  {
    image: '/images/gallery/restaurant-view.jpg',
    title: 'אווירה ים תיכונית',
    description: 'חוויית ישיבה נעימה עם נוף לים, מוזיקה נעימה ואווירה רגועה שמשלימה את החוויה הקולינרית.',
  },
]

const Features = () => {
  return (
    <section className="py-20 bg-blue-primary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            למה ג׳קו?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            המסורת, הטעם והאיכות שעושים את ההבדל
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-[400px] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Full Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0">
                  {/* Optional: Top subtle darkening for better text visibility */}
                  <div className="absolute inset-0 bg-black/20" />
                  
                  {/* Bottom gradient - stronger and higher to ensure text readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-blue-secondary via-blue-primary/80 to-transparent" />
                </div>
                
                {/* Content positioned at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-lg">
                    {feature.title}
                  </h3>
                  <p className="text-white/90 leading-relaxed drop-shadow">
                    {feature.description}
                  </p>
                </div>
                
                {/* Bottom Accent Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-20" />
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
          <a
            href="/about"
            className="inline-block bg-white text-blue-primary px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            קראו עוד אודותינו
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Features