import Link from 'next/link';

import React from 'react';
import { SiTiktok } from 'react-icons/si';

import Embed from '@/common/components/elements/Embed';
import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';
import { TIKTOK_USERNAME } from '@/common/constant/tiktok';

export default async function Tiktok() {
  return (
    <>
      <SectionHeading title="Tiktok" icon={<SiTiktok className="mr-1" />} />
      <SectionSubHeading>
        <p className="text-neutral-600 dark:text-neutral-400">Find me on tiktok</p>
        <Link
          href={`https://www.tiktok.com/${TIKTOK_USERNAME}`}
          target="_blank"
          passHref
          className="text-sm font-code text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 hover:dark:text-neutral-400"
        >
          {TIKTOK_USERNAME}
        </Link>
      </SectionSubHeading>
      <Embed />
    </>
  );
}
