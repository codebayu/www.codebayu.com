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
          <p className="dark:text-neutral-400">My professional career journey</p>
          <DownloadResume />
        </SectionSubHeading>
      </div>

      <div className="flex flex-row h-36 overflow-y-hidden space-x-3 mt-6 overflow-x-scroll no-scrollbar">
        {careers?.map((career, index) => <CareerCard key={index} {...career} />)}
      </div>
    </section>
  )
}
