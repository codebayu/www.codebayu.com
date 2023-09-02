import Image from 'next/image';

import MDXComponent from '@/common/components/elements/MDXComponent';
import Tooltip from '@/common/components/elements/Tooltip';
import { STACKS } from '@/common/constant/stacks';
import { IProjectItem } from '@/common/types/projects';

import ProjectLink from './ProjectLink';

export default function ProjectDetail({ title, image, stacks, link_demo, link_github, content }: IProjectItem) {
  const stacksArray = JSON.parse(stacks);

  return (
    <div className="space-y-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start lg:items-center sm:flex-row gap-5 justify-between">
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-[15px] mb-1 text-neutral-700 dark:text-neutral-300">Tech Stack :</span>
          <div className="flex flex-wrap items-center gap-3">
            {stacksArray?.map((stack: string, index: number) => (
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
      <Image src={image} width={800} height={400} alt={title} className="hover:scale-105 transition-all duration-300" />
      {content && (
        <div className="space-y-6 leading-[1.8] dark:text-neutral-300 mt-5">
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
    </div>
  );
}
