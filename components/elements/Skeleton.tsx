import { cn } from '@/common/libs/cn'

interface SkeletonProps {
  className?: string
}

export default function Skeleton({ className = 'rounded-md w-full h-full' }: SkeletonProps) {
  return <div data-testid="skeleton" className={cn('animate-pulse bg-neutral-300 dark:bg-neutral-700', className)} />
}
