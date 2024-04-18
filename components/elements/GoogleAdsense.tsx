'use client'

import Script from 'next/script'

export default function GoogleAdsense() {
  const googleAdsUnitBlogClient = process.env.GOOGLE_ADSENSE_UNIT_BLOG_CLIENT
  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsUnitBlogClient}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  )
}
