'use client'

export default function GoogleAdsense() {
  const googleAdsUnitBlogClient = process.env.GOOGLE_ADSENSE_UNIT_BLOG_CLIENT
  return (
    <script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${googleAdsUnitBlogClient}`}
      crossOrigin="anonymous"
    ></script>
  )
}
