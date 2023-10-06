export interface ITask {
  id: string;
  task: string;
  type: 'feature' | 'bug' | 'refactor';
}

export interface IColumns {
  [x: string]: {
    title: string;
    items: ITask[];
  };
}

export interface IColumn {
  title: string;
  items: ITask[];
}

export interface IAddTaskPayload {
  columnId: string;
  data: ITask;
}
export interface IUpdateTaskPayload {
  columnId: string;
  taskId: string;
  data: ITask;
}

export interface IDeleteTaskPayload {
  columnId: string;
  taskId: string;
}
