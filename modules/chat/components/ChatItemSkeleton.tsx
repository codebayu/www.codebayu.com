import React from 'react'

export default function ChatItemSkeleton() {
  return (
    <div id="chat-card" className="flex items-start space-x-3">
      <div className="rounded-full w-11 h-11 bg-neutral-300 dark:bg-neutral-700 animate-pulse" />
      <div className="flex flex-col space-y-1 w-[90%]">
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1 items-center">
            <span className="bg-neutral-300 dark:bg-neutral-700 animate-pulse h-3 w-36 rounded" />
          </div>
          <span className="bg-neutral-300 dark:bg-neutral-700 animate-pulse h-3 w-20 rounded" />
        </div>

        <div className="flex space-x-2">
          <div className="font-sans bg-neutral-300 dark:bg-neutral-800 animate-pulse w-full h-14 rounded-xl rounded-tl-none" />
        </div>
      </div>
    </div>
  )
}
