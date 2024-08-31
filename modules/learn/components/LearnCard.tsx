import Link from 'next/link'

import { Card } from '@/components/elements/Card'
import Image from '@/components/elements/Image'

import { getCloudinaryUrl } from '@/common/libs/cloudinary'
import { ILearn } from '@/common/types/learn'

export default function LearnCard({ title, slug, description, image, is_new }: ILearn) {
  return (
    <Link href={`/learn/${slug}`}>
      <Card className="relative cursor-pointer border border-neutral-200 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%]">
        {is_new && (
          <div className="absolute right-0 top-0 z-[2] rounded-bl-xl rounded-tr-xl bg-green-200 px-2 py-1 text-[13px] font-medium text-emerald-950">
            New!
          </div>
        )}
        <Image
          src={getCloudinaryUrl(image)}
          width={400}
          height={200}
          alt={title}
          className="h-48 rounded-t-xl object-cover object-left"
        />
        <div className="flex flex-col justify-between space-y-2 p-5">
          <div className="flex justify-between">
            <div className="font-sora cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:hover:text-teal-400 lg:hover:text-teal-800">
              {title}
            </div>
          </div>
          <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">{description}</p>
        </div>
      </Card>
    </Link>
  )
}
