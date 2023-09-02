'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Status from '@/common/components/elements/Status';
import useIsMobile from '@/hooks/useIsMobile';
import ProfileHeader from './ProfileHeader';
import ThemeToggle from '../../elements/ThemeToggle';
import clsx from 'clsx';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';
import { useMenu } from '@/context/menu';

export default function Profile() {
  const isMobile = useIsMobile();
  const imageSize = isMobile ? 40 : 100;
  const { isOpen, toggleMenu } = useMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div
      className={clsx(
        'z-20 fixed shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-white dark:bg-dark lg:!bg-transparent w-full p-5 lg:relative lg:p-0',
        isOpen && 'pb-0'
      )}
    >
      <div className="flex items-start justify-between lg:flex-col lg:space-y-4 ">
        <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
        {!isMobile && (
          <div className="flex items-center mt-4 w-full justify-between">
            <Status />
            <ThemeToggle />
          </div>
        )}
        {isMobile && (
          <div
            className={clsx(
              'flex lg:hidden items-center gap-5 mt-2',
              isOpen &&
                '!items-end flex-col-reverse justify-between h-[120px] pb-1'
            )}
          >
            <ThemeToggle />
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        )}
      </div>

      {isMobile && (
        <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
      )}
    </div>
  );
}
