'use client'

import { usePathname } from 'next/navigation'

import { cn } from '@/common/libs/cn'
import { sendDataLayer } from '@/common/libs/gtm'
import { MenuItemProps } from '@/common/types/menu'

export default function ContactCard({ href, title, backgroundColor, icon }: MenuItemProps) {
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
    <button
      onClick={handleCardClick}
      key={title}
      className={cn(
        'flex w-full items-center justify-center space-x-2 rounded-lg px-4 py-2 text-white shadow-lg md:w-max',
        backgroundColor
      )}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </button>
  )
}
