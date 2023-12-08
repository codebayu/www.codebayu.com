import Image from 'next/image'

import React, { useState } from 'react'

import { PROFILE_URL } from '@/common/constant'
import { MENU_ITEMS } from '@/common/constant/menu'

import ToggleThemeIcon from '../elements/ToggleThemeIcon'
import MenuItem from './sidebar/MenuItem'
import Profile from './sidebar/Profile'

export default function LeftCollapseNavigation() {
  const [isHover, setIsHover] = useState(false)
  const filterdMenu = MENU_ITEMS?.filter(item => item?.isShow)
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="fixed z-30 w-16 hover:w-64 overflow-hidden hover:transition-all hover:duration-500 transition-all duration-500 rounded-r-2xl bottom-0 top-0 left-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-2 hover:p-4 hidden lg:flex flex-col items-center hover:items-stretch"
    >
      <div className={`h-64 flex ${isHover ? 'items-start' : 'items-center'}`}>
        {isHover ? (
          <Profile />
        ) : (
          <div className="flex flex-col gap-8 items-center">
            <div className="shadow-md border-2 z-10 border-white dark:border-neutral-800 rounded-full">
              <Image src={PROFILE_URL} alt="profile" width={50} height={50} className="rounded-full" />
            </div>
            <ToggleThemeIcon />
          </div>
        )}
      </div>
      <nav className="flex flex-col gap-4 pt-4 border-t border-neutral-300">
        {filterdMenu.map((item, index) => (
          <MenuItem key={index} {...item} isHover={isHover} />
        ))}
      </nav>
    </div>
  )
}
