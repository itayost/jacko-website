// src/components/sections/contact/SocialLinks.tsx
'use client'

import { Facebook, Instagram, TikTok } from 'lucide-react'

interface SocialLinksProps {
  facebook?: string
  instagram?: string
  tiktok?: string
}

export default function SocialLinks({ facebook, instagram, tiktok }: SocialLinksProps) {
  const links = [
    { url: facebook, icon: Facebook, name: 'Facebook' },
    { url: instagram, icon: Instagram, name: 'Instagram' },
    { url: tiktok, icon: TikTok, name: 'TikTok' }
  ].filter(link => link.url)

  if (links.length === 0) return null

  return (
    <div>
      <h3 className="font-semibold text-lg mb-3 text-white">עקבו אחרינו</h3>
      <div className="flex gap-3">
        {links.map(({ url, icon: Icon, name }) => (
          <a 
            key={name}
            href={url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/90 text-blue-primary p-3 rounded-full hover:bg-yellow-accent hover:text-black transition-all shadow-md"
            aria-label={name}
          >
            <Icon size={20} />
          </a>
        ))}
      </div>
    </div>
  )
}