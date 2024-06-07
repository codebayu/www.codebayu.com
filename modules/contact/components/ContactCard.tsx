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
        'flex h-max w-full items-end justify-between gap-4 rounded-lg border bg-opacity-40 bg-gradient-to-br p-6',
        inter.className,
        classContainer
      )}
    >
      <div className={classText}>
        <h3 className="text-xl font-semibold ">{title}</h3>
        <p className="my-2 max-w-[250px] text-xs">{description}</p>
        <button
          onClick={handleCardClick}
          className={cn(
            'mt-4 flex w-max gap-1 rounded-md px-4 py-2 text-sm font-medium text-white shadow-sm dark:text-black',
            classLink
          )}
        >
          <span>Go to {id}</span>
          <FiArrowUpRight className="text-xl" />
        </button>
      </div>
      <div className={cn('flex h-16 w-16 items-center justify-center rounded-full text-white', classIcon)}>{icon}</div>
    </div>
  )
}
