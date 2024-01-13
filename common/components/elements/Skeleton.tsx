import React from 'react'

import clsxm from '@/common/libs/clsxm'

interface SkeletonProps {
  className?: string
}

export default function Skeleton({ className = 'rounded-md w-full h-full' }: SkeletonProps) {
  return <div data-testid="skeleton" className={clsxm('bg-neutral-300 dark:bg-neutral-700 animate-pulse', className)} />
}
