/* eslint-disable @typescript-eslint/no-explicit-any */
import Breakline from '@/components/elements/Breakline'

import { CodewarsData } from '@/common/types/codewars'

import Codewars from './Codewars'
import Contributions from './Contributions'
import PageSpeed from './PageSpeed'

interface DashboardProps {
  githubData: any
  codewarsData: CodewarsData
}
export default function Dashboard({ githubData, codewarsData }: DashboardProps) {
  return (
    <section className="flex flex-col">
      <PageSpeed />
      <Breakline />
      <Contributions githubData={githubData} />
      <Breakline />
      <Codewars codewarsData={codewarsData} />
    </section>
  )
}
