import { Metadata } from 'next'

import React from 'react'

import Container from '@/common/components/elements/Container'
import PageHeading from '@/common/components/elements/PageHeading'
import { METADATA } from '@/common/constant/metadata'

import Contact from '@/modules/contact'

export const metadata: Metadata = {
  title: `Contact ${METADATA.exTitle}`,
  description: 'Contact codebayu.com, contact bayu setiawan',
  keywords: 'frontend developer, software engineer, react js, javascript, typescript, contact',
  alternates: {
    canonical: `${process.env.DOMAIN}/contact`
  }
}

const PAGE_TITLE = 'Contact'
const PAGE_DESCRIPTION = 'Let`s get in touch'

export default function ContactPage() {
  return (
    <>
      <Container data-aos="fade-left">
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
    </>
  )
}
