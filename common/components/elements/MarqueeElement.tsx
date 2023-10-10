import React from 'react'
import Marquee from 'react-fast-marquee'

interface MarqueeElementProps {
  direction?: 'left' | 'right' | 'up'
  children: React.ReactNode
}

export default function MarqueeElement({ children, direction = 'left' }: MarqueeElementProps) {
  return (
    <Marquee direction={direction} speed={25} className="py-3">
      {children}
    </Marquee>
  )
}
