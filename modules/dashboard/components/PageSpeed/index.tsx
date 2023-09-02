'use client';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { fetcher } from '@/services/fetcher';
import React from 'react';
import useSwr from 'swr';
import { MdSpeed } from 'react-icons/md';
import SpeedSection from './SpeedSection';
import Link from 'next/link';
import { PAGESPEED_URL } from '@/common/constant';

export default function PageSpeed() {
  const URL = process.env.NEXT_PUBLIC_PAGE_SPEED_API;
  const { data, isLoading } = useSwr(URL, fetcher);

  return (
    <section>
      <SectionHeading
        title="Pagespeed Insight"
        icon={<MdSpeed className="mr-1" />}
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">
          My pagespeed index by google APIs
        </p>
        <Link
          href={PAGESPEED_URL}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          PageSpeed
        </Link>
      </SectionSubHeading>
      <SpeedSection data={data} isLoading={isLoading} />
    </section>
  );
}
