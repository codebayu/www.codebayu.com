import Breakline from '@/app/common/components/elements/Breakline';
import Summary from './Summary';
import Tiktok from './Tiktok';

export default function About() {
  return (
    <section className="flex flex-col">
      <Summary />
      <Breakline />
      <Tiktok />
    </section>
  );
}
