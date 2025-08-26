// src/components/sections/about/AboutStory.tsx
'use client'

import { motion } from 'framer-motion'

export default function AboutStory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="prose prose-lg mx-auto text-gray-700"
    >
      <p className="text-xl leading-relaxed mb-6">
        <span className="text-3xl font-bold text-blue-primary float-right ml-2">מ</span>
        אז 1973, מסעדת ג׳קו מהווה אבן דרך קולינרית בנתניה. מה שהתחיל כחלום של משפחה אחת 
        עם אהבה גדולה לים ולטעמים האותנטיים שלו, הפך למוסד קולינרי מוביל שמשרת אלפי לקוחות מרוצים מדי שנה.
      </p>
      
      <p className="text-lg leading-relaxed mb-6">
        המסעדה נוסדה על ידי יעקב (ג׳קו) כהן, דייג לשעבר שהחליט להביא את אוצרות הים ישירות לצלחת. 
        עם ניסיון של שנים בים ואהבה עמוקה למאכלי ים, ג׳קו פתח את דלתות המסעדה הקטנה ברחוב גיבורי ישראל.
      </p>

      <p className="text-lg leading-relaxed mb-6">
        היום, הדור השני והשלישי של המשפחה ממשיכים את המסורת, תוך שמירה על המתכונים המקוריים 
        לצד חדשנות וטכניקות בישול מודרניות. כל בוקר, הדגים הטריים מגיעים ישירות מהדייגים המקומיים, 
        בדיוק כמו לפני 50 שנה.
      </p>
    </motion.div>
  )
}