import { Droppable } from '@hello-pangea/dnd';
import React, { useState } from 'react';
import { BsPlus, BsX } from 'react-icons/bs';

import EmptyState from '@/common/components/elements/EmptyState';
import IconButton from '@/common/components/elements/IconButton';
import { IColumn } from '@/common/types/board';

import TaskCard from './TaskCard';
import TaskForm from './TaskForm';

interface TaskColumnProps {
  columnId: string;
  column: IColumn;
}

export default function TaskColumn({ columnId, column }: TaskColumnProps) {
  const [openForm, setOpenForm] = useState({
    isOpen: false,
    columnId: ''
  });
  function openTaskForm(columnId: string) {
    const isOpen = openForm.columnId === columnId ? !openForm.isOpen : true;
    setOpenForm({ isOpen, columnId });
  }

  function closeTaskForm() {
    setOpenForm({ isOpen: false, columnId: '' });
  }
  return (
    <Droppable key={columnId} droppableId={columnId}>
      {provided => (
        <div className="flex flex-col w-full rounded-md" ref={provided.innerRef} {...provided.droppableProps}>
          <div className="flex justify-between items-center text-neutral-700 dark:text-neutral-300">
            <h2 className="text-sm ml-3 font-medium">{column.title}</h2>
            <IconButton
              icon={openForm.isOpen && openForm.columnId === columnId ? <BsX size={24} /> : <BsPlus size={24} />}
              onClick={() => openTaskForm(columnId)}
            />
          </div>
          <div className="flex flex-col pt-5 px-3 h-full md:h-[70vh] overflow-auto no-scrollbar">
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
  );
}
