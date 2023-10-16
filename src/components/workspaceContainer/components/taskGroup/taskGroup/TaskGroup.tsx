import { useSelector } from "react-redux";
import "./TaskGroup.scss";
import { Task } from "../../taskComponent";
import { RootState } from "../../../../../store/store";
import { Task as TaskInterface } from "../../../../../store/types";
import { AddTask } from "../../taskComponent/components/addTask/AddTask";
import { useMemo } from "react";

interface TaskGroupProps {
  id: number;
  name: string;
  workspaceId: number;
}

export const TaskGroup = ({ id }: TaskGroupProps) => {
  const tasks = useSelector((state: RootState) =>
    state.task.filter((task) => task.taskGroupId === id)
  );

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <>
      {memoizedTasks.map((task: TaskInterface) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          taskGroupId={task.taskGroupId}
        />
      ))}
      <AddTask taskGroupId={id} />
    </>
  );
};
