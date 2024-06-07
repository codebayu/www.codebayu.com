'use client'

import { usePathname } from 'next/navigation'

import { BiSolidDownvote as DownloadIcon } from 'react-icons/bi'

import { RESUME_URL } from '@/common/constant'
import { sendDataLayer } from '@/common/libs/gtm'

export default function DownloadResume() {
  const pathname = usePathname()

  function redirectToResumeUrl() {
    sendDataLayer({
      event: 'resume_clicked',
      page_path: pathname
    })
    window.open(RESUME_URL, '_blank')
  }

  return (
    <button
      onClick={redirectToResumeUrl}
      className="flex items-center gap-2 text-neutral-600 transition-all duration-300 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-300"
      data-umami-event="Download Resume"
    >
      <div
        data-testid="download-icon-container"
        className="overflow-hidden border-b-2 border-neutral-600 dark:border-neutral-500"
      >
        <DownloadIcon data-testid="download-icon" className="animate-rain-arrow" />
      </div>
      <span>Download Resume</span>
    </button>
  )
}
