import Link from 'next/link'

import { Card } from '@/components/elements/Card'
import Tooltip from '@/components/elements/Tooltip'
import { BiFile as SubContentIcon } from 'react-icons/bi'

import { STACKS } from '@/common/constant/stacks'
import { cn } from '@/common/libs/cn'
import { SubContentProps } from '@/common/types/learn'

export default function LearnSubContentItem({
  contentSlug,
  subContentSlug,
  title,
  language,
  difficulty = '',
  postId
}: SubContentProps) {
  return (
    <Link href={`/learn/${contentSlug}/${subContentSlug}?id=${postId}&read-mode=true`}>
      <Card
        className={cn(
          'flex w-full cursor-pointer flex-row items-center justify-between border border-neutral-300 px-5 py-4 dark:border-neutral-800 dark:bg-neutral-800 lg:hover:scale-[102%]'
        )}
      >
        <div className="flex items-center gap-3">
          <SubContentIcon size={18} className="hidden md:flex" />
          <h2>{title}</h2>
        </div>
        <div className="hidden items-center gap-5 md:flex">
          {difficulty && (
            <Tooltip title={`Difficulty: ${difficulty}`}>
              <div className="rounded-full bg-neutral-200 px-2 py-1 text-xs font-medium text-neutral-700 dark:bg-neutral-700 dark:text-neutral-400">
                {difficulty}
              </div>
            </Tooltip>
          )}
          {language && (
            <Tooltip title={language}>
              <div className="w-6">{STACKS[language]}</div>
            </Tooltip>
          )}
        </div>
      </Card>
    </Link>
  )
}
