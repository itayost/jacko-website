// src/components/sections/contact/ContactItem.tsx
'use client'

import type { ContactItemProps } from '@/types/contact'

export default function ContactItem({ icon: Icon, title, children }: ContactItemProps) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="bg-blue-primary text-white p-3 rounded-full flex-shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        {children}
      </div>
    </div>
  )
}