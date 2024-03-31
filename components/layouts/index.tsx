'use client'

import dynamic from 'next/dynamic'
import { usePathname, useSearchParams } from 'next/navigation'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { ReactNode, useEffect } from 'react'

import ChatOverlay from '../elements/ChatOverlay'
import RunningText from '../elements/RunningText'
import BottomNavigation from './LeftCollapseNavigation'
import MobileHeader from './MobileHeader'

const Notif = dynamic(() => import('@/components/elements/Notif'), { ssr: false })

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
      <div className="flex w-full flex-col justify-center lg:flex-row lg:gap-5">
        {!hideSidebar && (
          <>
            <MobileHeader /> <RunningText />
          </>
        )}
        <main className="no-scrollbar w-full scroll-smooth transition-all duration-300 lg:ml-10 lg:min-h-screen lg:max-w-[854px]">
          {children}
        </main>
      </div>
      {!hideSidebar && <BottomNavigation />}
      <Notif />
      <ChatOverlay />
    </div>
  )
}
