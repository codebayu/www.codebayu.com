import Link from 'next/link'

import React from 'react'

import { SOCIAL_MEDIA } from '@/common/constant/menu'
import clsxm from '@/common/libs/clsxm'

export default function ContactList() {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow)

  return (
    <div className="flex flex-col space-y-4">
      <h2>Find me on</h2>
      <div className="flex flex-wrap gap-3">
        {filteredSocialMedia.map(media => (
          <Link
            href={media.href}
            target="_blank"
            key={media.title}
            className={clsxm(
              'flex text-white shadow-lg w-full md:w-max justify-center items-center px-4 py-2 space-x-2 rounded-lg',
              media.backgroundColor
            )}
          >
            {media.icon}
            <span className="text-sm">{media.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
