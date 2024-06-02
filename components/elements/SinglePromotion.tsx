import AdsBanner from '@/components/elements/AdsPlaceholder'

import { IAdsBanner } from '@/common/types/ads'

interface SinglePromotionProps {
  data?: IAdsBanner
}

export default function SinglePromotion({ data }: SinglePromotionProps) {
  if (!data) return null
  return <AdsBanner data={data} />
}
