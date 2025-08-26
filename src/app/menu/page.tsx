// src/app/menu/page.tsx
import { MenuHero, MenuContainer } from '@/components/sections/menu'

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-blue-primary">
      {/* Hero Section */}
      <MenuHero />
      
      {/* Menu Content - Categories, Items, and Note */}
      <MenuContainer />
    </main>
  )
}