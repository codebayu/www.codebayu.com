'use client'

import Container from '@/components/elements/Container'
import PageHeading from '@/components/elements/PageHeading'
import { useHydrationZustand } from '@codebayu/use-hydration-zustand'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'

import { tourTaskBoard } from '@/common/constant/drivers'
import createDrivers from '@/common/libs/drivers'
import { IColumns } from '@/common/types/board'

import { useTaskBoard } from '@/stores/board'

import useHasMounted from '@/hooks/useHasMounted'

import TaskColumn from './TaskColumn'
import TaskLoading from './TaskLoading'

const PAGE_TITLE = 'Task Board'
const PAGE_DESCRIPTION = 'The task board to keep track of your tasks.'

export default function TaskBoard() {
  const { columns, setColumns } = useTaskBoard()
  const hydrate = useHydrationZustand(useTaskBoard)
  const mounted = useHasMounted()

  const { runDriver, isProductTour } = createDrivers({ steps: tourTaskBoard, product: 'task-board' })

  function onDragEnd(result: DropResult, columns: IColumns, setColumns: (columns: IColumns) => void) {
    if (!result.destination) return // Jika Tidak ada kolom Tujuan

    const { source, destination } = result
    const sourceColumn = columns[source.droppableId] // Kolom Sumber
    const destColumn = columns[destination.droppableId] // Kolom Tujuan
    const sourceItems = [...sourceColumn.items] // Items Sumber
    const destItems = [...destColumn.items] // Items Tujuan
    const [removed] = sourceItems.splice(source.index, 1) // Item Sumber yang dihapus
    destItems.splice(destination.index, 0, removed) // Item Tujuan yang ditambah

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
      })
    } else {
      // Jika Kolom Sumber dan Tujuan sama
      sourceItems.splice(destination.index, 0, removed)
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        }
      })
    }
  }

  if (mounted && isProductTour) {
    runDriver()
  }

  return (
    <DragDropContext onDragEnd={result => onDragEnd(result, columns, setColumns)}>
      <Container withMarginTop={false}>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <div className="min-h-fullmd:min-h-[70vh] mt-8 flex w-full flex-col space-y-4 md:flex-row md:space-y-0">
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
  )
}
