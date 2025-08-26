'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { useTheme } from 'next-themes'

import { BLOG_LINK } from '@/common/constant/menu'
import { cn } from '@/common/libs/cn'

export default function BlogHeader() {
  const { resolvedTheme } = useTheme()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get('category')
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-24 w-24 2xl:h-40 2xl:w-40">
        <Image
          src={resolvedTheme === 'dark' ? '/img/logo-white.png' : '/img/logo-black.png'}
          fill
          alt="logo"
          className="object-cover"
        />
      </div>
      <p className="text-center text-sm text-neutral-600 dark:text-neutral-500 2xl:text-lg">
        Welcome to my blog! Your Source for Expert Tips and Insights!
      </p>

      <nav className="my-6 flex w-full justify-between gap-4 border-y border-neutral-200 p-3 dark:border-neutral-800 md:w-max md:justify-center md:gap-10">
        {BLOG_LINK.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className={cn(
              'text-sm 2xl:text-lg',
              activeCategory === link.value
                ? 'text-emerald-500 dark:text-emerald-300'
                : 'text-neutral-500 dark:text-neutral-300'
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
