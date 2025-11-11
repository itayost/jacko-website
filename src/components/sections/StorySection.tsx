// src/components/sections/StorySection.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

const StorySection = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue-primary mb-4">
            הסיפור שלנו
          </h2>
          <div className="w-24 h-1 bg-yellow-accent mx-auto mb-6"></div>
        </motion.div>

        {/* Preview Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed mb-8">
            מסעדת ג׳קו הוקמה בשנת 1973 על ידי המנוח יעקב (ג׳קו) שמואלי. מאז היום הראשון,
            המטבח שלנו מתמחה במנות דגים ופירות ים טריים, תוך שימוש בחומרי גלם איכותיים
            שמגיעים ישירות מהים לצלחת שלכם.
          </p>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Text Content */}
                  <div className="space-y-4 text-gray-700">
                    <p className="leading-relaxed">
                      כבר למעלה מחמישה עשורים, משפחת שמואלי ממשיכה את המסורת המשפחתית
                      ומגישה לכם את אותן מנות ותיקות שהפכו אותנו למוסד בנתניה. לצידן,
                      אנחנו מציעים גם מנות חדשות ומרעננות עם קריצה עדכנית לטרנדים הקולינריים.
                    </p>
                    <p className="leading-relaxed">
                      תפריט האוכל שלנו מורכב ממנות פשוטות ומדויקות, שמכבדות את חומרי הגלם
                      האיכותיים והטריים. אנחנו עובדים עם דייגים מקומיים כדי להבטיח את הטריות
                      המקסימלית, וכל מנה מוכנה באהבה ובתשומת לב לפרטים הקטנים.
                    </p>
                    <p className="leading-relaxed">
                      בג׳קו, אנחנו מאמינים שאוכל טוב מתחיל מחומרי גלם איכותיים, מתובל באהבה
                      ומוגש באווירה חמה ומזמינה. זו הפילוסופיה שמלווה אותנו כבר שלושה דורות,
                      וזו הפילוסופיה שתמשיך ללוות אותנו גם בשנים הבאות.
                    </p>
                  </div>

                  {/* Images */}
                  <div className="space-y-4">
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/images/gallery/family-cooking.jpg"
                        alt="המסורת המשפחתית של ג׳קו"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-[250px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src="/images/gallery/restaurant-view.jpg"
                        alt="מסעדת ג׳קו"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Toggle Button */}
          <div className="text-center">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 bg-blue-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-dark transition-all hover:shadow-lg"
            >
              {isExpanded ? 'הסתר' : 'קרא עוד'}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown size={20} />
              </motion.div>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StorySection
