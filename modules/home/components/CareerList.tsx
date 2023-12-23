import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi'

import DownloadResume from '@/common/components/elements/DownloadResume'
import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { CareerProps } from '@/common/types/careers'

import CareerCard from './CareerCard'

export default function CareerList({ careers }: { careers: CareerProps[] }) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My professional career journey.</p>
          <DownloadResume />
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {careers?.map((career, index) => <CareerCard key={index} {...career} />)}
      </div>
    </section>
  )
}
