'use client';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { fetcher } from '@/services/fetcher';
import React from 'react';
import useSwr from 'swr';
import { MdSpeed } from 'react-icons/md';
import SpeedSection from './SpeedSection';

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
      </SectionSubHeading>
      <SpeedSection data={data} isLoading={isLoading} />
    </section>
  );
}
