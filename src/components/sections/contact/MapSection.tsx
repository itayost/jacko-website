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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-black mb-4">איך מגיעים אלינו?</h2>
          <p className="text-lg text-gray-600">{address}</p>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gray-200 rounded-2xl overflow-hidden shadow-xl h-96"
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
            <div className="flex items-center justify-center h-full">
              <div className="text-center">
                <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
                <p className="text-gray-500">מפת Google תוצג כאן</p>
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
            className="max-w-4xl mx-auto mt-8 bg-white rounded-2xl p-6 shadow-lg"
          >
            <h3 className="font-bold text-lg mb-3">{parkingInfo.title}</h3>
            <p className="text-gray-600">{parkingInfo.description}</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}