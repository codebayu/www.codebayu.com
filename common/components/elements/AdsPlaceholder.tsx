'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { fetcher } from '@/services/fetcher'
import React from 'react'
import useSWR from 'swr'

import clsxm from '@/common/libs/clsxm'

interface AdsBannerProps {
  className?: string
}

export default function AdsBanner({ className = 'w-72 h-full' }: AdsBannerProps) {
  const { data, isLoading } = useSWR('/api/ads/banner', fetcher)
  const pathname = usePathname()

  const banner = data?.data[0]
  const show = banner?.isShow && banner?.showingOn?.includes(pathname)
  if (!show || isLoading) return
  return (
    <Link
      href={banner.link}
      className={clsxm(
        'relative flex justify-center overflow-hidden rounded-sm font-sans text-xs text-neutral-900 dark:bg-neutral-700 md:justify-start',
        className
      )}
    >
      <div className="absolute h-full w-full animate-pulse bg-sky-200"></div>
      <div className="relative flex items-center space-x-2 px-2 py-1">
        <Image src={banner.image} alt="promote icon" width={30} height={30} />
        <p>{banner.text || 'Iklan'}</p>
      </div>
    </Link>
  )
}
