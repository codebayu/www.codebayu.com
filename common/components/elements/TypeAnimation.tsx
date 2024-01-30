'use client'

import React from 'react'
import { TypeAnimation as TypeAnimationComponent } from 'react-type-animation'

interface TypeAnimationProps {
  sequence: string[]
  delay?: number
}
export default function TypeAnimation({ sequence, delay = 1000 }: TypeAnimationProps) {
  const modifiedSequence: (string | number)[] = []

  sequence.forEach((item, index) => {
    modifiedSequence.push(item)

    if (index < sequence.length) {
      modifiedSequence.push(delay)
    }
  })

  return (
    <TypeAnimationComponent
      sequence={modifiedSequence}
      speed={10}
      deletionSpeed={70}
      repeat={Infinity}
      aria-label={sequence[0]}
    />
  )
}
