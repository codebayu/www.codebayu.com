import AnalyticIlustration from '@/components/elements/AnalyticIlustration'
import { Card } from '@/components/elements/Card'
import MobileIlustration from '@/components/elements/MobileIlustration'
import SeoIlustration from '@/components/elements/SeoIlustration'
import WebIlustration from '@/components/elements/WebIlustration'

interface ServicesCardProps {
  id: string
  tag: string
  title: string
  description: string
}

export default function ServicesCard({ tag, title, description, id }: ServicesCardProps) {
  return (
    <Card className="relative border border-neutral-200 p-4 dark:border-neutral-700 md:p-6">
      <div className="mb-5 flex items-center justify-center px-6 py-4">
        {id === 'clw0yxaqk0000ab3s7p118cw7' ? <WebIlustration /> : null}
        {id === 'clw0yyejt0001ab3su66betrb' ? <MobileIlustration /> : null}
        {id === 'clw0z042t0002ab3sormqhk3z' ? <AnalyticIlustration /> : null}
        {id === 'clw0z186t0003ab3smohmjtwr' ? <SeoIlustration /> : null}
      </div>
      <div className="w-full">
        <span className="right-3 top-3 mb-1 flex w-max items-center justify-center rounded-lg border border-neutral-200 bg-neutral-200 bg-opacity-40 px-2 text-xs text-neutral-500 dark:border-teal-200  dark:bg-teal-900 dark:text-teal-200 md:absolute">
          {tag}
        </span>
        <h3 className="text-xl font-medium">{title}</h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808019_1px,transparent_1px),linear-gradient(to_bottom,#80808019_1px,transparent_1px)] bg-[size:18px_18px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_20%,#000_80%,transparent_100%)]"></div>
    </Card>
  )
}
