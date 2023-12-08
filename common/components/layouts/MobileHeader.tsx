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
    <div className="flex flex-col lg:hidden py-4 px-4 shadow-sm rounded-b-md">
      <div className={`flex justify-between w-full ${isOpen ? 'items-start' : 'items-center'}`}>
        <div className={`flex ${isOpen ? 'flex-col space-y-3' : 'flex-row space-x-3'}`}>
          <div className="shadow-md w-max border-2 z-10 border-white dark:border-neutral-800 rounded-full">
            <Image
              src={PROFILE_URL}
              alt="profile"
              width={isOpen ? 80 : imageSize * 0.9}
              height={isOpen ? 80 : imageSize * 0.9}
              rounded="rounded-full"
            />
          </div>
          <div className="flex gap-2 items-center mt-1">
            <Link href="/" passHref>
              <h2 className="flex-grow text-lg lg:text-xl font-sora font-medium whitespace-nowrap">Bayu Setiawan</h2>
            </Link>
            <Tooltip title="Verified">
              <VerifiedIcon size={18} className="text-blue-400" />
            </Tooltip>
          </div>
        </div>
        {isMobile && (
          <div
            className={clsx(
              'flex lg:hidden items-center gap-5 mt-2',
              isOpen && '!items-end flex-col-reverse justify-between h-[120px] pb-1'
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
