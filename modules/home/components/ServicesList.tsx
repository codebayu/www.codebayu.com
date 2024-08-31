import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading'
import { FaServicestack } from 'react-icons/fa'

import { servicesMock } from '@/common/mocks/services'
import { IServices } from '@/common/types/services'

import ServicesCard from './ServicesCard'

export default function ServicesList({ services }: { services: IServices[] }) {
  return (
    <section>
      <div className="space-y-2">
        <SectionHeading title="Services" icon={<FaServicestack className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">I can deliver the following services</p>
        </SectionSubHeading>
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {(services || servicesMock).map((item, index) => (
          <ServicesCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}
