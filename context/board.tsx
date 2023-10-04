import { v4 as uuidv4 } from 'uuid';
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
        [uuidv4()]: {
          title: 'Backlog',
          items: mockDataTask
        },
        [uuidv4()]: {
          title: 'Ongoing',
          items: []
        },
        [uuidv4()]: {
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
