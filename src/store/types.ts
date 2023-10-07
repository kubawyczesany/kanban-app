export interface Workspace {
  id: number;
  name: string;
}

export interface TaskGroup {
  id: number;
  name: string;
  workspaceId: number;
}

export interface Task {
  id: number;
  name: string;
  completed: boolean;
  taskGroupId: number;
}

export interface Subtask {
  id: number;
  name: string;
  completed: boolean;
  taskId: number;
}
