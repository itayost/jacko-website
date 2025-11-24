// src/components/sections/ParallaxImage.tsx
'use client'

const ParallaxImage = () => {
  return (
    <section className="w-full h-[600px] relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover md:bg-fixed"
        style={{
          backgroundImage: 'url(/images/gallery/restaurant-view.jpg)'
        }}
      />

      {/* Gradient Overlay - Mobile only */}
      <div className="absolute inset-0 z-10 md:hidden">
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-blue-primary via-blue-primary/70 to-transparent" />
      </div>
    </section>
  )
}

export default ParallaxImage
