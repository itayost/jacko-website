// src/components/sections/contact/ContactInfo.tsx
'use client'

import { motion } from 'framer-motion'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'
import ContactItem from './ContactItem'
import SocialLinks from './SocialLinks'
import type { ContactInfo as ContactInfoType } from '@/types/contact'

interface ContactInfoProps {
  info: ContactInfoType
}

export default function ContactInfo({ info }: ContactInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-1 space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-white mb-6">פרטי התקשרות</h2>
        
        {/* Address */}
        <ContactItem icon={MapPin} title="כתובת">
          <p className="text-white/80">{info.address.street}</p>
          <p className="text-white/80">{info.address.city}</p>
          <a 
            href={info.address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-accent hover:underline text-sm mt-2 inline-block"
          >
            הצג במפה ←
          </a>
        </ContactItem>

        {/* Phone */}
        <ContactItem icon={Phone} title="טלפון">
          <a href={`tel:${info.phone.number}`} className="text-white/80 hover:text-yellow-accent text-lg transition-colors">
            {info.phone.number}
          </a>
          {info.phone.whatsappAvailable}
        </ContactItem>

        {/* Email */}
        <ContactItem icon={Mail} title="אימייל">
          <a href={`mailto:${info.email}`} className="text-white/80 hover:text-yellow-accent transition-colors">
            {info.email}
          </a>
        </ContactItem>

        {/* Hours */}
        <ContactItem icon={Clock} title="שעות פתיחה">
          <div className="space-y-1 text-white/80">
            <p><span className="font-medium text-white/90">ראשון - חמישי:</span> {info.hours.weekdays}</p>
            <p><span className="font-medium text-white/90">שישי:</span> {info.hours.friday}</p>
            <p><span className="font-medium text-white/90">שבת:</span> {info.hours.saturday}</p>
          </div>
        </ContactItem>

        {/* Social Media */}
        <SocialLinks 
          facebook={info.social.facebook}
          instagram={info.social.instagram}
          twitter={info.social.twitter}
        />
      </div>
    </motion.div>
  )
}