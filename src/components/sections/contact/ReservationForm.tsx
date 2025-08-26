// src/components/sections/contact/ReservationForm.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import type { ReservationFormData } from '@/types/contact'

interface ReservationFormProps {
  onSubmit?: (data: ReservationFormData) => void
}

export default function ReservationForm({ onSubmit }: ReservationFormProps) {
  const [formData, setFormData] = useState<ReservationFormData>({
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
    
    if (onSubmit) {
      onSubmit(formData)
    } else {
      // Default behavior
      console.log('Form submitted:', formData)
      alert('ההזמנה נשלחה בהצלחה! ניצור איתך קשר בהקדם.')
    }
    
    // Reset form after submission
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-2"
    >
      <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold text-blue-primary mb-6">הזמנת שולחן</h2>
        
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
            className="w-full bg-blue-primary text-white py-3 rounded-full font-semibold hover:bg-blue-dark transition-all hover:shadow-lg flex items-center justify-center gap-2"
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
  )
}