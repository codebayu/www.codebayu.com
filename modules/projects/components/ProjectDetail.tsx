import Image from 'next/image'

import MDXComponent from '@/common/components/elements/MDXComponent'
import Tooltip from '@/common/components/elements/Tooltip'
import { STACKS } from '@/common/constant/stacks'
import { getCloudinaryUrl } from '@/common/libs/cloudinary'
import { IProjectItem } from '@/common/types/projects'

import ProjectLink from './ProjectLink'

export default function ProjectDetail({ title, image, stacks, link_demo, link_github, content }: IProjectItem) {
  return (
    <div className="space-y-8 overflow-hidden">
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row lg:flex-row lg:items-center">
        <div className="flex flex-wrap items-center gap-2">
          <span className="mb-1 text-[15px] text-neutral-700 dark:text-neutral-300">Tech Stack :</span>
          <div className="flex flex-wrap items-center gap-3">
            {stacks?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>
                  <div className="w-5">{STACKS[stack]}</div>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
        <ProjectLink title={title} link_demo={link_demo || ''} link_github={link_github || ''} />
      </div>
      <Image
        src={getCloudinaryUrl(image)}
        width={800}
        height={400}
        alt={title}
        className="transition-all duration-300 hover:scale-105"
      />
      {content && (
        <div className="mt-5 space-y-6 leading-[1.8] dark:text-neutral-300">
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
    </div>
  )
}
