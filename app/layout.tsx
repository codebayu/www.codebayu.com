import './globals.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import Layouts from '@/app/common/components/layouts/index';
import { METADATA } from '@/app/common/constant/metadata';
import { soraSans } from './common/styles/fonts';
import ThemeProviderContext from './context/theme';
import { Analytics } from '@vercel/analytics/react';
import GoogleAnalytics from '@bradgarropy/next-google-analytics';

export const metadata: Metadata = {
  description: METADATA.description,
  keywords: METADATA.keyword,
  creator: METADATA.creator,
  authors: {
    name: METADATA.creator,
    url: METADATA.openGraph.url,
  },
  openGraph: {
    images: METADATA.profile,
    url: METADATA.openGraph.url,
    siteName: METADATA.openGraph.siteName,
    locale: METADATA.openGraph.locale,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GTM_ID = process.env.GTM_ID;

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={soraSans.className}>
        <NextTopLoader
          color="#2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
        />
        <ThemeProviderContext>
          <Layouts>{children}</Layouts>
        </ThemeProviderContext>
        {process.env.NODE_ENV === 'production' && <Analytics />}

        <GoogleAnalytics measurementId={GTM_ID || ''} />
      </body>
    </html>
  );
}
