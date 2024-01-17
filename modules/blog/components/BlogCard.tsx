import { usePathname, useRouter } from 'next/navigation'

import { useEffect, useState } from 'react'
import { TbMessage2 as CommentIcon } from 'react-icons/tb'

import Card from '@/common/components/elements/Card'
import Image from '@/common/components/elements/Image'
import { PLACEHOLDER_URL } from '@/common/constant'
import { formatBlogSlug, formatDate } from '@/common/helpers'
import clsxm from '@/common/libs/clsxm'
import { sendDataLayer } from '@/common/libs/gtm'
import { BlogItem } from '@/common/types/blog'

import useIsMobile from '@/hooks/useIsMobile'

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
  view,
  isExcerpt = true,
  isCarousel = false,
  collection_id
}: BlogCardProps) {
  const [viewOption, setViewOption] = useState<string>()
  const isMobile = useIsMobile()
  const router = useRouter()
  const pathname = usePathname()

  const newSlug = formatBlogSlug(slug)

  const trimmedTitle = viewOption === 'grid' ? title.slice(0, 70) + (title.length > 70 ? '...' : '') : title
  const trimmedContent = description.slice(0, 100) + (description.length > 100 ? '...' : '')

  const contentContainerClasses = clsxm(
    'flex flex-col self-center w-full sm:w-4/5 flex-grow space-y-3 px-5 sm:p-0 mb-5 sm:mb-0',
    view === 'grid' ? 'sm:w-full sm:!p-6' : ''
  )

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

  useEffect(() => {
    isMobile ? setViewOption('grid') : setViewOption(view)
  }, [isMobile, view])

  return (
    <Card
      onClick={handleCardClick}
      className={clsxm(
        'flex w-full cursor-pointer items-center gap-6 border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 sm:flex-row lg:hover:scale-[102%]',
        viewOption === 'grid' ? 'w-full !flex-col sm:h-full' : '!flex-row sm:p-5 sm:px-6',
        isCarousel && 'min-w-[350px]',
        !isExcerpt && 'sm:h-[320px]'
      )}
    >
      <div className={`${viewOption === 'grid' ? 'w-full' : 'w-fit'}`}>
        <Image
          src={cover_image || PLACEHOLDER_URL}
          width={isMobile || viewOption === 'grid' ? 400 : 240}
          height={100}
          alt={title}
          className={clsxm(
            'w-full object-cover sm:h-[8.5rem] sm:rounded-xl',
            viewOption === 'grid' ? '!h-48 !rounded-b-none !rounded-t-xl' : ''
          )}
        />
      </div>
      <article className={contentContainerClasses}>
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
        {isExcerpt && (
          <p className="hidden text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 sm:block">
            {trimmedContent}
          </p>
        )}
      </article>
    </Card>
  )
}
