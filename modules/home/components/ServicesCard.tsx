import Card from '@/components/elements/Card'
import { HiOutlineComputerDesktop, HiOutlineDevicePhoneMobile } from 'react-icons/hi2'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { RiSeoLine } from 'react-icons/ri'

interface ServicesCardProps {
  tag: string
  title: string
  description: string
  index: number
}

export default function ServicesCard({ tag, title, description, index }: ServicesCardProps) {
  return (
    <Card className="border border-neutral-200 px-6 py-4 dark:border-neutral-800 dark:bg-neutral-800">
      <div className="flex items-center space-x-2">
        {index === 0 ? <HiOutlineComputerDesktop /> : null}
        {index === 1 ? <HiOutlineDevicePhoneMobile /> : null}
        {index === 2 ? <IoAnalyticsOutline /> : null}
        {index === 3 ? <RiSeoLine /> : null}
        <h3>{title}</h3>
      </div>
      <span className="text-xs text-neutral-500 dark:text-teal-200">#{tag}</span>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>
    </Card>
  )
}
