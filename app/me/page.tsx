import { Metadata } from 'next'

import { getCareers, getPromotions } from '@/services/codebayu'

import { METADATA } from '@/common/constant/metadata'
import { IAdsBanner } from '@/common/types/ads'

import MeSection from '@/modules/me'

export const metadata: Metadata = {
  title: `Hi! ${METADATA.exTitle}`,
  description: 'Programming tips for software developer',
  keywords: 'frontend developer, software engineer, react js, javascript, typescript',
  alternates: {
    canonical: `${process.env.DOMAIN}/me`
  }
}

export default async function MePage() {
  const careers = await getCareers()
  const promotions = await getPromotions()
  const promotion = promotions.filter((item: IAdsBanner) => item.showingOn.includes('/me'))
  return <MeSection careers={careers} promotions={promotion} />
}
