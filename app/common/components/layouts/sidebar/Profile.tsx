'use client';

import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Status from '@/app/common/components/elements/Status';
import useIsMobile from '@/hooks/useIsMobile';
import ProfileHeader from './ProfileHeader';
import ThemeToggle from '../../elements/ThemeToggle';
import clsx from 'clsx';
import MobileMenuButton from './MobileMenuButton';
import MobileMenu from './MobileMenu';

export default function Profile() {
  const isMobile = useIsMobile();
  const imageSize = isMobile ? 40 : 100;
  const [expandMenu, setExpandMenu] = useState<boolean>(false);

  const hideNavbar = () => {
    setExpandMenu(false);
  };

  useEffect(() => {
    if (expandMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [expandMenu]);
  return (
    <div
      className={clsx(
        'z-20 fixed shadow-sm xl:shadow-none lg:border-none dark:border-b dark:border-neutral-800 bg-white dark:bg-dark lg:!bg-transparent w-full p-5 lg:relative lg:p-0',
        expandMenu && 'pb-0'
      )}
    >
      <div className="flex items-center justify-between lg:flex-col lg:space-y-4 ">
        <ProfileHeader expandMenu={expandMenu} imageSize={imageSize} />
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
              expandMenu &&
                '!items-end flex-col-reverse justify-between h-[120px] pb-1'
            )}
          >
            <ThemeToggle />
            <MobileMenuButton
              expandMenu={expandMenu}
              setExpandMenu={setExpandMenu}
            />
          </div>
        )}
      </div>

      {isMobile && (
        <AnimatePresence>{expandMenu && <MobileMenu />}</AnimatePresence>
      )}
    </div>
  );
}
