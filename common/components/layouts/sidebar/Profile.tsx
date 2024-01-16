'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'

import { useMenu } from '@/stores/menu'

import useIsMobile from '@/hooks/useIsMobile'

import ToggleThemeIcon from '../../elements/ToggleThemeIcon'
import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'
import ProfileHeader from './ProfileHeader'

export default function Profile() {
  const isMobile = useIsMobile()
  const imageSize = isMobile ? 40 : 100
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
    <div
      className={clsx(
        'fixed z-20 w-full bg-white p-5 shadow-sm dark:border-b dark:border-neutral-800 dark:bg-dark lg:relative lg:border-none lg:!bg-transparent lg:p-0 xl:shadow-none',
        isOpen && 'pb-0'
      )}
    >
      <div className="flex items-start justify-between lg:flex-col lg:space-y-4 ">
        <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
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
