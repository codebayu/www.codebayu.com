import Image from 'next/image'
import { useRouter } from 'next/navigation'

import React from 'react'

import { PLACEHOLDER_URL } from '@/common/constant'
import { formatDate } from '@/common/helpers'
import { sendDataLayer } from '@/common/libs/gtm'
import { BlogItem } from '@/common/types/blog'
import { ContentProps } from '@/common/types/learn'

interface LatestArticleCardProps {
  data: BlogItem
  learns: ContentProps[]
}

export default function LatestArticleCard({ data, learns }: LatestArticleCardProps) {
  const router = useRouter()
  const title = data?.title.slice(0, 30) + (data.title.length > 20 ? '...' : '')

  function handleCardClick() {
    sendDataLayer({
      event: 'article_clicked',
      article_id: data.id,
      article_title: data.title,
      article_collection_id: data.collection_id || ''
    })
    router.push(generateDetailUrl())
  }

  function generateDetailUrl() {
    if (!data.collection_id) return `/blog/${data.slug}?id=${data.id}&read-mode=true`
    const collection = learns.find(collection => collection.id === data.collection_id)
    return `/learn/${collection?.slug}/${data.slug}?id=${data.id}&read-mode=true`
  }

  return (
    <button
      onClick={handleCardClick}
      className="min-w-[250px] h-max animate-slide-card flex flex-col space-y-1 hover:scale-95 duration-500"
    >
      <div className="w-full h-28 overflow-hidden rounded-md">
        <Image
          src={data.cover_image || PLACEHOLDER_URL}
          alt={data.title}
          width={200}
          height={200}
          className="rounded-md w-full h-full object-cover"
          priority
        />
      </div>
      <p className=" text-sm text-neutral-800 dark:text-neutral-300">{title}</p>
      <span className=" text-[10px] text-neutral-600 dark:text-neutral-400">
        {formatDate(data.published_at, 'MMM dd, yyyy')}
      </span>
    </button>
  )
}
