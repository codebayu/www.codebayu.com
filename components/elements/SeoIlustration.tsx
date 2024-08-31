'use client'

import TypeAnimation from './TypeAnimation'
import WebContainer from './WebContainer'

export default function SeoIlustration() {
  return (
    <WebContainer>
      <div className="flex h-40 flex-col items-center justify-start gap-1 px-6 text-neutral-500 dark:text-neutral-300">
        <p>Google</p>
        <div className="flex h-4 w-40 items-center rounded-full border border-neutral-300 px-3 py-2 text-[8px] dark:border-neutral-700">
          <TypeAnimation sequence={['What is SEO?', 'Search Engine Optimization']} delay={3000} />
        </div>
      </div>
    </WebContainer>
  )
}
