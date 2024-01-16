import React from 'react'

export default function TaskLoading() {
  return (
    <div className="mt-8 flex min-h-[70vh] w-full flex-col md:flex-row md:space-x-10">
      {[1, 2, 3].map(item => (
        <div key={item} className="flex w-full flex-col rounded-md">
          <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
            <div className="h-2 w-28 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
            <div className="h-5 w-5 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
          </div>

          <div className="flex flex-col pt-5">
            {[1, 2, 3].map(item => (
              <div
                key={item}
                className="mb-4 space-y-2 rounded-xl bg-white p-4 shadow-[rgba(13,_38,_76,_0.15)_0px_7px_10px] dark:bg-neutral-800"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-2 w-10 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
                  <div className="h-5 w-5 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
                </div>
                <div className="h-3 w-full animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
                <div className="h-3 w-full animate-pulse rounded bg-neutral-300 dark:bg-neutral-700" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
