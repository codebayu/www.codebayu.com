import { useEffect, useState } from 'react'

import { cn } from '@/common/libs/cn'

import useIsMobile from '@/hooks/useIsMobile'

export default function LoadingCard({ view }: { view: string }) {
  const [viewOption, setViewOption] = useState<string>()
  const isMobile = useIsMobile()

  useEffect(() => {
    isMobile ? setViewOption('grid') : setViewOption(view)
  }, [isMobile, view])
  return (
    <div
      className={cn(
        'flex w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-none dark:bg-neutral-800',
        viewOption === 'grid' ? 'flex-col sm:w-full' : ''
      )}
    >
      <div
        className={cn(
          'animate-pulse bg-neutral-300 dark:bg-neutral-700',
          viewOption === 'grid' ? 'h-48' : 'm-6 mr-0 h-32 w-52 rounded-xl'
        )}
      ></div>
      <div className="flex flex-1 flex-col space-y-6 p-7">
        <div className="h-4 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
        <div className="flex space-x-4">
          <div
            className={cn(
              'h-2 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700',
              viewOption === 'grid' ? 'w-full' : 'w-20'
            )}
          ></div>
          <div
            className={cn(
              'h-2 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700',
              viewOption === 'grid' ? 'w-full' : 'w-20'
            )}
          ></div>
          <div
            className={cn(
              'h-2 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700',
              viewOption === 'grid' ? 'w-full' : 'w-20'
            )}
          ></div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="h-2 w-full animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
          <div className="h-2 w-full animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
          <div className="h-2 w-full animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
        </div>
      </div>
    </div>
  )
}
