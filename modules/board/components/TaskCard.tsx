import Badge from '@/components/elements/Badge'
import IconButton from '@/components/elements/IconButton'
import { Draggable } from '@hello-pangea/dnd'
import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

import { IBadgeVariant } from '@/common/types'
import { ITask } from '@/common/types/board'

import TaskForm from './TaskForm'

interface TaskCardProps {
  item: ITask
  index: number
  columnId: string
}

export default function TaskCard({ item, index, columnId }: TaskCardProps) {
  let badgeVariant: IBadgeVariant = 'secondary'
  const [collapseEdit, setCollapseEdit] = useState(false)
  switch (item.type) {
    case 'bug':
      badgeVariant = 'danger'
      break
    case 'refactor':
      badgeVariant = 'warning'
      break
    case 'feature':
      badgeVariant = 'success'
      break
    default:
      badgeVariant = 'secondary'
      break
  }

  function toggleCollapse() {
    setCollapseEdit(!collapseEdit)
  }

  return (
    <>
      {collapseEdit ? (
        <TaskForm columnId={columnId} defaultValue={item} closeTaskForm={toggleCollapse} />
      ) : (
        <Draggable key={item.id} draggableId={item.id} index={index}>
          {provided => (
            <div
              id="draggable-card"
              className="mb-4 h-max  space-y-2 rounded-xl bg-white p-4 shadow-[rgba(13,_38,_76,_0.15)_0px_7px_10px] dark:bg-neutral-800"
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <div className="flex items-center justify-between">
                <div className="flex space-x-1">
                  <Badge size="small" variant={badgeVariant}>
                    {item.type}
                  </Badge>
                  <Badge size="small" variant="primary">
                    {item.priority}
                  </Badge>
                </div>
                <IconButton id="task-card-options" icon={<BsThreeDots size={16} />} onClick={toggleCollapse} />
              </div>
              <p className="line-clamp-1 w-52 text-sm text-neutral-600 dark:text-neutral-400">{item.task}</p>
            </div>
          )}
        </Draggable>
      )}
    </>
  )
}
