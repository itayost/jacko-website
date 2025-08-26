// src/app/contact/page.tsx
'use client'

// Direct imports instead of barrel import
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactContent from '@/components/sections/contact/ContactContent'
import MapSection from '@/components/sections/contact/MapSection'
import { contactInfo, parkingInfo } from '@/data/contact'
import type { ReservationFormData } from '@/types/contact'

export default function ContactPage() {
  // Optional: Add your Google Maps embed URL here
  const mapEmbedUrl = undefined // Replace with actual embed URL if available
  
  // Optional: Custom reservation handler
  const handleReservation = (data: ReservationFormData) => {
    // Handle form submission
    // Could send to an API, email service, etc.
    console.log('Reservation data:', data)
    alert('ההזמנה נשלחה בהצלחה! ניצור איתך קשר בהקדם.')
  }

  return (
    <main className="min-h-screen bg-blue-primary">
      {/* Hero Section */}
      <ContactHero />

      {/* Contact Information and Reservation Form */}
      <ContactContent 
        contactInfo={contactInfo}
        onReservationSubmit={handleReservation}
      />

      {/* Map Section */}
      <MapSection 
        address={`${contactInfo.address.street}, ${contactInfo.address.city} - במרכז העיר, ליד הים`}
        parkingInfo={parkingInfo}
        mapEmbedUrl={mapEmbedUrl}
      />
    </main>
  )
}