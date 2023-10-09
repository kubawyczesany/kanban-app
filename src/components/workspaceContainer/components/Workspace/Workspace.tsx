import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { TaskGroup as TaskGroupInterface } from "../../../../store/types";
import "./Workspace.scss";
import { TaskGroup } from "../components/TaskGroup";

interface WorkspaceProps {
  workspaceId: number | null;
}

export const Workspace = ({ workspaceId }: WorkspaceProps) => {
  const taskGroups = useSelector((state: RootState) =>
    state.taskGroup.filter((taskGroup) => taskGroup.workspaceId === workspaceId)
  );

  return (
    <>
      {taskGroups.map((taskGroup: TaskGroupInterface) => (
        <div key={taskGroup.id} className="task-group">
          <p className="task-group-name">{taskGroup.name}</p>
          <TaskGroup taskGroupId={taskGroup.id} />
        </div>
      ))}
    </>
  );
};
