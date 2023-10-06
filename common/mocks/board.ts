import { ITask } from '@/common/types/board';

export const mockDataTask: ITask[] = [
  {
    id: '1',
    task: 'Default backlog task',
    type: 'feature'
  },
  {
    id: '2',
    task: 'Default ongoing task',
    type: 'bug'
  },
  {
    id: '3',
    task: 'Default done task',
    type: 'refactor'
  }
];
