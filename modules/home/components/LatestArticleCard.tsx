import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'

import Ribbon from '@/components/elements/Ribbon'

import { PLACEHOLDER_URL } from '@/common/constant'
import { formatDate } from '@/common/helpers'
import { sendDataLayer } from '@/common/libs/gtm'
import { BlogItem } from '@/common/types/blog'
import { ILearn } from '@/common/types/learn'

interface LatestArticleCardProps {
  data: BlogItem
  learns: ILearn[]
  index: number
}

export default function LatestArticleCard({ data, learns, index }: LatestArticleCardProps) {
  const router = useRouter()
  const pathname = usePathname()
  const title = data?.title.slice(0, 30) + (data.title.length > 20 ? '...' : '')

  function handleCardClick() {
    sendDataLayer({
      event: 'article_clicked',
      article_id: data.id,
      article_title: data.title,
      article_collection_id: data.collection_id || '',
      page_path: pathname
    })
    router.push(generateDetailUrl())
  }

  function generateDetailUrl() {
    if (!data.collection_id) return `/blog/${data.slug}?id=${data.id}&read-mode=true`
    const collection = learns.find(collection => collection.id === `${data.collection_id}`)
    return `/learn/${collection?.slug}/${data.slug}?id=${data.id}&read-mode=true`
  }

  return (
    <button
      onClick={handleCardClick}
      className="relative w-full animate-slide-card transition hover:scale-95 hover:duration-500"
    >
      <div className="relative z-10 flex h-max w-full min-w-[250px] flex-col items-start space-y-1 ">
        <div className="3xl:h-48 relative h-28 w-full overflow-hidden rounded-md lg:h-40">
          <Image
            src={data.cover_image || PLACEHOLDER_URL}
            alt={data.title}
            fill
            className="h-full w-full rounded-md object-cover"
            priority
          />
        </div>
        <p className=" 3xl:text-base text-sm text-neutral-800 dark:text-neutral-300">{title}</p>
        <span className=" text-[10px] text-neutral-600 dark:text-neutral-400">
          {formatDate(data.published_at, 'MMM dd, yyyy')}
        </span>
      </div>
      {index === 0 && <Ribbon text="New" />}
    </button>
  )
}
