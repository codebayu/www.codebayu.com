import { SOCIAL_MEDIA } from '@/common/constant/menu'

import ContactCard from './ContactCard'

export default function ContactList() {
  return (
    <div className="flex flex-col space-y-4">
      <h2>Find me on</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {SOCIAL_MEDIA.map(media => (
          <ContactCard {...media} key={media.id} />
        ))}
      </div>
    </div>
  )
}
