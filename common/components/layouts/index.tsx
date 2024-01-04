'use client'

import dynamic from 'next/dynamic'
import { usePathname, useSearchParams } from 'next/navigation'

import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { ReactNode, useEffect } from 'react'

import BottomNavigation from './LeftCollapseNavigation'
import MobileHeader from './MobileHeader'

const Notif = dynamic(() => import('@/common/components/elements/Notif'), { ssr: false })

interface LayoutsProps {
  children: ReactNode
}

export default function Layouts({ children }: LayoutsProps) {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const readMode = searchParams.get('read-mode')

  const hideSidebar = ['/me', '/board'].includes(pathName) || readMode === 'true'

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    })
  }, [])
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-5">
        {!hideSidebar && <MobileHeader />}
        <main className="lg:max-w-[854px] lg:ml-10 transition-all scroll-smooth duration-300 w-full lg:min-h-screen no-scrollbar">
          {children}
        </main>
      </div>
      {!hideSidebar && <BottomNavigation />}
      <Notif />
    </div>
  )
}
