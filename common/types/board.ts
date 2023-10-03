export interface ITask {
  id: string;
  task: string;
}

export interface IColumn {
  [x: string]: {
    title: string;
    items: ITask[];
  };
}
