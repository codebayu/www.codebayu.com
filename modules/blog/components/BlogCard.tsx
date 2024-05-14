'use client'

import { usePathname, useRouter } from 'next/navigation'

import Image from '@/components/elements/Image'
import { TbMessage2 as CommentIcon } from 'react-icons/tb'

import { PLACEHOLDER_URL } from '@/common/constant'
import { formatBlogSlug, formatDate } from '@/common/helpers'
import { sendDataLayer } from '@/common/libs/gtm'
import { BlogItem } from '@/common/types/blog'

interface BlogCardProps extends BlogItem {
  view?: string
  isExcerpt?: boolean
  isCarousel?: boolean
}

export default function BlogCard({
  id,
  title,
  cover_image,
  published_at,
  description,
  slug,
  comments_count,
  collection_id
}: BlogCardProps) {
  const router = useRouter()
  const pathname = usePathname()

  const newSlug = formatBlogSlug(slug)

  const trimmedTitle = title.slice(0, 70) + (title.length > 70 ? '...' : '')
  const trimmedContent = description.slice(0, 100) + (description.length > 100 ? '...' : '')

  function handleCardClick() {
    sendDataLayer({
      event: 'article_clicked',
      article_id: id,
      article_title: title,
      article_collection_id: collection_id || '',
      page_path: pathname
    })
    router.push(`/blog/${newSlug}?id=${id}&read-mode=true`)
  }

  return (
    <div className="flex w-full cursor-pointer flex-col text-start" onClick={handleCardClick}>
      <div className="overflow-hidden rounded-lg">
        <Image
          src={cover_image || PLACEHOLDER_URL}
          width={200}
          height={100}
          alt={title}
          className="!h-48 w-full  object-cover"
        />
      </div>
      <article className="mt-4 flex w-full flex-grow flex-col space-y-3 self-center">
        <h2 className="font-medium text-neutral-600 transition-all duration-300 dark:text-neutral-200 dark:hover:text-teal-400 md:text-[17px] lg:hover:text-teal-800">
          {trimmedTitle}
        </h2>
        <div className="flex gap-4 text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-1 ">
            <span className="text-xs">{formatDate(published_at, 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center gap-1">
            <CommentIcon size={16} />
            <span className="text-xs">
              <div className="flex gap-1">
                <span>{comments_count}</span>
                <span className="hidden lg:block">Comment{comments_count > 1 && 's'}</span>
              </div>
            </span>
          </div>
        </div>
        <p className="hidden text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:block">
          {trimmedContent}
        </p>
      </article>
    </div>
  )
}
