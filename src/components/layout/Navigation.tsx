// src/components/layout/Navigation.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/', label: 'בית' },
    { href: '/about', label: 'מי אנחנו' },
    { href: '/menu', label: 'תפריט' },
    { href: '/contact', label: 'צור קשר' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-white/90 backdrop-blur-sm py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="ג׳קו מאכלי ים"
              width={isScrolled ? 50 : 60}
              height={isScrolled ? 50 : 60}
              className="transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-black font-medium hover:text-blue-primary transition-colors relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-blue-primary transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2 text-blue-primary">
              <Phone size={18} />
              <a href="tel:09-8652878" className="font-semibold">09-8652878</a>
            </li>
            <li>
              <Link
                href="/contact#reservation"
                className="bg-blue-primary text-white px-6 py-2.5 rounded-full font-semibold hover:bg-blue-dark transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                הזמן שולחן
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-black p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-black font-medium hover:text-blue-primary transition-colors block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-2">
                <a href="tel:09-8652878" className="flex items-center gap-2 text-blue-primary font-semibold">
                  <Phone size={18} />
                  09-8652878
                </a>
              </li>
              <li>
                <Link
                  href="/contact#reservation"
                  className="bg-blue-primary text-white px-6 py-2.5 rounded-full font-semibold inline-block text-center w-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  הזמן שולחן
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation