/* eslint-disable @typescript-eslint/no-explicit-any */
import CircleProgress from '@/components/elements/CircleProgress'
import LoadingSpeedInsight from '@/components/elements/LoadingSpeedInsight'

interface SpeedSectionProps {
  data: any
  isLoading: boolean
}

export default function SpeedSection({ data, isLoading }: SpeedSectionProps) {
  const categories = data?.lighthouseResult?.categories || {}
  const categoriesInArray = Object.keys(categories).map(key => ({ ...categories[key] }))

  if (isLoading) return <LoadingSpeedInsight />

  return (
    <div className="my-6 flex items-end justify-center space-x-6 text-[10px] text-neutral-600 dark:text-neutral-300 md:space-x-10 md:text-sm">
      {categoriesInArray.map(category => (
        <div key={category.id} className="flex flex-col items-center justify-center space-y-2 text-center">
          <h3>{category.title}</h3>
          <CircleProgress value={Number(category.score || 0) * 100} />
        </div>
      ))}
    </div>
  )
}
