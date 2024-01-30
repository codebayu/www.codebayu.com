import React from 'react'

import SocialMedia from '@/common/components/elements/SocialMedia'
import { SOCIAL_MEDIA } from '@/common/constant/menu'
import { CareerProps } from '@/common/types/careers'

import CurrentlyWorking from './CurrentlyWorking'
import GoHome from './GoHome'
import MeProfile from './MeProfile'

export default function MeSection({ careers }: { careers: CareerProps[] }) {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(
    item => item?.isShow && item.title !== 'NPM' && item.title !== 'TikTok'
  )
  return (
    <>
      <MeProfile />
      <CurrentlyWorking careers={careers} />
      <SocialMedia items={filteredSocialMedia} isMePage />
      <GoHome />
    </>
  )
}
