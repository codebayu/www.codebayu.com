import { motion } from 'framer-motion'
import React, { useRef } from 'react'

import { useFollowPointer } from '@/hooks/useFollowPointer'

export default function CursorDots() {
  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)
  return (
    <motion.div
      data-testid="cursor-dots"
      ref={ref}
      className="z-50 h-3 w-3 rounded-full bg-teal-300"
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 3,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  )
}
