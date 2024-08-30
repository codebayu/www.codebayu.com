import MultiplePromotion from '@/components/elements/MultiplePromotion'
import SocialMedia from '@/components/elements/SocialMedia'

import { SOCIAL_MEDIA } from '@/common/constant/menu'
import { IAdsBanner } from '@/common/types/ads'
import { ICareer } from '@/common/types/careers'

import CurrentlyWorking from './CurrentlyWorking'
import GoHome from './GoHome'
import MeProfile from './MeProfile'

export default function MeSection({ careers, promotions }: { careers: ICareer[]; promotions: IAdsBanner[] }) {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter(item => item.title !== 'NPM' && item.title !== 'TikTok')
  return (
    <section className="min-h-screen">
      <MeProfile />
      <CurrentlyWorking careers={careers} />
      <SocialMedia items={filteredSocialMedia} isMePage />
      <GoHome />
      <MultiplePromotion data={promotions} />
    </section>
  )
}
