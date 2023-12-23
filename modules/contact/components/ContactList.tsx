import React from 'react'

import { SOCIAL_MEDIA } from '@/common/constant/menu'

import ContactCard from './ContactCard'

export default function ContactList() {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow)

  return (
    <div className="flex flex-col space-y-4">
      <h2>Find me on</h2>
      <div className="flex flex-wrap gap-3">
        {filteredSocialMedia.map(media => (
          <ContactCard {...media} key={media.title} />
        ))}
      </div>
    </div>
  )
}
