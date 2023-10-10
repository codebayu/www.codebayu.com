import Breakline from '@/common/components/elements/Breakline'

import Contributions from './Contributions'
import PageSpeed from './PageSpeed'

interface DashboardProps {
  githubData: never
}
export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <section className="flex flex-col">
      <PageSpeed />
      <Breakline />
      <Contributions githubData={githubData} />
    </section>
  )
}
