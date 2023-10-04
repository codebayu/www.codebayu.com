import { v4 as uuidv4 } from 'uuid';

import { IColumn, ITask } from '@/common/types/board';

export const mockDataTask: ITask[] = [
  {
    id: '1',
    task: 'Create section trello board'
  },
  {
    id: '2',
    task: 'Implement artificial intelligence'
  },
  {
    id: '3',
    task: 'Enhance performance'
  }
];

export const columnsFromBackend: IColumn = {
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
};
