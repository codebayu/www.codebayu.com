import { Metadata } from 'next'

import { getCodeBayuDataServices } from '@/services/codebayu'
import React from 'react'

import { METADATA } from '@/common/constant/metadata'
import { CareerProps } from '@/common/types/careers'

import MeSection from '@/modules/me'

export const metadata: Metadata = {
  title: `Hi! ${METADATA.exTitle}`,
  description: 'Programming tips for software developer',
  keywords: 'frontend developer, software engineer, react js, javascript, typescript',
  alternates: {
    canonical: `${process.env.DOMAIN}/me`
  }
}

export default async function MePage() {
  const careers = await getCareers()
  return <MeSection careers={careers} />
}

async function getCareers(): Promise<CareerProps[]> {
  const response = await getCodeBayuDataServices()
  return response.careers
}
