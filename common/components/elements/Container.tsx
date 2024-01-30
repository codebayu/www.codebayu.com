'use client'

import { useSearchParams } from 'next/navigation'

import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  [propName: string]: ReactNode | string | undefined
  withMarginTop?: boolean
}

export default function Container({ children, className = '', withMarginTop = true, ...others }: ContainerProps) {
  const searchParams = useSearchParams()
  const readMode = searchParams?.get('read-mode')
  return (
    <div
      data-testid="container"
      className={`mb-10 ${(readMode !== 'true' || withMarginTop) && 'mt-6'} p-4 md:p-8 lg:pr-0 ${className}`}
      {...others}
    >
      {children}
    </div>
  )
}
