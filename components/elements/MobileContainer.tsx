import React from 'react'

export default function MobileContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-36 w-max overflow-hidden rounded-lg border bg-neutral-100 dark:border-neutral-700  dark:bg-neutral-950">
      <div className="flex items-center justify-center gap-1 border-b bg-neutral-200 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="h-1 w-4 rounded-full bg-neutral-300 dark:bg-neutral-600" />
      </div>
      <div className="flex flex-col gap-1 p-2">{children}</div>
      <div className="absolute bottom-0 flex w-full items-center justify-around gap-1 border-t bg-neutral-200 px-3 py-1 dark:border-neutral-700 dark:bg-neutral-900">
        {[1, 2, 3].map(item => (
          <div key={item} className="h-2 w-2 rounded-full bg-neutral-300  dark:bg-neutral-700" />
        ))}
      </div>
    </div>
  )
}
