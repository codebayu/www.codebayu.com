import { IColumns, ITask } from '@/common/types/board';

export const mockDataTask: ITask[] = [
  {
    id: '1',
    task: 'Create section trello board',
    type: 'feature'
  },
  {
    id: '2',
    task: 'Fix issue dark mode',
    type: 'bug'
  },
  {
    id: '3',
    task: 'Enhance Pagespeed performance',
    type: 'refactor'
  }
];

export const columnsFromBackend: IColumns = {
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
};
