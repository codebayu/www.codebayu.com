import React from 'react'

interface IconButtonProps {
  id?: string
  icon: React.ReactNode
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function IconButton({ id = 'icon-button', icon, onClick }: IconButtonProps) {
  return (
    <button
      id={id}
      aria-label="icon-button"
      type="reset"
      className="m-1 self-end rounded-md p-1 hover:bg-neutral-100 dark:hover:bg-neutral-900"
      onClick={onClick}
    >
      {icon}
    </button>
  )
}
