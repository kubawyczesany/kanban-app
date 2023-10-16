import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import "./TaskCounter.scss";

interface TaskCounterProps {
  groupId: number;
}

export const TaskCounter = ({ groupId }: TaskCounterProps) => {
  const tasks = useSelector((state: RootState) => state.task);
  const completedTasks = tasks.filter(
    (task) => task.completed && task.taskGroupId === groupId
  );

  return (
    <div>
      <p className="task-counter-content">
        {completedTasks.length}/
        {tasks.filter((task) => task.taskGroupId === groupId).length}
      </p>
    </div>
  );
};
