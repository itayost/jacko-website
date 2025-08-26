// src/types/contact.ts

export interface ContactInfo {
  address: {
    street: string
    city: string
    mapUrl: string
  }
  phone: {
    number: string
    whatsappAvailable: boolean
  }
  email: string
  hours: {
    weekdays: string
    friday: string
    saturday: string
  }
  social: {
    facebook?: string
    instagram?: string
    twitter?: string
  }
}

export interface ReservationFormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  guests: string
  message: string
}

export interface ContactItemProps {
  icon: React.ComponentType<{ size?: number }>
  title: string
  children: React.ReactNode
}

export interface OpeningHoursData {
  day: string
  hours: string
}