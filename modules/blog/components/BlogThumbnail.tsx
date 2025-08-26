import Image from 'next/image'
import Link from 'next/link'

import { TbMessage2 as CommentIcon } from 'react-icons/tb'

import { PLACEHOLDER_URL } from '@/common/constant'
import { formatBlogSlug, formatDate } from '@/common/helpers'
import { BlogItem } from '@/common/types/blog'

export default function BlogThumbnail({ newestBlog }: { newestBlog: BlogItem }) {
  return (
    <Link
      href={`/blog/${formatBlogSlug(newestBlog.slug)}?id=${newestBlog.id}&read-mode=true`}
      className="w-full cursor-pointer space-y-3"
    >
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg">
        <Image
          src={newestBlog.cover_image || PLACEHOLDER_URL}
          fill
          alt={newestBlog.title}
          className="h-full w-full object-cover"
        />
      </div>
      <h2 className="font-medium text-neutral-600 transition-all duration-300 dark:text-neutral-200 md:text-xl 3xl:text-3xl">
        {newestBlog.title}
      </h2>
      <div className="flex flex-col justify-between space-y-2 text-neutral-600 dark:text-neutral-400 md:flex-row md:space-y-0">
        <div className="flex gap-2">
          {newestBlog.tag_list.map((tag: string, index: number) => (
            <span key={index} className="text-xs 3xl:text-base">
              #{tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <span className="text-xs 3xl:text-base">{formatDate(newestBlog.published_at, 'MMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center gap-1">
            <CommentIcon size={16} />
            <span className="text-xs 3xl:text-base">
              <div className="flex gap-1">
                <span>{newestBlog.comments_count}</span>
                <span className="hidden lg:block">Comment{newestBlog.comments_count > 1 && 's'}</span>
              </div>
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
