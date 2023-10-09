import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { Task } from "../../../../../store/types";
import "./TaskGroup.scss";
import { AddTask } from "../AddTask";

interface TaskGroupProps {
  taskGroupId: number | null;
}

export const TaskGroup = ({ taskGroupId }: TaskGroupProps) => {
  const task = useSelector((state: RootState) =>
    state.task.filter((task) => task.taskGroupId === taskGroupId)
  );

  return (
    <>
      {task.map((task: Task) => (
        <div key={task.id} className="task">
          <p className="task-content">{task.name}</p>
          {/* Display subtasks here */}
        </div>
      ))}
      <AddTask taskGroupId={taskGroupId} />
    </>
  );
};
