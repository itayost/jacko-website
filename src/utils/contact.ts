// src/utils/contact.ts
import type { ReservationFormData } from '@/types/contact'

/**
 * Validates reservation form data
 */
export function validateReservationForm(data: ReservationFormData): { 
  isValid: boolean
  errors: Partial<Record<keyof ReservationFormData, string>> 
} {
  const errors: Partial<Record<keyof ReservationFormData, string>> = {}
  
  // Name validation
  if (!data.name.trim()) {
    errors.name = 'שם מלא נדרש'
  } else if (data.name.length < 2) {
    errors.name = 'שם חייב להכיל לפחות 2 תווים'
  }
  
  // Phone validation (Israeli format)
  const phoneRegex = /^0[2-9]\d{7,8}$/
  const cleanPhone = data.phone.replace(/-/g, '')
  if (!cleanPhone) {
    errors.phone = 'מספר טלפון נדרש'
  } else if (!phoneRegex.test(cleanPhone)) {
    errors.phone = 'מספר טלפון לא תקין'
  }
  
  // Email validation (optional field)
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      errors.email = 'כתובת אימייל לא תקינה'
    }
  }
  
  // Date validation
  if (!data.date) {
    errors.date = 'תאריך נדרש'
  } else {
    const selectedDate = new Date(data.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (selectedDate < today) {
      errors.date = 'לא ניתן להזמין לתאריך שעבר'
    }
  }
  
  // Time validation
  if (!data.time) {
    errors.time = 'שעה נדרשת'
  }
  
  // Guests validation
  if (!data.guests) {
    errors.guests = 'מספר סועדים נדרש'
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  }
}

/**
 * Formats reservation data for submission
 */
export function formatReservationData(data: ReservationFormData) {
  return {
    ...data,
    phone: data.phone.replace(/-/g, ''), // Remove dashes from phone
    submittedAt: new Date().toISOString(),
    status: 'pending'
  }
}

/**
 * Sends reservation to API/email service
 */
export async function submitReservation(data: ReservationFormData): Promise<{ 
  success: boolean
  message?: string 
}> {
  try {
    const validation = validateReservationForm(data)
    
    if (!validation.isValid) {
      return {
        success: false,
        message: 'נא לתקן את השגיאות בטופס'
      }
    }
    
    const formattedData = formatReservationData(data)
    
    // TODO: Replace with actual API call
    // const response = await fetch('/api/reservations', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formattedData)
    // })
    
    // Simulated success
    console.log('Submitting reservation:', formattedData)
    
    return {
      success: true,
      message: 'ההזמנה נשלחה בהצלחה! ניצור איתך קשר בהקדם.'
    }
  } catch (error) {
    console.error('Error submitting reservation:', error)
    return {
      success: false,
      message: 'שגיאה בשליחת ההזמנה. נא לנסות שוב.'
    }
  }
}

/**
 * Generate WhatsApp message for reservation
 */
export function generateWhatsAppMessage(data: ReservationFormData, phoneNumber: string): string {
  const message = `שלום, אני מעוניין להזמין שולחן:
שם: ${data.name}
תאריך: ${data.date}
שעה: ${data.time}
מספר סועדים: ${data.guests}
${data.message ? `הערות: ${data.message}` : ''}`

  const encodedMessage = encodeURIComponent(message)
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '')
  
  return `https://wa.me/972${cleanPhone.substring(1)}?text=${encodedMessage}`
}