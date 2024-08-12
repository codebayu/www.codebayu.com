import Breakline from '@/components/elements/Breakline'

import { IAdsBanner } from '@/common/types/ads'
import { ILearn } from '@/common/types/learn'
import { IServices } from '@/common/types/services'

import Introduction from './Introduction'
import LatestArticle from './LatestArticle'
import ServicesList from './ServicesList'

interface HomeProps {
  learns: ILearn[]
  services: IServices[]
  promotion?: IAdsBanner
}

export default function Home({ learns, services, promotion }: HomeProps) {
  return (
    <>
      <Introduction />
      <Breakline className="my-6" />
      <LatestArticle learns={learns} promotion={promotion} />
      <Breakline className="my-6" />
      <ServicesList services={services} />
    </>
  )
}
