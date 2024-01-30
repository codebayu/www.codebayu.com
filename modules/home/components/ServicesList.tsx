import React from 'react'
import { FaServicestack } from 'react-icons/fa'

import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { servicesMock } from '@/common/mocks/services'
import { IServices } from '@/common/types/services'

import ServicesCard from './ServicesCard'

export default function ServicesList({ services }: { services: IServices[] }) {
  return (
    <section>
      <div className="space-y-2">
        <SectionHeading title="Services" icon={<FaServicestack className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">What can I do for you</p>
        </SectionSubHeading>
      </div>
      <div className="no-scrollbar mt-6 flex flex-row space-x-3 overflow-y-hidden overflow-x-scroll">
        {(services || servicesMock).map((item, index) => (
          <ServicesCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
