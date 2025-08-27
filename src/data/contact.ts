// src/data/contact.ts
import type { ContactInfo } from '@/types/contact'

export const contactInfo: ContactInfo = {
  address: {
    street: 'גיבורי ישראל 7',
    city: 'נתניה',
    mapUrl: 'https://maps.app.goo.gl/NqtGsjewHd5kpeTG8'
  },
  phone: {
    number: '09-8652878',
    whatsappAvailable: true
  },
  email: 'info@jacko-seafood.co.il',
  hours: {
    weekdays: '12:00 - 22:30',
    friday: '12:00 - 23:00',
    saturday: '12:00 - 22:30'
  },
  social: {
    facebook: 'https://www.facebook.com/jako.rest/',
    instagram: 'https://www.instagram.com/jacko_netanya/',
    tiktok: 'https://www.tiktok.com/@jackonetanya'
  }
}

export const parkingInfo = {
  title: 'חניה',
  description: 'חניה חינם ברחובות הסמוכים. חניון ציבורי במרחק 5 דקות הליכה. בימי שישי ושבת מומלץ להגיע מוקדם או להשתמש בתחבורה ציבורית.'
}