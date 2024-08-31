'use client'

import { motion } from 'framer-motion'

import WebContainer from './WebContainer'

export default function AnalyticIlustration() {
  return (
    <WebContainer>
      <div className="h-40">
        <svg
          viewBox="0 0 300 200"
          preserveAspectRatio="none"
          className="h-24 w-full border-b border-l border-neutral-300 dark:border-neutral-700"
          style={{ borderBottomLeftRadius: '4px' }}
        >
          <motion.path
            className="area1"
            d="M 0 150 Q 50 100 100 150 T 200 100 T 300 150 V 200 H 0 Z"
            fill="var(--area1-color)" // Using CSS variable
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
          <motion.path
            className="line1"
            d="M 0 150 Q 50 100 100 150 T 200 100 T 300 150"
            stroke="var(--line1-color)" // Using CSS variable
            fill="transparent"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          />
          <motion.path
            className="area2"
            d="M 0 100 Q 50 50 100 100 T 200 50 T 300 100 V 200 H 0 Z"
            fill="var(--area2-color)" // Using CSS variable
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 1 // Delay the second area and line animation
            }}
          />
          <motion.path
            className="line2"
            d="M 0 100 Q 50 50 100 100 T 200 50 T 300 100"
            stroke="var(--line2-color)" // Using CSS variable
            fill="transparent"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
              delay: 1 // Delay the second line animation
            }}
          />
        </svg>
      </div>
    </WebContainer>
  )
}
