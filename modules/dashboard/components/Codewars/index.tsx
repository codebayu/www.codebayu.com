import Link from 'next/link'

import React from 'react'
import { SiCodewars } from 'react-icons/si'

import SectionHeading from '@/common/components/elements/SectionHeading'
import SectionSubHeading from '@/common/components/elements/SectionSubHeading'
import { CODEWARS_URL } from '@/common/constant'
import { CodewarsData } from '@/common/types/codewars'

import OverviewItem from '../Contributions/OverviewItem'

export default function Codewars({ codewarsData }: { codewarsData: CodewarsData }) {
  return (
    <section>
      <SectionHeading
        title="Codewars Statistic"
        icon={
          <div className="h-5 w-5 overflow-hidden rounded-full">
            <SiCodewars className="mr-1" />
          </div>
        }
      />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">My statistic score on codewars.</p>
        <Link
          href={CODEWARS_URL}
          target="_blank"
          passHref
          className="font-code text-sm text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 hover:dark:text-neutral-400"
        >
          codewars
        </Link>
      </SectionSubHeading>
      <div className="grid grid-cols-2 gap-3 py-2 sm:grid-cols-4">
        <OverviewItem label="Rank" value={Math.abs(codewarsData.ranks.overall.rank)} unit="kyu" />
        <OverviewItem label="Honor" value={codewarsData.honor} />
        <OverviewItem label="Total Completed Kata" value={codewarsData.codeChallenges.totalCompleted} />
        <OverviewItem label="Leaderboard Position" value={codewarsData.leaderboardPosition} />
      </div>
      <div className="my-t flex flex-col justify-between font-sans text-sm text-neutral-600 dark:text-neutral-300 md:flex-row">
        <div>
          <p>Username: {codewarsData.username}</p>
          <p>Clan: {codewarsData.clan || 'No Clan'}</p>
        </div>
        <div>
          <p>Member Since: Jan 2024</p>
          <p>Skills: {codewarsData.skills.map(skill => skill).join(', ')}</p>
        </div>
      </div>
    </section>
  )
}
