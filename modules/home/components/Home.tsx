import { lazy } from 'react'

import Breakline from '@/common/components/elements/Breakline'
import { CareerProps } from '@/common/types/careers'
import { ContentProps } from '@/common/types/learn'
import { IServices } from '@/common/types/services'

import CareerList from './CareerList'
import Introduction from './Introduction'
import LatestArticle from './LatestArticle'

const ServicesList = lazy(() => import('./ServicesList'))

interface HomeProps {
  careers: CareerProps[]
  learns: ContentProps[]
  services: IServices[]
}

export default function Home({ careers, learns, services }: HomeProps) {
  return (
    <>
      <Introduction />
      <Breakline className="my-6" />
      <LatestArticle learns={learns} />
      <Breakline className="my-6" />
      <CareerList careers={careers} />
      <Breakline className="my-6" />
      <ServicesList services={services} />
      {/* <SkillList /> */}
    </>
  )
}
