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
      onClick={redirectToSaweria}
      className="flex w-full h-max md:w-max bg-slate-900 text-white shadow-sm justify-center items-center px-6 py-3 rounded-xl gap-2 hover:gap-3 delay-75 hover:transition-all hover:duration-300 transition-all duration-300"
    >
      <TbCoffee />
      <span>Buy me a Coffee</span>
    </button>
  ) : (
    <button onClick={redirectToSaweria} aria-label="buy-me-cofey">
      <TbCoffee size={25} />
    </button>
  )
}
