import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface CircleProgressProps {
  value: number
}
export default function CircleProgress({ value }: CircleProgressProps) {
  return (
    <div data-testid="progress" className="h-12 w-12 md:h-16 md:w-16">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textColor: '#008800',
          pathColor: '#00cc66',
          backgroundColor: '#ebf9f0'
        })}
      />
    </div>
  )
}
