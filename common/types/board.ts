export interface ITask {
  id: string
  task: string
  type: 'feature' | 'bug' | 'refactor'
  priority: 'low' | 'medium' | 'high'
}

export interface IColumns {
  [x: string]: IColumn
}

export interface IColumn {
  title: string
  items: ITask[]
}

export interface IAddTaskPayload {
  columnId: string
  data: ITask
}
export interface IUpdateTaskPayload {
  columnId: string
  taskId: string
  data: ITask
}

export interface IDeleteTaskPayload {
  columnId: string
  taskId: string
}
