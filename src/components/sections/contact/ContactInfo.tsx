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
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:col-span-1 space-y-8"
    >
      <div>
        <h2 className="text-2xl font-bold text-black mb-6">פרטי התקשרות</h2>
        
        {/* Address */}
        <ContactItem icon={MapPin} title="כתובת">
          <p className="text-gray-600">{info.address.street}</p>
          <p className="text-gray-600">{info.address.city}</p>
          <a 
            href={info.address.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-primary hover:underline text-sm mt-2 inline-block"
          >
            הצג במפה ←
          </a>
        </ContactItem>

        {/* Phone */}
        <ContactItem icon={Phone} title="טלפון">
          <a href={`tel:${info.phone.number}`} className="text-gray-600 hover:text-blue-primary text-lg">
            {info.phone.number}
          </a>
          {info.phone.whatsappAvailable && (
            <p className="text-sm text-gray-500 mt-1">זמינים גם ב-WhatsApp</p>
          )}
        </ContactItem>

        {/* Email */}
        <ContactItem icon={Mail} title="אימייל">
          <a href={`mailto:${info.email}`} className="text-gray-600 hover:text-blue-primary">
            {info.email}
          </a>
        </ContactItem>

        {/* Hours */}
        <ContactItem icon={Clock} title="שעות פתיחה">
          <div className="space-y-1 text-gray-600">
            <p><span className="font-medium">ראשון - חמישי:</span> {info.hours.weekdays}</p>
            <p><span className="font-medium">שישי:</span> {info.hours.friday}</p>
            <p><span className="font-medium">שבת:</span> {info.hours.saturday}</p>
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