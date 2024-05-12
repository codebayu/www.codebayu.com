import type { Metadata } from 'next'

import Analytics from '@/components/elements/Analytics'
import GoogleAdsense from '@/components/elements/GoogleAdsense'
import Layouts from '@/components/layouts/index'
import NextTopLoader from 'nextjs-toploader'

import { METADATA } from '@/common/constant/metadata'

import { soraSans } from '../common/styles/fonts'
import ThemeProviderContext from '../stores/theme'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.DOMAIN || ''),
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <GoogleAdsense />
      <body className={soraSans.className}>
        <NextTopLoader
          color="#05b6d3"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #05b6d3,0 0 5px #45c6c0"
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>

        <Analytics />
      </body>
    </html>
  )
}
