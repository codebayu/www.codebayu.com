'use client'

import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'

import { useNotifStore } from '@/stores/notif'

export default function Notif() {
  const { isOpen, text, hideNotif } = useNotifStore()

  useEffect(() => {
    const timeout = setTimeout(() => {
      hideNotif()
    }, 3000)

    return () => clearTimeout(timeout)
  }, [hideNotif, isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 font-sans right-6 text-xs rounded-sm bg-opacity-80 bg-neutral-800 text-neutral-100 py-1 px-2"
        >
          {text}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
