// src/components/sections/contact/MapSection.tsx
'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

interface MapSectionProps {
  address?: string
  parkingInfo?: {
    title: string
    description: string
  }
  mapEmbedUrl?: string
}

export default function MapSection({ 
  address = 'גיבורי ישראל 7, נתניה - במרכז העיר, ליד הים',
  parkingInfo,
  mapEmbedUrl 
}: MapSectionProps) {
  return (
    <section className="py-16 bg-blue-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">איך מגיעים אלינו?</h2>
          <p className="text-lg text-white/80">{address}</p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-2xl overflow-hidden shadow-xl h-96"
        >
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="flex items-center justify-center h-full bg-white/95">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-blue-primary" />
                <p className="text-gray-600">מפת Google תוצג כאן</p>
              </div>
            </div>
          )}
        </motion.div>

        {/* Parking Info */}
        {parkingInfo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mt-8 bg-white/95 backdrop-blur rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-lg mb-3 text-blue-primary">{parkingInfo.title}</h3>
            <p className="text-gray-700">{parkingInfo.description}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}