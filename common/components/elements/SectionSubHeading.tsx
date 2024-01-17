import { ReactNode } from 'react'

interface SectionSubHeadingProps {
  children?: ReactNode
}

export default function SectionSubHeading({ children }: SectionSubHeadingProps) {
  return (
    <div className="flex flex-col justify-between gap-2 text-neutral-600 dark:text-neutral-400 md:flex-row lg:items-center">
      {children}
    </div>
  )
}
