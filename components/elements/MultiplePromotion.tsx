'use client'

import AdsBanner from '@/components/elements/AdsPlaceholder'
import { fetcher } from '@/services/fetcher'
import useSWR from 'swr'

import { IAdsBanner } from '@/common/types/ads'

interface MultiplePromotionProps {
  path: string
}

export default function MultiplePromotion({ path }: MultiplePromotionProps) {
  const { data, isLoading, error } = useSWR('/api/ads/banner', fetcher)
  if (isLoading) return
  const banners: IAdsBanner[] = data?.data?.filter((item: IAdsBanner) => item?.showingOn?.includes(path))
  if (!banners.length || error) return null
  return (
    <div className="mt-6 flex flex-col items-center gap-2">
      {banners?.map((banner: IAdsBanner, index: number) => <AdsBanner key={index} data={banner} />)}
    </div>
  )
}
