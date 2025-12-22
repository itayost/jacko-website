// src/components/sections/Features.tsx
'use client'

import { motion } from 'framer-motion'

const Features = () => {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Full-width Story Layout - Equal heights, minimal gaps */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Video - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative h-[500px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/homepage/wine.webm" type="video/webm" />
                <source src="/videos/homepage/wine.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Mobile Video - Shows only on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:hidden"
          >
            <div className="relative h-[300px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/homepage/fish.webm" type="video/webm" />
                <source src="/videos/homepage/fish.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Center Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="bg-white h-full flex items-center justify-center px-8 md:px-16 py-12">
              <div className="space-y-6 text-gray-800 text-center">
                {/* Section Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  הסיפור שלנו
                </h2>

                <p className="text-lg md:text-xl leading-relaxed">
                  הסיפור שלנו מתחיל לפני למעלה מ-50 שנה, כאשר נפתחה מסעדת ג&apos;קו הראשונה בנתניה.
                  מאז 1973 אנחנו ממשיכים להגיש דגים ומאכלי ים טריים באיכות הגבוהה ביותר.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  המסורת המשפחתית שלנו עוברת כבר שלושה דורות. כל מנה מוכנה בקפידה ובאהבה,
                  תוך שמירה על המתכונים האותנטיים שליוו אותנו מהיום הראשון.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  הדגים שלנו מגיעים טריים מדי יום, ישירות מהדייגים המקומיים,
                  ומוכנים בשיטות הבישול הים תיכוניות המסורתיות - גריל, תנור, ומטוגן פריך.
                </p>

                {/* CTA Button - Now inside */}
                <div className="mt-10">
                  <a
                    href="/about"
                    className="inline-block bg-blue-primary text-white px-8 py-3 font-semibold text-lg hover:bg-blue-dark transition-all hover:shadow-md"
                  >
                    קראו עוד אודותינו
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Video - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative h-[500px] overflow-hidden">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/homepage/fish.webm" type="video/webm" />
                <source src="/videos/homepage/fish.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features
