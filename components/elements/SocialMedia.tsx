'use client'

import { usePathname } from 'next/navigation'

import { cn } from '@/common/libs/cn'
import { sendDataLayer } from '@/common/libs/gtm'
import { SocialMedia as ISocialMedia } from '@/common/types/menu'

import Tooltip from './Tooltip'

type SocialMediaProps = {
  items: ISocialMedia[]
  isMePage?: boolean
}

export default function SocialMedia({ items, isMePage }: SocialMediaProps) {
  const pathname = usePathname()
  const dataAos = isMePage ? 'zoom-in-down' : ''

  function handleCardClick(data: ISocialMedia) {
    sendDataLayer({
      event: 'contact_clicked',
      contact_title: data.title,
      page_path: pathname
    })
    window.open(data.href, '_blank')
  }

  return (
    <div
      data-testid="social-media"
      data-aos={dataAos}
      className={cn('flex flex-col space-y-1', isMePage && 'mt-6 items-center')}
    >
      <div className="font-sora mb-2 ml-2 mt-1 text-sm text-neutral-600 dark:text-neutral-500">Let`s Connect</div>
      <div
        data-testid="social-media-items-container"
        className={cn('flex justify-around space-x-2 px-5 pt-2 lg:justify-between', isMePage && 'space-x-8')}
      >
        {items?.map((item: ISocialMedia, index: number) => (
          <button
            data-testid="social-media-item"
            key={index}
            onClick={() => handleCardClick(item)}
            aria-label={item?.title}
          >
            <Tooltip title={item?.title}>
              <div
                data-testid="social-media-icon"
                className="text-neutral-700 transition duration-300 hover:text-neutral-900 dark:text-neutral-400 hover:dark:text-neutral-300 lg:hover:scale-110"
              >
                {item?.icon}
              </div>
            </Tooltip>
          </button>
        ))}
      </div>
    </div>
  )
}
