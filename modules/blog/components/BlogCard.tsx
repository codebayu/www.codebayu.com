import Link from 'next/link';

import { useEffect, useState } from 'react';
import { FaRegEye as ViewIcon } from 'react-icons/fa';
import { TbMessage2 as CommentIcon } from 'react-icons/tb';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { PLACEHOLDER_URL } from '@/common/constant';
import { formatBlogSlug, formatDate } from '@/common/helpers';
import clsxm from '@/common/libs/clsxm';
import { BlogItem } from '@/common/types/blog';

import useIsMobile from '@/hooks/useIsMobile';

interface BlogCardProps extends BlogItem {
  view?: string;
  isExcerpt?: boolean;
  isCarousel?: boolean;
}

export default function BlogCard({
  id,
  title,
  cover_image,
  published_at,
  description,
  page_views_count,
  slug,
  comments_count,
  view,
  isExcerpt = true,
  isCarousel = false
}: BlogCardProps) {
  const [viewOption, setViewOption] = useState<string>();
  const isMobile = useIsMobile();

  const newSlug = formatBlogSlug(slug);

  const trimmedTitle = viewOption === 'grid' ? title.slice(0, 70) + (title.length > 70 ? '...' : '') : title;
  const trimmedContent = description.slice(0, 100) + (description.length > 100 ? '...' : '');

  const contentContainerClasses = clsxm(
    'flex flex-col self-center w-full sm:w-4/5 flex-grow space-y-3 px-5 sm:p-0 mb-5 sm:mb-0',
    view === 'grid' ? 'sm:w-full sm:!px-6' : ''
  );

  useEffect(() => {
    isMobile ? setViewOption('grid') : setViewOption(view);
  }, [isMobile, view]);

  return (
    <Link href={`/blog/${newSlug}?id=${id}`}>
      <Card
        className={clsxm(
          'flex items-center sm:flex-row gap-6 cursor-pointer border border-neutral-300 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%] w-full',
          viewOption === 'grid' ? '!flex-col sm:h-[400px] w-full' : '!flex-row sm:p-5 sm:px-6',
          isCarousel && 'min-w-[350px]',
          !isExcerpt && 'sm:h-[320px]'
        )}
      >
        <div className="w-fit">
          <Image
            src={cover_image || PLACEHOLDER_URL}
            width={isMobile || viewOption === 'grid' ? 400 : 240}
            height={100}
            alt={title}
            className={clsxm(
              'sm:rounded-xl sm:h-[8.5rem] object-cover',
              viewOption === 'grid' ? '!rounded-t-xl !rounded-b-none !h-48' : ''
            )}
          />
        </div>
        <article className={contentContainerClasses}>
          <h2 className="md:text-[17px] font-medium text-neutral-600 dark:text-neutral-200 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
            {trimmedTitle}
          </h2>
          <div className="flex gap-4 text-neutral-600 dark:text-neutral-400">
            <div className="flex gap-1 items-center ">
              <span className="text-xs">{formatDate(published_at, 'MMM dd, yyyy')}</span>
            </div>
            <div className="flex gap-1 items-center">
              <ViewIcon size={14} />
              <span className="text-xs ml-0.5">{page_views_count} Views</span>
            </div>
            <div className="flex gap-1 items-center">
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
            <p className="hidden sm:block leading-relaxed text-sm text-neutral-600 dark:text-neutral-400">
              {trimmedContent}
            </p>
          )}
        </article>
      </Card>
    </Link>
  );
}
