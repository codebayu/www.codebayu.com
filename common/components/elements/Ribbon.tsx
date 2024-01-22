import React from 'react'

interface RibbonProps {
  text: string
}

export default function Ribbon({ text }: RibbonProps) {
  return (
    <div data-testid="ribbon" id="ribbon-container" className="before:bg-amber-500 after:bg-amber-500">
      <div className=" flex items-center justify-center bg-amber-400  text-[11px] font-medium text-black">
        <span data-testid="ribbon-text" className="-ml-4 font-roboto-condensed">
          {text}
        </span>

        <div className="absolute mx-4 h-6 w-2 animate-right-infinite bg-white opacity-30 shadow-sm shadow-white" />
      </div>
    </div>
  )
}
