import { ITask } from '@/common/types/board'

export const mockDataTask: ITask[] = [
  {
    id: '1',
    task: 'Default backlog task',
    type: 'feature',
    priority: 'low'
  },
  {
    id: '2',
    task: 'Default ongoing task',
    type: 'bug',
    priority: 'medium'
  },
  {
    id: '3',
    task: 'Default done task',
    type: 'refactor',
    priority: 'high'
  }
]
