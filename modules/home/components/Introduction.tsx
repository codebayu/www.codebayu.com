import Saweria from '@/common/components/elements/Saweria'
import TypeAnimation from '@/common/components/elements/TypeAnimation'

export default function Introduction() {
  return (
    <section className="bg-cover bg-no-repeat space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 text-2xl lg:text-3xl font-medium font-sora">
          <TypeAnimation sequence={["Hi, I'm Bayu Setiawan", "Hi, I'm Software Engineer"]} delay={3000} />
        </div>
        <Saweria />
      </div>

      <div className="space-y-4">
        <ul className="flex flex-col lg:flex-row gap-1 lg:gap-8 ml-5 list-disc text-neutral-700 dark:text-neutral-400">
          <li>Remote worker</li>
          <li>
            Based in Jakarta <span className="ml-1">🇮🇩</span>
          </li>
        </ul>
        <p className="leading-[1.8] md:leading-loose text-neutral-800 dark:text-neutral-300">
          Passionate and seasoned Software Engineer with a strong focus on frontend development. Proficient in
          TypeScript and well-versed in all aspects of web technologies. Collaborative team player dedicated to
          delivering efficient, scalable, and visually appealing web applications.
        </p>
      </div>
    </section>
  )
}
