import Link from 'next/link'

import { ICareer } from '@/common/types/careers'

export default function CurrentlyWorking({ careers }: { careers: ICareer[] }) {
  const currentlyCompany = careers[0]
  return (
    <div
      data-testid="currently-working"
      className="my-8 flex w-full flex-col items-center justify-center space-y-3 px-6 md:space-x-3"
      data-aos="zoom-in-down"
    >
      <div className="font-sora text-center text-sm text-neutral-600 dark:text-neutral-500">
        <span data-testid="currently-working-on">Currently working on</span>{' '}
        <Link href={currentlyCompany.link || '/'} data-testid="currently-working-link" className="font-bold">
          {currentlyCompany.company}
        </Link>
      </div>
    </div>
  )
}
