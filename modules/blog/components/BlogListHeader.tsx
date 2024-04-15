import SectionHeading from '@/components/elements/SectionHeading'
import { BsGrid as GridIcon, BsListUl as ListIcon } from 'react-icons/bs'

import ViewOptions from './ViewOptions'

interface BlogListHeaderProps {
  viewOption: string
  setViewOption: (option: string) => void
}

export default function BlogListHeader({ viewOption, setViewOption }: BlogListHeaderProps) {
  return (
    <div className="mb-5 flex items-center justify-between text-[15px]">
      <SectionHeading title="Latest Articles" />
      <div className="flex cursor-pointer gap-2 px-1">
        <ViewOptions
          option={viewOption}
          setViewOption={setViewOption}
          type="list"
          icon={<ListIcon size={24} className="p-0.5" />}
          label="list-icon"
        />
        <ViewOptions
          option={viewOption}
          setViewOption={setViewOption}
          type="grid"
          icon={<GridIcon size={24} className="p-0.5" />}
          label="grid-icon"
        />
      </div>
    </div>
  )
}
