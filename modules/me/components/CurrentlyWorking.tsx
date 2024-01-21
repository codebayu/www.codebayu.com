import Image from 'next/image'

import React from 'react'

import { getCloudinaryUrl } from '@/common/libs/cloudinary'
import { CareerProps } from '@/common/types/careers'

export default function CurrentlyWorking({ careers }: { careers: CareerProps[] }) {
  const currentlyCompany = careers[0]
  return (
    <div
      data-testid="currently-working"
      className="my-8 flex w-full flex-col items-center justify-center space-y-3 px-6 md:space-x-3"
      data-aos="zoom-in-down"
    >
      <h3 className="font-sora text-center text-sm text-neutral-600 dark:text-neutral-500">Currently Working On</h3>
      <div className="flex w-full items-center justify-center space-x-2 rounded-xl px-10 py-2 shadow-[0_3px_10px_rgba(45,78,255,0.15)] md:w-max">
        <Image src={getCloudinaryUrl(currentlyCompany.logo)} alt={currentlyCompany.company} width={30} height={30} />
        <h4 className="text-md font-sora font-medium text-neutral-800 dark:text-neutral-500">
          {currentlyCompany.company}
        </h4>
      </div>
    </div>
  )
}
