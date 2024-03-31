import { MENU_ITEMS } from '@/common/constant/menu'
import { cn } from '@/common/libs/cn'

interface BadgeSectionProps {
  active: string
  refetch(path: string): void
}

export default function BadgeSection({ active, refetch }: BadgeSectionProps) {
  const routes = MENU_ITEMS.filter(item => item.isShow)
  return (
    <div className="mt-4 flex space-x-1 overflow-x-auto">
      {routes.map(route => (
        <button
          key={route.href}
          className={cn(
            'rounded-lg px-2 py-1 text-xs',
            active === route.href
              ? 'bg-neutral-700 text-white dark:bg-neutral-200 dark:text-black'
              : 'bg-neutral-100 dark:bg-neutral-800'
          )}
          onClick={() => refetch(route.href)}
        >
          {route.title}
        </button>
      ))}
    </div>
  )
}
