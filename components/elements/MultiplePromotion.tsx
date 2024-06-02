import AdsBanner from '@/components/elements/AdsPlaceholder'

import { IAdsBanner } from '@/common/types/ads'

interface MultiplePromotionProps {
  data?: IAdsBanner[]
}

export default function MultiplePromotion({ data }: MultiplePromotionProps) {
  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      {data?.map((banner: IAdsBanner, index: number) => <AdsBanner key={index} data={banner} />)}
    </div>
  )
}
