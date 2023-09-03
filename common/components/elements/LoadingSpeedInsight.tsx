import React from 'react';
import { BsThreeDots } from 'react-icons/bs';

export default function LoadingSpeedInsight() {
  return (
    <div className="my-6 flex text-neutral-600 md:text-sm justify-center items-end space-x-6 md:space-x-10">
      {[1, 2, 3, 4].map(item => (
        <div key={item} className="flex flex-col w-max text-center items-center justify-center space-y-2">
          <div className="h-3 w-16 md:w-[82px] bg-neutral-300 dark:bg-neutral-700 animate-pulse rounded-full"></div>
          <div className="w-12 md:w-16 h-12 md:h-16 p-[6px] bg-neutral-300 dark:bg-neutral-700 animate-pulse rounded-full">
            <div className="w-full h-full rounded-full bg-white dark:bg-neutral-900 flex items-center justify-center">
              <BsThreeDots />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
