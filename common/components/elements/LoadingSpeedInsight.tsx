import React from 'react'
import { BsThreeDots } from 'react-icons/bs'

export default function LoadingSpeedInsight() {
  return (
    <div className="my-6 flex items-end justify-center space-x-6 text-neutral-600 md:space-x-10 md:text-sm">
      {[1, 2, 3, 4].map(item => (
        <div key={item} className="flex w-max flex-col items-center justify-center space-y-2 text-center">
          <div className="h-3 w-16 animate-pulse rounded-full bg-neutral-300 dark:bg-neutral-700 md:w-[82px]"></div>
          <div className="h-12 w-12 animate-pulse rounded-full bg-neutral-300 p-[6px] dark:bg-neutral-700 md:h-16 md:w-16">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white dark:bg-neutral-900">
              <BsThreeDots />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
