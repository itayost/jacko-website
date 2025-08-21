// src/app/about/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Award, Users, Clock, Fish } from 'lucide-react'

const galleryImages = [
  { id: 1, src: '/images/gallery/dish-1.jpg', alt: 'מנת דג מעולה', category: 'food' },
  { id: 2, src: '/images/gallery/dish-2.jpg', alt: 'פלטת פירות ים', category: 'food' },
  { id: 3, src: '/images/gallery/dish-3.jpg', alt: 'לברק בגריל', category: 'food' },
  { id: 4, src: '/images/gallery/dish-4.jpg', alt: 'קינוח מיוחד', category: 'food' },
  { id: 5, src: '/images/gallery/dish-5.jpg', alt: 'סלט פירות ים', category: 'food' },
  { id: 6, src: '/images/gallery/dish-6.jpg', alt: 'מנת דג צלוי', category: 'food' },
  { id: 7, src: '/images/gallery/dish-7.jpg', alt: 'מנה מיוחדת', category: 'food' },
  { id: 8, src: '/images/gallery/dish-8.jpg', alt: 'מבחר דגים', category: 'food' },
  { id: 9, src: '/images/gallery/restaurant-view.jpg', alt: 'חלל המסעדה', category: 'restaurant' },
  { id: 10, src: '/images/gallery/family-cooking.jpg', alt: 'המטבח שלנו', category: 'team' },
  { id: 11, src: '/images/gallery/fresh-fish.jpg', alt: 'דגים טריים', category: 'food' },
]

const milestones = [
  { year: 1973, title: 'ההתחלה', description: 'פתיחת המסעדה הקטנה בלב נתניה' },
  { year: 1985, title: 'התרחבות', description: 'הרחבת המסעדה ושיפוץ מקיף' },
  { year: 1998, title: 'דור שני', description: 'הבנים מצטרפים לניהול המסעדה' },
  { year: 2010, title: 'חידוש', description: 'עיצוב מחדש ותפריט מורחב' },
  { year: 2023, title: '50 שנה', description: 'חגיגות יובל למסעדה האהובה' },
]

export default function AboutPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    setSelectedImage(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length)
    }
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/images/gallery/hero-bg.jpg"
            alt="רקע"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-black mb-4">הסיפור שלנו</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              מסורת של איכות, טעם וחוויה קולינרית מאז 1973
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
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

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
            >
              <div className="text-center">
                <div className="bg-blue-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fish size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">טריות</h3>
                <p className="text-gray-600 text-sm">דגים טריים מדי יום ישירות מהים</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-accent text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">איכות</h3>
                <p className="text-gray-600 text-sm">חומרי גלם מובחרים ללא פשרות</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">משפחתיות</h3>
                <p className="text-gray-600 text-sm">אווירה חמה ומסורת משפחתית</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-accent text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2">מסורת</h3>
                <p className="text-gray-600 text-sm">50 שנות ניסיון ומצוינות</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
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

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-black mb-4">גלריה</h2>
            <p className="text-lg text-gray-600 mb-8">רגעים וטעמים מהמסעדה שלנו</p>
            
            {/* Category Filter */}
            <div className="flex justify-center gap-4 flex-wrap">
              {['all', 'food', 'restaurant', 'team'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' && 'הכל'}
                  {category === 'food' && 'מנות'}
                  {category === 'restaurant' && 'המסעדה'}
                  {category === 'team' && 'הצוות'}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openLightbox(index)}
                className="relative aspect-square bg-gray-200 rounded-2xl overflow-hidden cursor-pointer group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="absolute bottom-4 right-4 text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  {image.alt}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button
            onClick={closeLightbox}
            className="absolute top-4 left-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage() }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <ChevronRight size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage() }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="relative max-w-5xl max-h-[80vh] w-full h-full">
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </main>
  )
}