// src/app/menu/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Fish, Shell, Utensils, Coffee, Star } from 'lucide-react'

const menuCategories = [
  { id: 'all', name: 'הכל', icon: Star },
  { id: 'appetizers', name: 'ראשונות', icon: Star },
  { id: 'fish', name: 'דגים', icon: Fish },
  { id: 'seafood', name: 'פירות ים', icon: Shell },
  { id: 'mains', name: 'עיקריות', icon: Utensils },
  { id: 'desserts', name: 'קינוחים', icon: Coffee },
]

const menuData = {
  appetizers: [
    { name: 'קרפצ׳יו דניס', price: 68, description: 'פרוסות דקות של דניס טרי, שמן זית, לימון ועשבי תיבול' },
    { name: 'סביצ׳ה ים תיכונית', price: 72, description: 'קוביות דג לבן, הדרים, כוסברה ובצל סגול' },
    { name: 'טרטר טונה אדומה', price: 78, description: 'קוביות טונה אדומה, אבוקדו, סויה וג׳ינג׳ר' },
    { name: 'סלט פירות ים חם', price: 82, description: 'תמנון, קלמרי ומולים על מצע חסות עם רוטב ויניגרט' },
    { name: 'כבדי דגים מטוגנים', price: 65, description: 'כבדי דגים בציפוי פריך, מוגש עם טחינה וסלט' },
    { name: 'חומוס עם דגים מעושנים', price: 58, description: 'חומוס ביתי עם נתחי סלמון מעושן ושמן זית' },
  ],
  fish: [
    { name: 'לברק בגריל', price: 145, description: 'לברק שלם צלוי על הגריל, ירקות צלויים ותפוח אדמה' },
    { name: 'מוסר ים בחמאת לימון', price: 165, description: 'פילה מוסר ים ברוטב חמאה, לימון ושום, מוגש עם אורז' },
    { name: 'דניס שלם בתנור', price: 155, description: 'דניס שלם אפוי עם עשבי תיבול, שום ולימון' },
    { name: 'סלמון אטלנטי', price: 138, description: 'פילה סלמון צלוי עם רוטב טריאקי וירקות מוקפצים' },
    { name: 'בורי בקרום מלח', price: 125, description: 'בורי שלם אפוי בקרום מלח גס ועשבי תיבול' },
    { name: 'אמנון כרם', price: 98, description: 'פילה אמנון ברוטב עגבניות, יין לבן וזיתים' },
  ],
  seafood: [
    { name: 'שרימפס בשום וחמאה', price: 98, description: 'שרימפס ג׳מבו מוקפצים בחמאה, שום ויין לבן' },
    { name: 'פלטת פירות ים', price: 285, description: 'מבחר פירות ים טריים: שרימפס, קלמרי, מולים וסרטנים' },
    { name: 'לובסטר תרמידור', price: 320, description: 'חצי לובסטר ברוטב שמנת עשיר, גבינה וברנדי' },
    { name: 'קלמרי מטוגן', price: 78, description: 'טבעות קלמרי בציפוי פריך עם רוטב איולי' },
    { name: 'מולים ברוטב יין', price: 95, description: 'מולים מאודים ביין לבן, שום ועגבניות' },
    { name: 'תמנון על הגריל', price: 145, description: 'זרועות תמנון צלויות עם תפוחי אדמה ופלפלים' },
  ],
  mains: [
    { name: 'פסטה פירות ים', price: 125, description: 'פסטה טרייה עם שרימפס, מולים וקלמרי ברוטב עגבניות' },
    { name: 'ריזוטו פירות ים', price: 135, description: 'ריזוטו קרמי עם מבחר פירות ים ועשבי תיבול' },
    { name: 'המבורגר דגים', price: 78, description: 'המבורגר דג טרי עם חסה, עגבנייה ורוטב טרטר' },
    { name: 'פיש אנד צ׳יפס', price: 85, description: 'נתחי דג בבצק בירה עם צ׳יפס עבה' },
    { name: 'פאייה ספרדית', price: 155, description: 'אורז ספרדי עם פירות ים, עוף וירקות' },
    { name: 'טאקוס דגים', price: 68, description: 'שלוש טורטיות עם דג מטוגן, כרוב סגול וגוואקמולי' },
  ],
  desserts: [
    { name: 'קרם ברולה וניל', price: 42, description: 'קרם וניל עם קרמל שרוף' },
    { name: 'עוגת שוקולד חמה', price: 48, description: 'עוגת שוקולד עם ליבה נוזלית, מוגש עם גלידת וניל' },
    { name: 'טירמיסו', price: 45, description: 'קינוח איטלקי קלאסי עם קפה ומסקרפונה' },
    { name: 'סורבה פירות', price: 38, description: 'מבחר סורבה מפירות העונה' },
    { name: 'מלבי', price: 35, description: 'קינוח חלב קר עם רוטב ורדים ופיסטוקים' },
    { name: 'פאי לימון', price: 42, description: 'פאי לימון עם מרנג שרוף' },
  ],
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const getFilteredItems = () => {
    if (selectedCategory === 'all') {
      return Object.entries(menuData).flatMap(([category, items]) => 
        items.map(item => ({ ...item, category }))
      )
    }
    return menuData[selectedCategory as keyof typeof menuData] || []
  }

  const filteredItems = getFilteredItems()

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-black mb-4">התפריט שלנו</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              מבחר עשיר של מנות דגים ופירות ים טריים, מוכנים בשיטות בישול מסורתיות ומודרניות
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {menuCategories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon size={18} />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden"
              >

                {/* Menu Item Content */}
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-black pl-20">{item.name}</h3>
                  <span className="text-2xl font-bold text-blue-primary whitespace-nowrap">₪{item.price}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>

                {/* Category Tag */}
                {'category' in item && (
                  <div className="mt-4 inline-block">
                    <span className="text-xs bg-blue-50 text-blue-primary px-3 py-1 rounded-full">
                      {menuCategories.find(cat => cat.id === item.category)?.name}
                    </span>
                  </div>
                )}

                {/* Decorative Element */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-accent/10 to-transparent rounded-tl-full" />
              </motion.div>
            ))}
          </div>

          {/* Special Note */}
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
              לבירורים והזמנות: <a href="tel:09-8652878" className="text-blue-primary font-bold">09-8652878</a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}