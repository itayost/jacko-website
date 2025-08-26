// src/components/sections/contact/SocialLinks.tsx
'use client'

import { Facebook, Instagram } from 'lucide-react'

interface SocialLinksProps {
  facebook?: string
  instagram?: string
  twitter?: string
}

const socialIcons = {
  facebook: Facebook,
  instagram: Instagram,
}

export default function SocialLinks({ facebook, instagram }: SocialLinksProps) {
  const links = [
    { url: facebook, icon: Facebook, name: 'Facebook' },
    { url: instagram, icon: Instagram, name: 'Instagram' },
  ].filter(link => link.url)

  if (links.length === 0) return null

  return (
    <div>
      <h3 className="font-semibold text-lg mb-3">עקבו אחרינו</h3>
      <div className="flex gap-3">
        {links.map(({ url, icon: Icon, name }) => (
          <a 
            key={name}
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gray-100 p-3 rounded-full hover:bg-blue-primary hover:text-white transition-all"
            aria-label={name}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  )
}