'use client'

import Link from 'next/link'

import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import { MdVerified as VerifiedIcon } from 'react-icons/md'

import { PROFILE_URL } from '@/common/constant'

import { useMenu } from '@/stores/menu'

import useIsMobile from '@/hooks/useIsMobile'

import Image from '../elements/Image'
import ToggleThemeIcon from '../elements/ToggleThemeIcon'
import Tooltip from '../elements/Tooltip'
import MobileMenu from './sidebar/MobileMenu'
import MobileMenuButton from './sidebar/MobileMenuButton'

export default function MobileHeader() {
  const isMobile = useIsMobile()
  const { isOpen, toggleMenu } = useMenu()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])
  return (
    <div className="flex flex-col rounded-b-md px-4 py-4 shadow-sm lg:hidden">
      <div className="flex w-full items-center justify-between">
        <div className="flex space-x-2">
          <div className="z-10 h-max w-max rounded-full border-2 border-white shadow-md dark:border-neutral-800">
            <Image src={PROFILE_URL} alt="profile" width={30} height={30} rounded="rounded-full" />
          </div>
          <div className="mt-1 flex items-center gap-2">
            <Link href="/" passHref>
              <h2 className="font-sora flex-grow whitespace-nowrap text-lg font-medium lg:text-xl">Bayu Setiawan</h2>
            </Link>
            <Tooltip title="Verified">
              <VerifiedIcon size={18} className="text-blue-400" />
            </Tooltip>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <ToggleThemeIcon />
          <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
        </div>
      </div>
      {isMobile && <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>}
    </div>
  )
}
