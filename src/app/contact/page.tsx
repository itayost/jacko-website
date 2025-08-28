// src/app/contact/page.tsx
'use client'

// Direct imports instead of barrel import
import ContactHero from '@/components/sections/contact/ContactHero'
import ContactContent from '@/components/sections/contact/ContactContent'
import MapSection from '@/components/sections/contact/MapSection'
import { contactInfo, parkingInfo } from '@/data/contact'
import type { ReservationFormData } from '@/types/contact'

export default function ContactPage() {
  // Google Maps embed URL for Jacko Seafood Restaurant
  // Address: גיבורי ישראל 7, נתניה
  // This is the actual embed URL from Google Maps for Jacko restaurant
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3052.4711457925455!2d34.86235948729155!3d32.2779413626812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d40825b74d997%3A0x468b4c60c52d5a55!2z15In16fXlSDXnteQ15vXnNeZINeZ150g16DXqteg15nXlCDXnteq15fXnSDXpNeV15zXkg!5e0!3m2!1siw!2sil!4v1756302240855!5m2!1siw!2sil"
  
  // Custom reservation handler
  const handleReservation = async (data: ReservationFormData) => {
    try {
      // Handle form submission
      // You can send this to your API endpoint
      console.log('Reservation data:', data)
      
      // Example API call (uncomment and adjust when you have an API endpoint)
      // const response = await fetch('/api/reservations', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // })
      // 
      // if (!response.ok) throw new Error('Failed to submit reservation')
      
      alert('ההזמנה נשלחה בהצלחה! ניצור איתך קשר בהקדם.')
    } catch (error) {
      console.error('Error submitting reservation:', error)
      alert('אירעה שגיאה בשליחת ההזמנה. אנא נסו שנית או התקשרו אלינו.')
    }
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

      {/* Map Section with embedded Google Map */}
      <MapSection 
        address={`${contactInfo.address.street}, ${contactInfo.address.city} - במרכז העיר, ליד הים`}
        parkingInfo={parkingInfo}
        mapEmbedUrl={mapEmbedUrl}
      />
    </main>
  )
}