'use client'

import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading'
import SinglePromotion from '@/components/elements/SinglePromotion'
import { fetcher } from '@/services/fetcher'
import { HiOutlineNewspaper } from 'react-icons/hi'
import useSWR from 'swr'

import { DEVTO_BLOG_API } from '@/common/constant'
import { IAdsBanner } from '@/common/types/ads'
import { BlogItem } from '@/common/types/blog'
import { ILearn } from '@/common/types/learn'

import LatestArticleCard from './LatestArticleCard'
import LoadingLatestArticle from './LoadingLatestArticle'

export default function LatestArticle({ learns, promotion }: { learns: ILearn[]; promotion?: IAdsBanner }) {
  const { data, isLoading } = useSWR(DEVTO_BLOG_API, fetcher, {
    revalidateOnMount: true
  })
  const articles: BlogItem[] = data?.slice(0, 4)

  return (
    <section>
      <div className="space-y-2">
        <SectionHeading title="Latest Articles" icon={<HiOutlineNewspaper className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">Latest articles from dev.to</p>
          <SinglePromotion data={promotion} />
        </SectionSubHeading>
      </div>
      <div className="no-scrollbar mt-4 flex h-40 flex-row space-x-3 overflow-y-hidden overflow-x-scroll pt-2">
        {isLoading
          ? [1, 2, 3, 4].map(item => <LoadingLatestArticle key={item} />)
          : articles.map((article, index) => (
              <LatestArticleCard key={article.id} data={article} learns={learns} index={index} />
            ))}
      </div>
    </section>
  )
}
