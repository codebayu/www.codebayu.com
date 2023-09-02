'use client';

import Link from 'next/link';

import { fetcher } from '@/services/fetcher';
import React, { useState } from 'react';
import { MdSpeed } from 'react-icons/md';
import useSwr from 'swr';

import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { PAGESPEED_CATEGORIES, PAGESPEED_URL } from '@/common/constant';

import BadgeSection from './BadgeSection';
import SpeedSection from './SpeedSection';

export default function PageSpeed() {
  const BASE_URL = process.env.NEXT_PUBLIC_PAGE_SPEED_API;

  const [url, setUrl] = useState(BASE_URL + PAGESPEED_CATEGORIES);
  const [active, setActive] = useState('/');

  const { data, isLoading, mutate } = useSwr(url, fetcher);

  function refetch(path: string) {
    setActive(path);
    setUrl(BASE_URL + path + PAGESPEED_CATEGORIES);
    mutate();
  }

  return (
    <section>
      <SectionHeading title="Pagespeed Insight" icon={<MdSpeed className="mr-1" />} />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">My pagespeed index by google APIs</p>
        <Link
          href={PAGESPEED_URL}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-400 dark:text-neutral-600 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          PageSpeed
        </Link>
      </SectionSubHeading>
      <BadgeSection active={active} refetch={refetch} />
      <SpeedSection data={data} isLoading={isLoading} />
    </section>
  );
}
