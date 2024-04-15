'use client'

import { Adsense } from '@ctrl/react-adsense'
import { useEffect } from 'react'

import { pushGoogleAdsense } from '@/common/libs/adsense'

export default function GoogleAdsBanner() {
  const googleAdsUnitBlogClient = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_UNIT_BLOG_CLIENT || ''
  const googleAdsUnitBlogSlot = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_UNIT_BLOG_SLOT || ''

  useEffect(() => {
    try {
      pushGoogleAdsense()
    } catch (error) {
      if (error instanceof Error) console.log(error.message)
    }
  }, [])

  return (
    <div className="fixed right-6 top-14 hidden h-max w-48 overflow-hidden rounded-sm bg-neutral-100 lg:block">
      <Adsense
        className="adsbygoogle"
        client={googleAdsUnitBlogClient}
        slot={googleAdsUnitBlogSlot.toString()}
        style={{ display: 'block' }}
        format="auto"
        responsive="true"
      />
    </div>
  )
}
