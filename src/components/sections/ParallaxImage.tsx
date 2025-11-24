// src/components/sections/ParallaxImage.tsx
'use client'

const ParallaxImage = () => {
  return (
    <section
      className="w-full h-[600px] relative"
      style={{
        backgroundImage: 'url(/images/gallery/restaurant-view.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    />
  )
}

export default ParallaxImage
