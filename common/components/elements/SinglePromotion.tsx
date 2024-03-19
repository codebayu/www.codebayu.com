'use client'

import { fetcher } from '@/services/fetcher'
import React from 'react'
import useSWR from 'swr'

import AdsBanner from '@/common/components/elements/AdsPlaceholder'
import Skeleton from '@/common/components/elements/Skeleton'
import { IAdsBanner } from '@/common/types/ads'

interface SinglePromotionProps {
  path: string
}

export default function SinglePromotion({ path }: SinglePromotionProps) {
  const { data, isLoading } = useSWR('/api/ads/banner', fetcher)
  if (isLoading) return <Skeleton className="h-10 w-72" />
  const banner: IAdsBanner = data?.data.find((item: IAdsBanner) => item.showingOn.includes(path))
  console.log(banner)
  return <AdsBanner data={banner} />
}
