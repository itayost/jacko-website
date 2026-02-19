// src/components/sections/Features.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const Features = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const videoRef3 = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Safari fix: programmatically set muted and play
    const videos = [videoRef1.current, videoRef2.current, videoRef3.current]
    videos.forEach(video => {
      if (video) {
        video.muted = true
        video.play().catch(() => {
          // Autoplay was prevented, ignore error
        })
      }
    })
  }, [])

  return (
    <section className="bg-white relative overflow-hidden">
      {/* Full-width Story Layout - Equal heights, minimal gaps */}
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left Video - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative h-[500px] overflow-hidden">
              <video
                ref={videoRef1}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/homepage/wine.webm" type="video/webm" />
                <source src="/videos/homepage/wine.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Mobile Video - Shows only on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:hidden"
          >
            <div className="relative h-[300px] overflow-hidden">
              <video
                ref={videoRef2}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/homepage/fish.webm" type="video/webm" />
                <source src="/videos/homepage/fish.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>

          {/* Center Story Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <div className="bg-white h-full flex items-center justify-center px-8 md:px-16 py-12">
              <div className="space-y-6 text-gray-800 text-center">
                {/* Section Header */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  הסיפור שלנו
                </h2>

                <p className="text-lg md:text-xl leading-relaxed text-balance">
                  הסיפור של ג&apos;קו הוא סיפור על משפחה, ים ומסורת קולינרית
                  שהפכה עם השנים לשם מוכר ואהוב בישראל.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-balance">
                  בשנת 1976 הקימו שמחה וג&apos;קו אלאלוף <span style={{whiteSpace:'nowrap'}}>את ג&apos;קו</span>, מסעדת דגים ופירות ים
                  שהתבססה <span style={{whiteSpace:'nowrap'}}>על דגה</span> טרייה, סלטים ביתיים ואירוח חם.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-balance">
                  במהרה הפכה ג&apos;קו למוסד ולנקודת מפגש קבועה של חובבי דגים, משפחות ובליינים,
                  ושומרת על אותם ערכים: טריות, שפע, <span style={{whiteSpace:'nowrap'}}>שירות אישי</span> ואהבה אמיתית לים.
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-balance">
                  מסעדת הדגים ג&apos;קו נתניה מכבדת את העבר, חיה את ההווה ומגישה מאכלי ים{' '}
                  <span style={{whiteSpace:'nowrap'}}>באותה הפשטות</span> והנדיבות שבה הכל התחיל, <span style={{whiteSpace:'nowrap'}}>ואתם מוזמנים.</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Video - Desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3 hidden lg:block"
          >
            <div className="relative h-[500px] overflow-hidden">
              <video
                ref={videoRef3}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/homepage/fish.webm" type="video/webm" />
                <source src="/videos/homepage/fish.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Features
