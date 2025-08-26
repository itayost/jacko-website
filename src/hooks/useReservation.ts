// src/hooks/useReservation.ts
'use client'

import { useState } from 'react'
import type { ReservationFormData } from '@/types/contact'
import { validateReservationForm, submitReservation } from '@/utils/contact'

export function useReservation(initialData?: Partial<ReservationFormData>) {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    message: '',
    ...initialData
  })
  
  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const updateField = (name: keyof ReservationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateField(e.target.name as keyof ReservationFormData, e.target.value)
  }

  const validateForm = () => {
    const validation = validateReservationForm(formData)
    setErrors(validation.errors)
    return validation.isValid
  }

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      message: ''
    })
    setErrors({})
    setSubmitStatus({ type: null, message: '' })
  }

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    
    // Clear previous status
    setSubmitStatus({ type: null, message: '' })
    
    // Validate
    if (!validateForm()) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'נא לתקן את השגיאות בטופס' 
      })
      return false
    }
    
    // Submit
    setIsSubmitting(true)
    try {
      const result = await submitReservation(formData)
      
      if (result.success) {
        setSubmitStatus({ 
          type: 'success', 
          message: result.message || 'ההזמנה נשלחה בהצלחה!' 
        })
        resetForm()
        return true
      } else {
        setSubmitStatus({ 
          type: 'error', 
          message: result.message || 'שגיאה בשליחת ההזמנה' 
        })
        return false
      }
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'שגיאה בשליחת ההזמנה. נא לנסות שוב.' 
      })
      return false
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    errors,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit,
    resetForm,
    updateField,
    validateForm
  }
}