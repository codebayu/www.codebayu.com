'use client'

import { usePathname } from 'next/navigation'

import { FiArrowUpRight } from 'react-icons/fi'

import { cn } from '@/common/libs/cn'
import { sendDataLayer } from '@/common/libs/gtm'
import { inter } from '@/common/styles/fonts'
import { SocialMedia } from '@/common/types/menu'

export default function DiscordCard({
  id,
  title,
  description,
  href,
  icon,
  classContainer,
  classText,
  classLink,
  classIcon
}: SocialMedia) {
  const pathname = usePathname()
  function handleCardClick() {
    sendDataLayer({
      event: 'contact_clicked',
      contact_title: title,
      page_path: pathname
    })
    window.open(href, '_blank')
  }
  return (
    <div
      className={cn(
        'flex h-max w-full items-end justify-between rounded-lg border bg-opacity-40 bg-gradient-to-br p-4 md:p-6',
        inter.className,
        classContainer
      )}
    >
      <div className={classText}>
        <h3 className="text-xl font-semibold ">{title}</h3>
        <p className="my-2 max-w-[250px] text-[10px] md:text-xs">{description}</p>
        <button
          onClick={handleCardClick}
          className={cn(
            'mt-4 flex w-max items-center gap-1 rounded-md px-3 py-2 text-[8px] text-xs font-medium text-white shadow-sm transition-all duration-150 dark:text-black md:px-4 md:py-2 md:text-sm',
            classLink
          )}
        >
          <span>Go to {id}</span>
          <FiArrowUpRight className="text-base md:text-xl" />
        </button>
      </div>
      <div
        className={cn('flex h-12 w-12 items-center justify-center rounded-full text-white md:h-16 md:w-16', classIcon)}
      >
        {icon}
      </div>
    </div>
  )
}
