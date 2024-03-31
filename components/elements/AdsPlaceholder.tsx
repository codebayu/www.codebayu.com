'use client'

import Image from 'next/image'
import Link from 'next/link'

import React from 'react'

import clsxm from '@/common/libs/clsxm'
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
      className={clsxm(
        'rounded-smfont-sans relative flex justify-center overflow-hidden text-neutral-900 dark:bg-neutral-700 md:justify-start',
        className,
        fontSize
      )}
      target="_blank"
    >
      <div className="absolute h-full w-full animate-pulse bg-sky-200"></div>
      <div className="relative flex items-center space-x-2 px-2 py-1">
        <Image src={data.image} alt="promote icon" width={30} height={30} />
        <p>{data.text || 'Iklan'}</p>
      </div>
    </Link>
  ) : null
}
