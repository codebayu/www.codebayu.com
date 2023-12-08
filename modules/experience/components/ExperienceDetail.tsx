import Image from 'next/image'

import { format } from 'date-fns'
import React from 'react'

import MDXComponent from '@/common/components/elements/MDXComponent'
import { getCloudinaryUrl } from '@/common/libs/cloudinary'
import loadMdxFiles from '@/common/libs/mdx'
import { CareerProps } from '@/common/types/careers'

export default function ExperienceDetail(props: CareerProps) {
  const { logo, company, position, location, location_type, start_date, end_date, slug } = props

  const startDate = new Date(start_date)
  const endDate = end_date ? new Date(end_date) : new Date()

  const contents = loadMdxFiles(slug, 'experience')
  const content = contents.find(item => item.slug === slug)?.content

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between space-x-4 pb-4 border-b border-dashed border-neutral-600">
        <div>
          <h2 className="text-2xl font-semibold">{company}</h2>
          <div className="flex gap-1 text-sm mt-1">
            <span>{format(startDate, 'MMM yyyy')}</span> -{' '}
            <span>{end_date ? format(endDate, 'MMM yyyy') : 'Present'}</span>
          </div>
        </div>
        <Image src={getCloudinaryUrl(logo)} alt={company} width={60} height={60} />
      </div>
      <p className="text-neutral-700 dark:text-neutral-300 font-sans">
        At {company}, I proudly served as <strong>{position}</strong> based in {location}, contributing my expertise
        from {format(startDate, 'MMM yyyy')} to {end_date ? format(endDate, 'MMM yyyy') : 'Present'} in a dynamic{' '}
        {location_type} setting.
      </p>
      {content && <MDXComponent>{content}</MDXComponent>}
    </div>
  )
}
