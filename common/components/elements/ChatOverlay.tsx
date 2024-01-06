import Link from 'next/link'

import React from 'react'
import { PiChatTeardropDotsBold as ChatIcon } from 'react-icons/pi'

export default function ChatOverlay() {
  return (
    <Link
      data-testid="chat-overlay"
      href="/chat"
      aria-label="chat overlay"
      className="fixed bottom-6 flex p-1 bg-white dark:bg-neutral-800 items-center justify-center rounded-full hover:bg-neutral-50 hover:-rotate-12 hover:scale-105 dark:hover:bg-neutral-700 right-6 w-14 h-14 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] transition-all duration-300"
    >
      <ChatIcon size={30} className="text-neutral-700 dark:text-neutral-300" />
    </Link>
  )
}
