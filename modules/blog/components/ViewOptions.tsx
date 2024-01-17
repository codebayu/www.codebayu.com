import clsx from 'clsx'

type ViewOptionsProps = {
  option: string
  setViewOption: (option: string) => void
  type: string
  icon: JSX.Element
  label: string
}

export default function ViewOptions({ option, setViewOption, icon, type, label }: ViewOptionsProps) {
  const isActive = option === type

  return (
    <button
      className={clsx(
        'flex items-center gap-1 rounded-lg border border-neutral-300 p-1 font-medium text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:border-neutral-600 dark:text-neutral-400 hover:dark:bg-neutral-700',
        isActive && 'bg-neutral-200 dark:bg-neutral-700 dark:!text-neutral-200'
      )}
      onClick={() => setViewOption(type)}
      data-umami-event={`Change Blog View to ${type}`}
      aria-label={label}
    >
      {icon}
    </button>
  )
}
