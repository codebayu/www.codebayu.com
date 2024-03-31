import Link from 'next/link'

import Saweria from '@/components/elements/Saweria'
import { FcMindMap } from 'react-icons/fc'

export default function GoHome() {
  return (
    <div
      data-testid="go-home"
      className="mt-8 flex w-full flex-col justify-center space-y-3 px-6 md:flex-row md:space-x-3 md:space-y-0"
      data-aos="zoom-in-down"
    >
      <Link
        href="/"
        className="flex h-max w-full items-center justify-center gap-2 rounded-xl border border-neutral-200 px-6 py-3 shadow-sm transition-all delay-75 duration-300 hover:gap-3 hover:transition-all hover:duration-300 dark:border-neutral-700 md:w-max"
      >
        <FcMindMap data-testid="go-home-icon" />
        <span>Website & Portfolio</span>
      </Link>
      <Saweria withText />
    </div>
  )
}
