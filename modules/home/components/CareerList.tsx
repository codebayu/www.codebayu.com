import Link from 'next/link'

import { BiSolidDownvote as DownloadIcon } from 'react-icons/bi'
import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi'

import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { RESUME_URL } from '@/common/constant'
import { CareerProps } from '@/common/types/careers'

import CareerCard from './CareerCard'

export default function CareerList({ careers }: { careers: CareerProps[] }) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">My professional career journey.</p>
          <Link
            href={RESUME_URL}
            target="_blank"
            passHref
            className="flex gap-2 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300"
            data-umami-event="Download Resume"
          >
            <div className="border-b-2 overflow-hidden border-neutral-600 dark:border-neutral-500">
              <DownloadIcon className="animate-rain-arrow" />
            </div>
            <span>Download Resume</span>
          </Link>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {careers?.map((career, index) => <CareerCard key={index} {...career} />)}
      </div>
    </section>
  )
}
