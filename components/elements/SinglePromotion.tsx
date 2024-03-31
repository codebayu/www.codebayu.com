'use client'

import AdsBanner from '@/components/elements/AdsPlaceholder'
import Skeleton from '@/components/elements/Skeleton'
import { fetcher } from '@/services/fetcher'
import useSWR from 'swr'

import { IAdsBanner } from '@/common/types/ads'

interface SinglePromotionProps {
  path: string
}

export default function SinglePromotion({ path }: SinglePromotionProps) {
  const { data, isLoading, error } = useSWR('/api/ads/banner', fetcher)
  if (isLoading) return <Skeleton className="h-10 w-72" />
  const banner: IAdsBanner = data?.data?.find((item: IAdsBanner) => item?.showingOn?.includes(path))
  if (!banner || error) return null
  return <AdsBanner data={banner} />
}
