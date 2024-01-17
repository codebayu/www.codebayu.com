import Image from 'next/image'

import React from 'react'
import { MdVerified as VerifiedIcon } from 'react-icons/md'

import Tooltip from '@/common/components/elements/Tooltip'
import { PROFILE_URL } from '@/common/constant'

export default function MeProfile() {
  return (
    <div className="mt-6 flex flex-col items-center space-y-2 px-6" data-aos="zoom-in-down">
      <div className="rounded-full border border-neutral-200 p-2 dark:border-neutral-700">
        <div className="overflow-hidden rounded-full">
          <Image
            src={PROFILE_URL}
            alt="profile"
            width={80}
            height={80}
            className="rounded-full transition-all duration-300 hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-1 flex items-center gap-2 lg:mt-4">
        <h2 className="font-sora flex-grow text-lg font-medium lg:text-xl">Bayu Setiawan</h2>
        <Tooltip title="Verified">
          <VerifiedIcon size={18} className="text-blue-400" />
        </Tooltip>
      </div>
      <p className="text-center text-sm leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose">
        Software Engineer who focus on frontend development.
      </p>
    </div>
  )
}
