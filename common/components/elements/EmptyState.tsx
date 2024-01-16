import { TbMoodSadSquint as MoodIcon } from 'react-icons/tb'

type EmptyStatePageProps = {
  message: string
}

export default function EmptyState({ message }: EmptyStatePageProps) {
  return (
    <div
      data-testid="empty-state"
      className="flex flex-col items-center justify-center space-y-1 py-3 text-neutral-600 dark:text-neutral-400"
    >
      <MoodIcon size={48} data-testid="mood-icon" />
      <p>{message}</p>
    </div>
  )
}
