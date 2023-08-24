import EmptyState from '@/app/common/components/elements/EmptyState';

export default function Blog() {
  return (
    <section className="flex flex-col">
      <EmptyState message="On Development" />
    </section>
  );
}
