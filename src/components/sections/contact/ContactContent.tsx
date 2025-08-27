// src/components/sections/contact/ContactContent.tsx
'use client'

import ContactInfo from './ContactInfo'
import ReservationForm from './ReservationForm'
import type { ContactInfo as ContactInfoType, ReservationFormData } from '@/types/contact'

interface ContactContentProps {
  contactInfo: ContactInfoType
  onReservationSubmit?: (data: ReservationFormData) => void
}

export default function ContactContent({ contactInfo, onReservationSubmit }: ContactContentProps) {
  return (
    <section className="py-16 bg-blue-secondary overflow-x-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <ContactInfo info={contactInfo} />

          {/* Reservation Form */}
          <ReservationForm onSubmit={onReservationSubmit} />
        </div>
      </div>
    </section>
  )
}