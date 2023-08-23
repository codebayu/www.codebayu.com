import './globals.css';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import Layouts from '@/app/common/components/layouts/index';
import { soraSans } from './common/styles/fonts';

export const metadata: Metadata = {
  title: 'Bayu Setiawan',
  description: 'Awesome portfolio',
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
        <Layouts>{children}</Layouts>
      </body>
    </html>
  );
}
