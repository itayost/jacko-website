// src/components/layout/Footer.tsx
import Link from 'next/link'
import Image from 'next/image'
import { Phone, MapPin, Clock, Facebook, Instagram, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
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
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              מסעדת דגים ומאכלי ים מובילה בנתניה. 
              מגישים את הטעמים האותנטיים של הים התיכון כבר למעלה מ-50 שנה.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-accent">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  עמוד הבית
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  אודותינו
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-white transition-colors">
                  התפריט
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  צור קשר
                </Link>
              </li>
              <li>
                <Link href="/contact#reservation" className="text-gray-300 hover:text-white transition-colors">
                  הזמנת שולחן
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-accent">פרטי קשר</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300">
                <MapPin size={16} className="flex-shrink-0" />
                <span className="text-sm">גיבורי ישראל 7, נתניה</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:09-8652878" className="text-sm hover:text-white transition-colors">
                  09-8652878
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <Clock size={16} className="flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p>ראשון - חמישי: 12:00 - 22:30</p>
                  <p>שישי: 12:00 - 23:00</p>
                  <p>שבת: 12:00 - 22:30</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter and Social */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-yellow-accent">הישארו מעודכנים</h3>
            <p className="text-gray-300 text-sm mb-4">
              הצטרפו לרשימת התפוצה שלנו וקבלו עדכונים על אירועים ומבצעים מיוחדים
            </p>
            <form className="mb-4">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="האימייל שלך"
                  className="flex-1 px-3 py-2 bg-gray-800 rounded-lg text-sm text-white placeholder-gray-400 border border-gray-700 focus:border-blue-primary focus:outline-none"
                  dir="ltr"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-primary hover:bg-blue-dark rounded-lg transition-colors text-sm font-medium"
                >
                  הרשם
                </button>
              </div>
            </form>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-primary rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400 text-center md:text-right">
              © {currentYear} ג׳קו מאכלי ים. כל הזכויות שמורות.
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>נבנה עם</span>
              <Heart size={14} className="text-red-500" />
              <span>על ידי</span>
              <a href="#" className="text-blue-primary hover:text-white transition-colors">
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