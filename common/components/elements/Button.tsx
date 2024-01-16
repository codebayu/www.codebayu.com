import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  theme: 'text' | 'filled'
  onClick?(e?: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  disable?: boolean
}
export default function Button(props: ButtonProps) {
  const { children, theme, type, disable = false, onClick } = props
  return (
    <button
      type={type}
      className={`rounded px-3 py-1 ${
        theme === 'text'
          ? 'w-max bg-neutral-100 text-neutral-800 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-white dark:hover:bg-neutral-800'
          : 'w-max bg-neutral-700 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-neutral-200'
      }`}
      disabled={disable}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
