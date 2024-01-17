type BreaklineProps = {
  className?: string
  [propName: string]: string | undefined
}

export default function Breakline({ className = '', ...others }: BreaklineProps) {
  return (
    <div
      className={`my-4 border-t border-gray-300 dark:border-neutral-700 ${className}`}
      data-testid="breakline"
      {...others}
    ></div>
  )
}
