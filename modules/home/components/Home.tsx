import Breakline from '@/components/elements/Breakline'
import { lazy } from 'react'

import { ILearn } from '@/common/types/learn'
import { IServices } from '@/common/types/services'

import Introduction from './Introduction'
import LatestArticle from './LatestArticle'

const ServicesList = lazy(() => import('./ServicesList'))

interface HomeProps {
  learns: ILearn[]
  services: IServices[]
}

export default function Home({ learns, services }: HomeProps) {
  return (
    <>
      <Introduction />
      <Breakline className="my-6" />
      <LatestArticle learns={learns} />
      <Breakline className="my-6" />
      <ServicesList services={services} />
    </>
  )
}
