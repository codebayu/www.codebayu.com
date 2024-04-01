'use client'

import { usePathname } from 'next/navigation'

import { fetcher } from '@/services/fetcher'
import React from 'react'
import useSWR from 'swr'

import { sendDataLayer } from '@/common/libs/gtm'

import { useMenu } from '@/stores/menu'

import MarqueeElement from './MarqueeElement'

export default function RunningText() {
  const { data, isLoading } = useSWR('/api/ads', fetcher)
  const { isOpen } = useMenu()
  const pathname = usePathname()

  if (isLoading) return

  const ads = data.data

  function onRedirect() {
    sendDataLayer({
      event: 'running_text_clicked',
      page_path: pathname
    })
    window.open(ads.link, '_blank')
  }

  return ads.isShow && !isOpen ? (
    <button
      onClick={onRedirect}
      className="absolute left-0 right-0 top-[70px] z-50 flex w-full animate-enter-left bg-emerald-200 text-neutral-800 opacity-100 shadow-md dark:bg-emerald-100 lg:fixed lg:left-auto lg:top-0 lg:max-w-lg lg:rounded-bl-full lg:pl-2"
    >
      <MarqueeElement withPadding={false}>
        <p className="flex space-x-2 py-[2px] text-[10px] md:py-1 md:text-xs">{ads.message}</p>
      </MarqueeElement>
    </button>
  ) : null
}
