import React from 'react'

export default function LoadingLatestArticle() {
  return (
    <div className="flex h-max min-w-[250px] flex-col space-y-2">
      <div className="h-28 w-full animate-pulse overflow-hidden rounded-md bg-neutral-300 dark:bg-neutral-700"></div>
      <div className="h-4 w-full animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
      <div className="h-2 w-24 animate-pulse rounded bg-neutral-300 dark:bg-neutral-700"></div>
    </div>
  )
}
