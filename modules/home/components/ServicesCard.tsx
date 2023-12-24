'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface ServicesCardProps {
  tag: string
  title: string
  description: string
}

export default function ServicesCard({ tag, title, description }: ServicesCardProps) {
  const [hover, setHover] = useState(false)
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`min-w-[300px] md:w-80 bg-[url('/backdrop_services.jpg')] text-neutral-100 rounded-xl overflow-hidden bg-center bg-cover`}
    >
      <div className="w-full h-full font-mono flex flex-col p-6 justify-center ">
        {!hover && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-sm text-neutral-300">#{tag}</span>
            <h3 className="text-2xl font-bold mt-2 text-neutral-200">{title}</h3>
          </motion.div>
        )}

        {hover && (
          <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} transition={{ duration: 0.5 }}>
            <h3 className="text-lg font-bold mb-4 text-neutral-200">{title}</h3>
            <p className="text-xs text-neutral-300">{description}</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}
