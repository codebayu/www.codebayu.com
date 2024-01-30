'use client'

import { usePathname } from 'next/navigation'

import React from 'react'
import { TbCoffee } from 'react-icons/tb'

import { SAWERIA_URL } from '@/common/constant'
import { sendDataLayer } from '@/common/libs/gtm'

interface SaweriaProps {
  withText?: boolean
}
export default function Saweria({ withText = false }: SaweriaProps) {
  const pathname = usePathname()

  function redirectToSaweria() {
    sendDataLayer({
      event: 'saweria_clicked',
      page_path: pathname
    })
    window.open(SAWERIA_URL, '_blank')
  }

  return withText ? (
    <button
      data-testid="saweria-button-with-text"
      onClick={redirectToSaweria}
      className="flex h-max w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-white shadow-sm transition-all delay-75 duration-300 hover:gap-3 hover:transition-all hover:duration-300 md:w-max"
    >
      <TbCoffee />
      <span>Buy me a Coffee</span>
    </button>
  ) : (
    <button data-testid="saweria-button-without-text" onClick={redirectToSaweria} aria-label="buy-me-cofey">
      <TbCoffee size={25} />
    </button>
  )
}
