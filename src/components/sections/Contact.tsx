// src/components/sections/Contact.tsx
'use client'

import { motion } from 'framer-motion'
import SocialLinks from '@/components/sections/contact/SocialLinks'
import { contactInfo } from '@/data/contact'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const Contact = () => {
  return (
    <section className="overflow-x-hidden" id="contact">
      {/* Full-Width Split Section: Contact Info + Form */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
          {/* Contact Info - 40% (2 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-gradient-to-b from-blue-primary to-blue-secondary p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              בואו לבקר אותנו
            </h2>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-white text-blue-primary p-3 rounded-full shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">כתובת</h3>
                  <p className="text-white/80">גיבורי ישראל 7, נתניה</p>
                  <a
                    href="https://maps.google.com/?q=גיבורי+ישראל+7+נתניה"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-accent hover:underline text-sm mt-1 inline-block"
                  >
                    הצג במפה ←
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-white text-blue-primary p-3 rounded-full shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">טלפון</h3>
                  <a href="tel:09-8652878" className="text-white/80 hover:text-yellow-accent transition-colors text-lg font-medium">
                    09-8652878
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-white text-blue-primary p-3 rounded-full shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">שעות פתיחה</h3>
                  <div className="space-y-1 text-white/80">
                    <p>ראשון - חמישי: 12:00 - 22:30</p>
                    <p>שישי: 12:00 - 23:00</p>
                    <p>שבת: 12:00 - 22:30</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-white text-blue-primary p-3 rounded-full shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">אימייל</h3>
                  <a href="mailto:info@jacko-seafood.co.il" className="text-white/80 hover:text-yellow-accent transition-colors">
                    info@jacko-seafood.co.il
                  </a>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">עקבו אחרינו</h3>
                <SocialLinks
                  facebook={contactInfo.social.facebook}
                  instagram={contactInfo.social.instagram}
                  tiktok={contactInfo.social.tiktok}
                />
              </div>
            </div>
          </motion.div>

          {/* Map - 60% (3 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-3 relative h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3359.6234567890!2d34.8577!3d32.3335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDIwJzAwLjYiTiAzNMKwNTEnMjcuNyJF!5e0!3m2!1sen!2sil!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="מפת מיקום מסעדת ג'קו"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
