import Contributions from './Contributions';
interface DashboardProps {
  githubData: any;
}
export default function Dashboard({ githubData }: DashboardProps) {
  return (
    <section className="flex flex-col">
      <Contributions githubData={githubData} />
    </section>
  );
}
