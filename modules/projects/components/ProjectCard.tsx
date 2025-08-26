import Link from 'next/link'

import { Card } from '@/components/elements/Card'
import Image from '@/components/elements/Image'
import Tooltip from '@/components/elements/Tooltip'

import { PLACEHOLDER_URL } from '@/common/constant'
import { STACKS } from '@/common/constant/stacks'
import { getCloudinaryUrl } from '@/common/libs/cloudinary'
import { IProjectItem } from '@/common/types/projects'

export default function ProjectCard({ title, slug, description, image, stacks, is_featured }: IProjectItem) {
  const trimmedContent = description.slice(0, 70) + (description.length > 70 ? '...' : '')
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="relative cursor-pointer border border-neutral-200 bg-gradient-to-br from-white to-neutral-100 dark:border-neutral-700 dark:from-neutral-800 dark:to-neutral-900 lg:hover:scale-[102%] lg:hover:border-neutral-300 dark:lg:hover:border-teal-300">
        {is_featured && (
          <div className="absolute right-0 top-0 z-[2] rounded-bl-xl rounded-tr-xl bg-emerald-300 px-2 py-1 text-[13px] font-medium text-emerald-950">
            Featured
          </div>
        )}
        <div className="relative aspect-video w-full overflow-hidden rounded-t-xl object-cover object-left">
          <Image
            src={getCloudinaryUrl(image) || PLACEHOLDER_URL}
            width={400}
            height={200}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-2 p-5">
          <div className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
            {title}
          </div>
          <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">{trimmedContent}</p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {stacks?.map((stack: string, index: number) => (
              <div key={index} className="w-6">
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  )
}
