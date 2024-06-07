import { ReactNode } from 'react'

export type MenuItemProps = {
  title: string
  href: string
  icon: JSX.Element
  isShow?: boolean
  isExternal: boolean
  onClick?: () => void
  className?: string
  children?: ReactNode
  eventName?: string
  backgroundColor?: string
  isHover?: boolean
}

export interface SocialMedia {
  id: string
  title: string
  description: string
  href: string
  icon: ReactNode
  classContainer: string
  classText: string
  classLink: string
  classIcon: string
}
