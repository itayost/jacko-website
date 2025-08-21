// src/app/contact/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('ההזמנה נשלחה בהצלחה! ניצור איתך קשר בהקדם.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            <h1 className="text-5xl font-bold text-black mb-4">צור קשר</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              נשמח לארח אתכם ולעמוד לשירותכם
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">פרטי התקשרות</h2>
                
                {/* Address */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-primary text-white p-3 rounded-full flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">כתובת</h3>
                    <p className="text-gray-600">גיבורי ישראל 7</p>
                    <p className="text-gray-600">נתניה</p>
                    <a 
                      href="https://maps.google.com/?q=גיבורי+ישראל+7+נתניה"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-primary hover:underline text-sm mt-2 inline-block"
                    >
                      הצג במפה ←
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-primary text-white p-3 rounded-full flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">טלפון</h3>
                    <a href="tel:09-8652878" className="text-gray-600 hover:text-blue-primary text-lg">
                      09-8652878
                    </a>
                    <p className="text-sm text-gray-500 mt-1">זמינים גם ב-WhatsApp</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-primary text-white p-3 rounded-full flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">אימייל</h3>
                    <a href="mailto:info@jacko-seafood.co.il" className="text-gray-600 hover:text-blue-primary">
                      info@jacko-seafood.co.il
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-blue-primary text-white p-3 rounded-full flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">שעות פתיחה</h3>
                    <div className="space-y-1 text-gray-600">
                      <p><span className="font-medium">ראשון - חמישי:</span> 12:00 - 22:30</p>
                      <p><span className="font-medium">שישי:</span> 12:00 - 23:00</p>
                      <p><span className="font-medium">שבת:</span> 12:00 - 22:30</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="font-semibold text-lg mb-3">עקבו אחרינו</h3>
                  <div className="flex gap-3">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full hover:bg-blue-primary hover:text-white transition-all"
                    >
                      <Facebook size={20} />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full hover:bg-blue-primary hover:text-white transition-all"
                    >
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Reservation Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-black mb-6">הזמנת שולחן</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        שם מלא *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                        placeholder="ישראל ישראלי"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                        placeholder="050-1234567"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                      placeholder="example@email.com"
                      dir="ltr"
                    />
                  </div>

                  {/* Date and Time */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        תאריך *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        שעה *
                      </label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      מספר סועדים *
                    </label>
                    <select
                      name="guests"
                      required
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                    >
                      <option value="">בחר מספר סועדים</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num} סועדים</option>
                      ))}
                      <option value="10+">יותר מ-10</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      הערות מיוחדות
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors resize-none"
                      rows={4}
                      placeholder="אלרגיות, אירועים מיוחדים, בקשות מיוחדות..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-dark transition-all hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    שלח הזמנה
                  </button>

                  <p className="text-center text-sm text-gray-500">
                    * שדות חובה
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-black mb-4">איך מגיעים אלינו?</h2>
            <p className="text-lg text-gray-600">גיבורי ישראל 7, נתניה - במרכז העיר, ליד הים</p>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center"
          >
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-500">מפת Google תוצג כאן</p>
            </div>
          </motion.div>

          {/* Parking Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-8 bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-lg mb-3">חניה</h3>
            <p className="text-gray-600">
              חניה חינם ברחובות הסמוכים. חניון ציבורי במרחק 5 דקות הליכה.
              בימי שישי ושבת מומלץ להגיע מוקדם או להשתמש בתחבורה ציבורית.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}