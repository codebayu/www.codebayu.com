import { TbMoodSadSquint as MoodIcon } from 'react-icons/tb';

type EmptyStatePageProps = {
  message: string;
};

export default function EmptyState({ message }: EmptyStatePageProps) {
  return (
    <div
      data-testid="empty-state"
      className="flex flex-col items-center justify-center space-y-1 text-neutral-400 dark:text-neutral-500 py-3"
    >
      <MoodIcon size={48} data-testid="mood-icon" />
      <p>{message}</p>
    </div>
  );
}
