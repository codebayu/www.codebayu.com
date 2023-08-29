import './globals.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import Layouts from '@/app/common/components/layouts/index';
import { soraSans } from './common/styles/fonts';
import ThemeProviderContext from './context/theme';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  description:
    'Personal website, portfolio, blog, software engineer roadmap, programming tips of Code Bayu',
  keywords:
    'codebayu, bayu setiawan, programming tips, belajar javascript, belajar typescript',
  creator: 'Bayu Setiawan',
  authors: {
    name: 'Bayu Setiawan',
    url: process.env.DOMAIN,
  },
  openGraph: {
    images:
      'https://res.cloudinary.com/dvlbwm8c1/image/upload/v1693008885/codebayu/ab0kfkhjgymzthooxiea.webp',
    url: process.env.DOMAIN,
    siteName: 'Code Bayu',
    locale: 'id-ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      </body>
    </html>
  );
}
