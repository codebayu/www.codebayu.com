import EmptyState from '@/components/elements/EmptyState'
import IconButton from '@/components/elements/IconButton'
import { Droppable } from '@hello-pangea/dnd'
import { useState } from 'react'
import { BsPlus, BsX } from 'react-icons/bs'

import { IColumn } from '@/common/types/board'

import TaskCard from './TaskCard'
import TaskForm from './TaskForm'

interface TaskColumnProps {
  columnId: string
  column: IColumn
}

export default function TaskColumn({ columnId, column }: TaskColumnProps) {
  const [openForm, setOpenForm] = useState({
    isOpen: false,
    columnId: ''
  })
  function openTaskForm(columnId: string) {
    const isOpen = openForm.columnId === columnId ? !openForm.isOpen : true
    setOpenForm({ isOpen, columnId })
  }

  function closeTaskForm() {
    setOpenForm({ isOpen: false, columnId: '' })
  }
  return (
    <Droppable key={columnId} droppableId={columnId}>
      {provided => (
        <div
          id={`column-${columnId}`}
          className="flex w-full flex-col rounded-md"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <div className="flex items-center justify-between text-neutral-700 dark:text-neutral-300">
            <h2 className="ml-3 text-sm font-medium">{column.title}</h2>
            <IconButton
              id="create-task-button"
              icon={openForm.isOpen && openForm.columnId === columnId ? <BsX size={24} /> : <BsPlus size={24} />}
              onClick={() => openTaskForm(columnId)}
            />
          </div>
          <div className="no-scrollbar flex h-full flex-col overflow-auto px-3 pt-5 md:h-[70vh]">
            {openForm.isOpen && openForm.columnId === columnId && (
              <TaskForm columnId={columnId} closeTaskForm={closeTaskForm} />
            )}
            {column.items.length > 0 ? (
              column.items.map((item, index) => (
                <TaskCard key={item.id} item={item} index={index} columnId={columnId} />
              ))
            ) : (
              <EmptyState message="There`s no activity made" />
            )}
          </div>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}
