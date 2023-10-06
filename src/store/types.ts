export interface WorkspaceInterface {
  workspaces: { id: string; name: string; taskGroups: TaskGroup[] }[];
}
export interface TaskGroup {
  id: number;
  name: string;
  tasks: Task[];
}

export interface Task {
  id: number;
  name: string;
  completed: boolean;
  subtasks: Subtask[];
}

export interface Subtask {
  id: number;
  name: string;
  completed: boolean;
}
