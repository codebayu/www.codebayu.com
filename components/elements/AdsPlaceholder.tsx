'use client'

import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/common/libs/cn'
import { IAdsBanner } from '@/common/types/ads'

interface AdsBannerProps {
  className?: string
  data: IAdsBanner
}

export default function AdsBanner({ className = 'w-72 h-full', data }: AdsBannerProps) {
  const fontSize = data.text.length < 40 ? 'text-xs' : 'text-[10px]'
  return data.isShow ? (
    <Link
      href={data.link}
      className={cn(
        'rounded-smfont-sans relative flex justify-center overflow-hidden rounded-sm border border-sky-100 bg-sky-50 text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300 md:justify-start',
        className,
        fontSize
      )}
      target="_blank"
    >
      <div className="absolute h-full w-full animate-pulse bg-gradient-to-br from-sky-100 to-sky-200 dark:from-neutral-800 dark:to-neutral-900"></div>
      <div className="relative flex items-center space-x-2 px-2 py-1">
        <Image src={data.image} alt="promote icon" width={30} height={30} />
        <p>{data.text || 'Iklan'}</p>
      </div>
    </Link>
  ) : null
}
