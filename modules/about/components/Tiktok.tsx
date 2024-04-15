import Link from 'next/link'

import Embed from '@/components/elements/Embed'
import SectionHeading from '@/components/elements/SectionHeading'
import SectionSubHeading from '@/components/elements/SectionSubHeading'
import { SiTiktok } from 'react-icons/si'

import { TIKTOK_USERNAME } from '@/common/constant/tiktok'

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
          className="font-code text-sm text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-400"
        >
          {TIKTOK_USERNAME}
        </Link>
      </SectionSubHeading>
      <Embed />
    </>
  )
}
