'use client'

import EmptyState from '@/components/elements/EmptyState'
import { fetcher } from '@/services/fetcher'
import { motion } from 'framer-motion'
import { useMemo } from 'react'
import useSWR from 'swr'

import { DEVTO_BLOG_API } from '@/common/constant'
import { BlogItem } from '@/common/types/blog'
import { ILearn } from '@/common/types/learn'

import LearnSubContentItem from './LearnSubContentItem'

interface ContentListsProps {
  content: ILearn
}
export default function ContentLists({ content }: ContentListsProps) {
  const { data, isLoading } = useSWR(DEVTO_BLOG_API, fetcher, {
    revalidateOnMount: true
  })

  const learns: BlogItem[] = useMemo(() => {
    if (!data) return []
    const filteredLearns = data.filter((blog: BlogItem) => {
      return `${blog.collection_id}` === content.id
    })
    filteredLearns.sort((a: BlogItem, b: BlogItem) => {
      const dateA = new Date(a.created_at)
      const dateB = new Date(b.created_at)
      return dateA.getTime() - dateB.getTime()
    })
    return filteredLearns
  }, [data, content.id])

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        {[1, 2, 3].map(item => (
          <div key={item} className="h-14 animate-pulse rounded-xl bg-neutral-300 dark:bg-neutral-700" />
        ))}
      </div>
    )
  }

  if (learns.length === 0 && !isLoading) {
    return <EmptyState message="No Data" />
  }

  return (
    <div className="flex flex-col gap-3">
      {learns?.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <LearnSubContentItem
            parent={content.title}
            contentSlug={content?.slug}
            subContentSlug={item?.slug}
            title={item.title}
            language={content.language}
            difficulty={content.level}
            postId={`${item.id}`}
          />
        </motion.div>
      ))}
    </div>
  )
}
