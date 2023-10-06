'use client';

import { DragDropContext, DropResult } from '@hello-pangea/dnd';
import React from 'react';

import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import ToggleThemeIcon from '@/common/components/elements/ToggleThemeIcon';
import { IColumns } from '@/common/types/board';

import { useTaskBoard } from '@/context/board';

import { useHydration } from '@/hooks/useHydration';

import TaskColumn from './TaskColumn';
import TaskLoading from './TaskLoading';

const PAGE_TITLE = 'Task Board';
const PAGE_DESCRIPTION = 'The task board to keep track of your tasks.';

export default function TaskBoard() {
  const { columns, setColumns } = useTaskBoard();
  const hydrate = useHydration(useTaskBoard);

  const onDragEnd = (result: DropResult, columns: IColumns, setColumns: (columns: IColumns) => void) => {
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
      <Container withMarginTop={false}>
        <div className="flex items-center justify-between">
          <BackButton />
          <ToggleThemeIcon />
        </div>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <div className="flex flex-col md:flex-row w-full min-h-fullmd:min-h-[70vh] space-y-4 md:space-y-0 md:space-x-6 mt-8">
          {hydrate ? (
            Object.entries(columns).map(([columnId, column]) => (
              <TaskColumn key={columnId} columnId={columnId} column={column} />
            ))
          ) : (
            <TaskLoading />
          )}
        </div>
      </Container>
    </DragDropContext>
  );
}
