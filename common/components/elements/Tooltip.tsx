'use client'

import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'

interface TooltipProps {
  title: string
  children: ReactNode
}

const Tooltip = ({ title, children }: TooltipProps) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false)

  const handleMouseEnter = () => {
    setTooltipVisible(true)
  }

  const handleMouseLeave = () => {
    setTooltipVisible(false)
  }

  const tooltipVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div data-testid="tooltip-container" className="relative inline-block">
      <div
        data-testid="children-container"
        className="tooltip-container relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isTooltipVisible && (
        <motion.div
          data-testid="title"
          className="absolute bottom-full mb-2 hidden w-max max-w-xs rounded bg-neutral-500 px-2 py-1 text-xs font-medium text-neutral-100 dark:bg-neutral-100 dark:text-neutral-700 lg:block"
          variants={tooltipVariants}
          initial="hidden"
          animate="visible"
        >
          {title}
        </motion.div>
      )}
    </div>
  )
}

export default Tooltip
