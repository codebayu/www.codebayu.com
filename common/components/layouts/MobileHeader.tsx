import Link from 'next/link'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
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
  const imageSize = isMobile ? 40 : 100

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
      <div className={`flex w-full justify-between ${isOpen ? 'items-start' : 'items-center'}`}>
        <div className={`flex ${isOpen ? 'flex-col space-y-3' : 'flex-row space-x-3'}`}>
          <div className="z-10 w-max rounded-full border-2 border-white shadow-md dark:border-neutral-800">
            <Image
              src={PROFILE_URL}
              alt="profile"
              width={isOpen ? 80 : imageSize * 0.9}
              height={isOpen ? 80 : imageSize * 0.9}
              rounded="rounded-full"
            />
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
        {isMobile && (
          <div
            className={clsx(
              'mt-2 flex items-center gap-5 lg:hidden',
              isOpen && 'h-[120px] flex-col-reverse !items-end justify-between pb-1'
            )}
          >
            <ToggleThemeIcon />
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        )}
      </div>
      {isMobile && <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>}
    </div>
  )
}
