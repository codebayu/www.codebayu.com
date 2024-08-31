'use client'

import { motion } from 'framer-motion'

import WebContainer from './WebContainer'

export default function WebIlustration() {
  return (
    <WebContainer>
      <div>
        <motion.div
          className="mb-2 border border-neutral-300 dark:border-neutral-700"
          initial={{
            borderRadius: '50%',
            width: '20px',
            height: '20px'
          }}
          animate={{
            borderRadius: ['50%', '50%', '4px', '4px', '4px', '50%'],
            width: ['20px', '20px', '40px', '40px', '40px', '20px'], // Small circle, large square
            height: ['20px', '20px', '40px', '40px', '40px', '20px']
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            times: [0, 0.3, 0.5, 0.8, 1],
            ease: 'easeInOut'
          }}
        ></motion.div>
        <div className="flex flex-col gap-1">
          <div className="h-1 w-10 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          <div className="h-1 w-4 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-1 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
          <div className="h-1 w-10 rounded-full bg-neutral-200 dark:bg-neutral-700" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="h-2 w-8 rounded-full bg-neutral-300 dark:bg-neutral-700" />
        <div className="flex gap-1">
          <div className="h-1 w-4 rounded-full bg-neutral-300 dark:bg-neutral-600" />
          <div className="h-1 w-16 rounded-full bg-neutral-200 dark:bg-neutral-700" />
        </div>
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map(item => (
              <motion.div
                key={item}
                className="w-16 rounded border border-neutral-300 dark:border-neutral-700"
                initial={{ height: '40px' }}
                animate={{ height: ['40px', '40px', '20px', '20px', '20px', '40px'] }}
                transition={{ duration: 10, times: [0, 0.3, 0.5, 0.8, 1], repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
          <div className="flex flex-col gap-2">
            {[1, 2, 3].map(item => (
              <motion.div
                key={item}
                className="w-14 rounded border border-neutral-300 dark:border-neutral-700"
                initial={{ height: '20px' }}
                animate={{ height: ['20px', '20px', '40px', '40px', '40px', '20px'] }}
                transition={{ duration: 10, times: [0, 0.3, 0.5, 0.8, 1], repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>
      </div>
    </WebContainer>
  )
}
