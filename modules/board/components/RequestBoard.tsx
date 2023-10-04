'use client';

import { DragDropContext, DropResult, Droppable } from '@hello-pangea/dnd';
import React from 'react';
import { BsPlus } from 'react-icons/bs';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import EmptyState from '@/common/components/elements/EmptyState';
import PageHeading from '@/common/components/elements/PageHeading';
import ToggleThemeIcon from '@/common/components/elements/ToggleThemeIcon';
import { IColumn } from '@/common/types/board';

import { useTaskBoard } from '@/context/board';

import { useHydration } from '@/hooks/useHydration';

import TaskCard from './RequestCard';

const PAGE_TITLE = 'Request Board';
const PAGE_DESCRIPTION = 'The request board to enhance or fixing bug in this website';

export default function RequestBoard() {
  const { columns, setColumns } = useTaskBoard();
  const hydrate = useHydration(useTaskBoard);

  const onDragEnd = (result: DropResult, columns: IColumn, setColumns: (columns: IColumn) => void) => {
    if (!result.destination) return; // Jika Tidak ada kolom Tujuan

    const { source, destination } = result;
    const sourceColumn = columns[source.droppableId]; // Kolom Sumber
    const destColumn = columns[destination.droppableId]; // Kolom Tujuan
    const sourceItems = [...sourceColumn.items]; // Items Sumber
    const destItems = [...destColumn.items]; // Items Tujuan
    const [removed] = sourceItems.splice(source.index, 1); // Item Sumber yang dihapus
    destItems.splice(destination.index, 0, removed); // Item Tujuan yang ditambah

    if (source.droppableId !== destination.droppableId) {
      // Jika Kolom Sumber dan Tujuan tidak sama
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      // Jika Kolom Sumber dan Tujuan sama
      sourceItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        }
      });
    }
  };

  return (
    <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
      <Container>
        <div className="flex items-center justify-between">
          <BackButton />
          <ToggleThemeIcon />
        </div>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <div className="flex w-full min-h-[70vh] space-x-10 mt-8">
          {hydrate &&
            Object.entries(columns).map(([columnId, column]) => {
              return (
                <Droppable key={columnId} droppableId={columnId}>
                  {provided => (
                    <div
                      className="flex flex-col w-full rounded-md"
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      <div className="flex justify-between items-center text-neutral-700 dark:text-neutral-300">
                        <h2 className="text-sm font-medium">{column.title}</h2>
                        <button aria-label="More">
                          <BsPlus size={24} />
                        </button>
                      </div>
                      <div className="flex flex-col space-y-4 pt-5">
                        {column.items.length > 0 ? (
                          column.items.map((item, index) => (
                            <TaskCard key={item.id} item={item} index={index} columnTitle={column.title} />
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
            })}
        </div>
      </Container>
    </DragDropContext>
  );
}
