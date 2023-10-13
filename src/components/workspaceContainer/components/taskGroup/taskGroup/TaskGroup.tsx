import { useSelector } from "react-redux";
import "./TaskGroup.scss";
import { AddTask } from "../../task/components";
import { Task } from "../../task";
import { RootState } from "../../../../../store/store";
import { Task as TaskInterface } from "../../../../../store/types";

interface TaskGroupProps {
  taskGroupId: number | null;
}

export const TaskGroup = ({ taskGroupId }: TaskGroupProps) => {
  const task = useSelector((state: RootState) =>
    state.task.filter((task) => task.taskGroupId === taskGroupId)
  );

  return (
    <>
      {task.map((task: TaskInterface) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          completed={task.completed}
          taskGroupId={task.taskGroupId}
        />
      ))}
      <AddTask taskGroupId={taskGroupId} />
    </>
  );
};
