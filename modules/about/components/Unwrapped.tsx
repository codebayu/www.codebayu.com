'use client'

import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading'
import Skeleton from '@/components/elements/Skeleton'
import VideoPlayer from '@/components/elements/VideoPlayer'
import { fetcher } from '@/services/fetcher'
import { FaPhotoVideo } from 'react-icons/fa'
import useSWR from 'swr'

export default function Unwrapped() {
  const { data, isLoading } = useSWR('/api/unwrapped', fetcher)

  return (
    <section>
      <div data-testid="unwrapped-section-heading" className="space-y-2">
        <SectionHeading title="Github Unwrapped" icon={<FaPhotoVideo className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My coding journey on {data?.data[0].years ?? '2023'}</p>
        </SectionSubHeading>
      </div>
      <div data-testid="unwrapped-video" className="mt-6 flex aspect-video flex-row items-center justify-center">
        {isLoading ? <Skeleton /> : <VideoPlayer url={data?.data[0].url} />}
      </div>
    </section>
  )
}
