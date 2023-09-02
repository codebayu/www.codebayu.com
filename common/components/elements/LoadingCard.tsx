import React, { useEffect, useState } from 'react';

import useIsMobile from '@/hooks/useIsMobile';

import clsxm from '../../libs/clsxm';

export default function LoadingCard({ view }: { view: string }) {
  const [viewOption, setViewOption] = useState<string>();
  const isMobile = useIsMobile();

  useEffect(() => {
    isMobile ? setViewOption('grid') : setViewOption(view);
  }, [isMobile, view]);
  return (
    <div
      className={clsxm(
        'w-full flex border border-neutral-200 dark:border-none dark:bg-neutral-800 rounded-xl overflow-hidden',
        viewOption === 'grid' ? 'flex-col sm:w-full' : ''
      )}
    >
      <div
        className={clsxm(
          'animate-pulse bg-neutral-300 dark:bg-neutral-700',
          viewOption === 'grid' ? 'h-48' : 'h-32 m-6 mr-0 rounded-xl w-52'
        )}
      ></div>
      <div className="flex flex-col flex-1 space-y-6 p-7">
        <div className="h-4 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        <div className="flex space-x-4">
          <div
            className={clsxm(
              'h-2 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded',
              viewOption === 'grid' ? 'w-full' : 'w-20'
            )}
          ></div>
          <div
            className={clsxm(
              'h-2 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded',
              viewOption === 'grid' ? 'w-full' : 'w-20'
            )}
          ></div>
          <div
            className={clsxm(
              'h-2 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded',
              viewOption === 'grid' ? 'w-full' : 'w-20'
            )}
          ></div>
        </div>
        <div className="flex flex-col space-y-3">
          <div className="h-2 w-full animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded"></div>
          <div className="h-2 w-full animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded"></div>
          <div className="h-2 w-full animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}
