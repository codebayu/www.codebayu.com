'use client'

import dynamic from 'next/dynamic'
import { usePathname, useSearchParams } from 'next/navigation'

import AOS from 'aos'
import 'aos/dist/aos.css'
import { ReactNode, useEffect } from 'react'

import ChatOverlay from '../elements/ChatOverlay'
import RunningText from '../elements/RunningText'
import ShiningStar from '../elements/ShiningStar'
import LeftCollapseNavigation from './LeftCollapseNavigation'
import MobileHeader from './MobileHeader'

const Notif = dynamic(() => import('@/components/elements/Notif'), { ssr: false })

interface LayoutsProps {
  children: ReactNode
}

export default function Layouts({ children }: LayoutsProps) {
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const readMode = searchParams.get('read-mode')

  const hideSidebar = ['/me'].includes(pathName) || readMode === 'true'

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50
    })
  }, [])
  return (
    <div className="flex h-full w-full flex-col justify-center overflow-x-hidden">
      <ShiningStar />
      <div className="flex w-full flex-col justify-center lg:flex-row lg:gap-5">
        {!hideSidebar && (
          <>
            <MobileHeader /> <RunningText />
          </>
        )}
        <main className="no-scrollbar h-full w-full scroll-smooth transition-all duration-300 lg:ml-10 lg:min-h-screen lg:max-w-[854px]">
          {children}
        </main>
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808019_1px,transparent_1px),linear-gradient(to_bottom,#80808019_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_80%,transparent_100%)]"></div>
      </div>

      {!hideSidebar && <LeftCollapseNavigation />}
      <Notif />
      <ChatOverlay />
    </div>
  )
}
