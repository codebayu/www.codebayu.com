'use client'

import { usePathname } from 'next/navigation'

import React from 'react'

import clsxm from '@/common/libs/clsxm'
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
      className={clsxm(
        'flex text-white shadow-lg w-full md:w-max justify-center items-center px-4 py-2 space-x-2 rounded-lg',
        backgroundColor
      )}
    >
      {icon}
      <span className="text-sm">{title}</span>
    </button>
  )
}
