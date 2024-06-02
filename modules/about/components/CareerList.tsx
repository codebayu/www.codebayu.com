import DownloadResume from '@/components/elements/DownloadResume'
import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading'
import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi'

import { ICareer } from '@/common/types/careers'

import CareerCard from './CareerCard'

export default function CareerList({ careers }: { careers: ICareer[] }) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My professional career journey</p>
          <DownloadResume />
        </SectionSubHeading>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {careers?.map((career, index) => <CareerCard key={index} {...career} />)}
      </div>
    </section>
  )
}
