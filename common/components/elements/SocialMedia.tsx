'use client'

import { usePathname } from 'next/navigation'

import clsxm from '@/common/libs/clsxm'
import { sendDataLayer } from '@/common/libs/gtm'
import { MenuItemProps } from '@/common/types/menu'

import Tooltip from './Tooltip'

type SocialMediaProps = {
  items: MenuItemProps[]
  isMePage?: boolean
}

export default function SocialMedia({ items, isMePage }: SocialMediaProps) {
  const pathname = usePathname()
  const dataAos = isMePage ? 'zoom-in-down' : ''

  function handleCardClick(data: MenuItemProps) {
    sendDataLayer({
      event: 'contact_clicked',
      contact_title: data.title,
      page_path: pathname
    })
    window.open(data.href, '_blank')
  }

  return (
    <div data-aos={dataAos} className={clsxm('flex flex-col space-y-1', isMePage && 'items-center mt-6')}>
      <div className="text-sm ml-2 mt-1 mb-2 text-neutral-600 dark:text-neutral-500 font-sora">Let`s Connect</div>
      <div className={clsxm('flex justify-around space-x-2 lg:justify-between px-5 pt-2', isMePage && 'space-x-8')}>
        {items?.map((item: MenuItemProps, index: number) => (
          <button
            key={index}
            onClick={() => handleCardClick(item)}
            data-umami-event={item?.eventName}
            aria-label={item?.title}
          >
            <Tooltip title={item?.title}>
              <div className="text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 hover:dark:text-neutral-300 lg:hover:scale-110 transition duration-300">
                {item?.icon}
              </div>
            </Tooltip>
          </button>
        ))}
      </div>
    </div>
  )
}
