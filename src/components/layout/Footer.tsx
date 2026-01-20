// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Heart } from 'lucide-react'
import { contactInfo } from '@/data/contact'
import SocialLinks from '@/components/sections/contact/SocialLinks'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-blue-secondary to-blue-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.png"
                alt="ג׳קו מאכלי ים"
                width={80}
                height={80}
                className="brightness-110"
              />
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              מסעדת דגים ומאכלי ים מובילה בנתניה. 
              מגישים את הטעמים האותנטיים של הים התיכון כבר למעלה מ-50 שנה.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-accent">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-yellow-accent transition-colors">
                  עמוד הבית
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-white/80 hover:text-yellow-accent transition-colors">
                  התפריט
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-white/80 hover:text-yellow-accent transition-colors">
                  צור קשר
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-accent">פרטי קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white/80">
                <MapPin size={16} className="flex-shrink-0 text-yellow-accent" />
                <a 
                  href={contactInfo.address.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-yellow-accent transition-colors"
                >
                  {contactInfo.address.street}, {contactInfo.address.city}
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={16} className="flex-shrink-0 text-yellow-accent" />
                <a 
                  href={`tel:${contactInfo.phone.number}`} 
                  className="text-sm hover:text-yellow-accent transition-colors"
                >
                  {contactInfo.phone.number}
                </a>
              </li>
              <li className="flex items-start gap-2 text-white/80">
                <Clock size={16} className="flex-shrink-0 mt-0.5 text-yellow-accent" />
                <div className="text-sm">
                  <p>ראשון - חמישי: {contactInfo.hours.weekdays}</p>
                  <p>שישי: {contactInfo.hours.friday}</p>
                  <p>שבת: {contactInfo.hours.saturday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-accent">עקבו אחרינו</h3>
            <p className="text-white/80 text-sm mb-4">
              הישארו מעודכנים עם החדשות והאירועים האחרונים שלנו
            </p>
            
            {/* Use the SocialLinks component with data from contact info */}
            <SocialLinks
              facebook={contactInfo.social.facebook}
              instagram={contactInfo.social.instagram}
              tiktok={contactInfo.social.tiktok}
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/60 text-center md:text-right">
              © {currentYear} ג׳קו מאכלי ים. כל הזכויות שמורות.
            </div>
            <div className="flex items-center gap-1 text-sm text-white/60">
              <span>נבנה עם</span>
              <Heart size={14} className="text-red-500" />
              <span>על ידי</span>
              <a href="https://ItayOst.com" target="_blank" className="text-yellow-accent hover:text-white transition-colors">
                ItayOst
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer