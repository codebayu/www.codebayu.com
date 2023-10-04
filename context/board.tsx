import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { mockDataTask } from '@/common/mocks/board';
import { IAddTaskPayload, IColumn } from '@/common/types/board';

export interface InitialTaskState {
  columns: IColumn;
}

export interface InitialTaskAction {
  addTask({ columnId, data }: IAddTaskPayload): void;
  setColumns(payload: IColumn): void;
}

export const useTaskBoard = create<InitialTaskState & InitialTaskAction>()(
  persist(
    set => ({
      columns: {
        backlog: {
          title: 'Backlog',
          items: mockDataTask
        },
        ongoing: {
          title: 'Ongoing',
          items: []
        },
        done: {
          title: 'Done',
          items: []
        }
      },
      addTask: () => set({}),
      setColumns: (columns: IColumn) => set({ columns })
    }),
    {
      name: 'task-board'
    }
  )
);
