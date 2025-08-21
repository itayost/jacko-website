// src/components/sections/Contact.tsx
'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="contact">
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
            בואו לבקר אותנו
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            נשמח לארח אתכם במסעדה שלנו
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-primary text-white p-3 rounded-full">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">כתובת</h3>
                <p className="text-gray-600">גיבורי ישראל 7, נתניה</p>
                <a 
                  href="https://maps.google.com/?q=גיבורי+ישראל+7+נתניה"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-primary hover:underline text-sm mt-1 inline-block"
                >
                  הצג במפה ←
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-primary text-white p-3 rounded-full">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">טלפון</h3>
                <a href="tel:09-8652878" className="text-gray-600 hover:text-blue-primary transition-colors text-lg font-medium">
                  09-8652878
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-primary text-white p-3 rounded-full">
                <Clock size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">שעות פתיחה</h3>
                <div className="space-y-1 text-gray-600">
                  <p>ראשון - חמישי: 12:00 - 22:30</p>
                  <p>שישי: 12:00 - 23:00</p>
                  <p>שבת: 12:00 - 22:30</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-blue-primary text-white p-3 rounded-full">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-black mb-2">אימייל</h3>
                <a href="mailto:info@jacko-seafood.co.il" className="text-gray-600 hover:text-blue-primary transition-colors">
                  info@jacko-seafood.co.il
                </a>
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
            id="reservation"
          >
            <h3 className="text-2xl font-bold text-black mb-6">הזמנת שולחן</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">שם מלא</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                    placeholder="ישראל ישראלי"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">טלפון</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                    placeholder="050-1234567"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">תאריך</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">שעה</label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">מספר סועדים</label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors">
                  <option>בחר מספר סועדים</option>
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} value={num}>{num} סועדים</option>
                  ))}
                  <option value="more">יותר מ-10</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">הערות מיוחדות</label>
                <textarea
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-primary focus:outline-none transition-colors resize-none"
                  rows={3}
                  placeholder="אלרגיות, אירועים מיוחדים, בקשות מיוחדות..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-dark transition-all hover:shadow-lg"
              >
                שלח הזמנה
              </button>

              <p className="text-center text-sm text-gray-500">
                או התקשרו אלינו: <a href="tel:09-8652878" className="text-blue-primary font-medium">09-8652878</a>
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact