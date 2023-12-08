import Image from 'next/image'

import React from 'react'

import { getCloudinaryUrl } from '@/common/libs/cloudinary'
import { CareerProps } from '@/common/types/careers'

export default function CurrentlyWorking({ careers }: { careers: CareerProps[] }) {
  const currentlyCompany = careers[0]
  return (
    <div
      className="flex flex-col space-y-3 md:space-x-3 px-6 w-full items-center justify-center my-8"
      data-aos="zoom-in-down"
    >
      <h3 className="text-sm text-center text-neutral-600 dark:text-neutral-500 font-sora">Currently Working On</h3>
      <div className="flex w-full md:w-max items-center justify-center space-x-2 rounded-xl py-2 px-10 shadow-[0_3px_10px_rgba(45,78,255,0.15)]">
        <Image src={getCloudinaryUrl(currentlyCompany.logo)} alt={currentlyCompany.company} width={30} height={30} />
        <h4 className="text-md font-sora font-medium text-neutral-800 dark:text-neutral-500">
          {currentlyCompany.company}
        </h4>
      </div>
    </div>
  )
}
