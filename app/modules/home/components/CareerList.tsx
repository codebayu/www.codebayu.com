import Link from 'next/link';
import { HiOutlineBriefcase as CareerIcon } from 'react-icons/hi';
import { LuDownload as DownloadIcon } from 'react-icons/lu';

import CareerCard from './CareerCard';
import SectionHeading from '@/app/common/components/elements/SectionHeading';
import SectionSubHeading from '@/app/common/components/elements/SectionSubHeading';
import { CAREERS } from '@/app/common/constant/careers';

const RESUME_URL =
  'https://res.cloudinary.com/dvlbwm8c1/image/upload/f_auto,q_auto/v1/codebayu/c7y1km2xd0sgvnvjlzyr';

export default function CareerList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon className="mr-1" />} />
        <SectionSubHeading>
          <p className="dark:text-neutral-400">
            My professional career journey.
          </p>
          <Link
            href={RESUME_URL}
            target="_blank"
            passHref
            className="flex gap-2 hover:gap-3 transition-all duration-300 items-center text-neutral-600 dark:text-neutral-500 hover:text-neutral-700 hover:dark:text-neutral-300"
            data-umami-event="Download Resume"
          >
            <DownloadIcon />
            <span>Download Resume</span>
          </Link>
        </SectionSubHeading>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {CAREERS?.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
}
