import React from 'react'

export default function TaskLoading() {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-[70vh] md:space-x-10 mt-8">
      {[1, 2, 3].map(item => (
        <div key={item} className="flex flex-col w-full rounded-md">
          <div className="flex justify-between items-center text-neutral-700 dark:text-neutral-300">
            <div className="h-2 w-28 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded" />
            <div className="h-5 w-5 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded" />
          </div>

          <div className="flex flex-col pt-5">
            {[1, 2, 3].map(item => (
              <div
                key={item}
                className="p-4 mb-4 shadow-[rgba(13,_38,_76,_0.15)_0px_7px_10px] space-y-2 rounded-xl bg-white dark:bg-neutral-800"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="h-2 w-10 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded" />
                  <div className="h-5 w-5 animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded" />
                </div>
                <div className="h-3 w-full animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded" />
                <div className="h-3 w-full animate-pulse bg-neutral-300 dark:bg-neutral-700 rounded" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
