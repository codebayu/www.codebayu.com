import Card from '@/app/common/components/elements/Card';
import Image from '@/app/common/components/elements/Image';
import Tooltip from '@/app/common/components/elements/Tooltip';
import { STACKS } from '@/app/common/constant/stacks';
import { IProjectItem } from '@/app/common/types/projects';
import Link from 'next/link';
import React from 'react';

export default function ProjectCard({
  title,
  slug,
  description,
  image,
  stacks,
  is_featured,
}: IProjectItem) {
  const stacksArray = JSON.parse(stacks);
  return (
    <Link href={`/projects/${slug}`}>
      <Card className="relative border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-800 lg:hover:scale-[102%] cursor-pointer">
        {is_featured && (
          <div className="absolute top-0 right-0 bg-emerald-300 text-emerald-950 text-[13px] font-medium py-1 px-2 rounded-bl-xl rounded-tr-xl z-[2]">
            Featured
          </div>
        )}
        <Image
          src={image}
          width={400}
          height={200}
          alt={title}
          className="rounded-t-xl h-48 object-cover object-left"
        />
        <div className="p-5 space-y-2">
          <div className="flex justify-between">
            <div className="text-lg font-sora cursor-pointer text-neutral-700 dark:text-neutral-300 lg:hover:text-teal-800 dark:hover:text-teal-400 transition-all duration-300">
              {title}
            </div>
          </div>
          <p className="text-neutral-700 dark:text-neutral-400 text-[15px] leading-relaxed">
            {description}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {stacksArray?.map((stack: string, index: number) => (
              <div key={index}>
                <Tooltip title={stack}>{STACKS[stack]}</Tooltip>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
}
