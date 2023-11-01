import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { mockDataTask } from '@/common/mocks/board'
import { IAddTaskPayload, IColumns, IDeleteTaskPayload, IUpdateTaskPayload } from '@/common/types/board'

export interface InitialTaskState {
  columns: IColumns
}

export interface InitialTaskAction {
  addTask({ columnId, data }: IAddTaskPayload): void
  updateTask({ columnId, taskId, data }: IUpdateTaskPayload): void
  deleteTask({ columnId, taskId }: IDeleteTaskPayload): void
  setColumns(payload: IColumns): void
}

export const useTaskBoard = create<InitialTaskState & InitialTaskAction>()(
  persist(
    set => ({
      columns: {
        backlog: {
          title: 'Backlog',
          items: [mockDataTask[0]]
        },
        ongoing: {
          title: 'Ongoing',
          items: [mockDataTask[1]]
        },
        done: {
          title: 'Done',
          items: [mockDataTask[2]]
        }
      },
      addTask: ({ columnId, data }: IAddTaskPayload) =>
        set(state => ({
          columns: {
            ...state.columns,
            [columnId]: {
              ...state.columns[columnId],
              items: [data, ...state.columns[columnId].items]
            }
          }
        })),

      updateTask: ({ columnId, taskId, data }: IUpdateTaskPayload) =>
        set(state => ({
          columns: {
            ...state.columns,
            [columnId]: {
              ...state.columns[columnId],
              items: state.columns[columnId].items.map(item => {
                return taskId === item.id ? { ...item, ...data } : item
              })
            }
          }
        })),
      deleteTask: ({ columnId, taskId }: IDeleteTaskPayload) =>
        set(state => ({
          columns: {
            ...state.columns,
            [columnId]: {
              ...state.columns[columnId],
              items: state.columns[columnId].items.filter(item => item.id !== taskId)
            }
          }
        })),
      setColumns: (columns: IColumns) => set({ columns })
    }),
    {
      name: 'cb-task-board'
    }
  )
)
