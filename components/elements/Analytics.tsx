'use client'

import { usePathname, useSearchParams } from 'next/navigation'

import { GoogleTagManager } from '@next/third-parties/google'
import { useEffect } from 'react'

import { sendPageView } from '@/common/libs/gtm'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const GTM_ID = process.env.GTM_ID || ''

  useEffect(() => {
    if (pathname) {
      sendPageView(pathname)
    }
  }, [pathname, searchParams])

  return <GoogleTagManager gtmId={GTM_ID} />
}
