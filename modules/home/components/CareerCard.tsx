'use client'

import { useRouter } from 'next/navigation'

import { differenceInMonths, differenceInYears, format } from 'date-fns'
import { useTheme } from 'next-themes'
import { BsBuildings as CompanyIcon } from 'react-icons/bs'

import Card from '@/common/components/elements/Card'
import Image from '@/common/components/elements/Image'
import { getCloudinaryUrl } from '@/common/libs/cloudinary'
import clsxm from '@/common/libs/clsxm'
import { sendDataLayer } from '@/common/libs/gtm'
import { CareerProps } from '@/common/types/careers'

import useHasMounted from '@/hooks/useHasMounted'

export default function CareerCard({ position, company, logo, location, start_date, end_date, slug }: CareerProps) {
  const router = useRouter()
  const { resolvedTheme } = useTheme()

  const startDate = new Date(start_date)
  const endDate = end_date ? new Date(end_date) : new Date()

  const durationYears = differenceInYears(endDate, startDate)
  const durationMonths = differenceInMonths(endDate, startDate) % 12

  let durationText = ''
  if (durationYears > 0) {
    durationText += `${durationYears} Year${durationYears > 1 ? 's' : ''} `
  }
  if (durationMonths > 0 || durationYears === 0) {
    durationText += `${durationMonths} Month${durationMonths > 1 ? 's' : ''}`
  }

  function handleCardClick() {
    sendDataLayer({
      event: 'career_clicked',
      career_position: position,
      career_company: company,
      career_duration: durationText
    })
    router.push(`/experience/${slug}`)
  }

  const mounted = useHasMounted()
  if (!mounted) return null

  return (
    <Card
      onClick={handleCardClick}
      className="flex min-w-[350px] bg-neutral-100 !shadow-none py-2 overflow-hidden items-center gap-5 h-max cursor-pointer dark:bg-neutral-900 hover:scale-95 duration-500"
    >
      <div className="relative h-max my-4">
        <div
          className={clsxm(
            'rounded-r-full shadow-lg dark:shadow-neutral-800 flex items-center',
            resolvedTheme === 'light' ? 'inverted-image-left' : 'inverted-image-left-dark'
          )}
        >
          {logo ? (
            <Image src={getCloudinaryUrl(logo)} width={55} height={55} alt={company} className="z-10 relative" />
          ) : (
            <CompanyIcon size={30} />
          )}
        </div>
      </div>

      <div className="space-y-1 flex flex-col items-start">
        <h2>{position}</h2>
        <div className="text-sm text-neutral-600 dark:text-neutral-400 space-y-2">
          <div className="flex items-center gap-1 md:gap-2">
            <span>{company}</span>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>{location}</span>
          </div>
          <div className="flex flex-col items-start md:text-[13px]">
            <div className="flex gap-1">
              <span>{format(startDate, 'MMM yyyy')}</span> -{' '}
              <span>{end_date ? format(endDate, 'MMM yyyy') : 'Present'}</span>
            </div>
            <span className="text-neutral-500 dark:text-neutral-500">~ {durationText}</span>
          </div>
        </div>
      </div>
    </Card>
  )
}
