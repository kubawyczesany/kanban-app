import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { TaskGroup as TaskGroupInterface } from "../../../../store/types";
import "./Workspace.scss";
import { TaskGroup } from "../taskGroup/taskGroup";
import { useMemo, useState } from "react";
import { UpdateDeleteIcons } from "../../../../assets/icons/UpdateDeleteIcons";
import { EditTaskGroup } from "../TaskGroup/TaskGroup/components";

interface WorkspaceProps {
  workspaceId: number;
}

export const Workspace = ({ workspaceId }: WorkspaceProps) => {
  const taskGroups = useSelector((state: RootState) =>
    state.taskGroup.filter((taskGroup) => taskGroup.workspaceId === workspaceId)
  );

  const [editTaskGroupId, setEditTaskGroupId] = useState<number | null>(null);

  const handleEditTaskGroupClick = (id: number) => {
    setEditTaskGroupId(id);
  };

  const handleCloseEditTaskGroup = () => {
    setEditTaskGroupId(null);
  };

  const memoizedTaskGroups = useMemo(
    () =>
      taskGroups.map((taskGroup: TaskGroupInterface) => (
        <div key={taskGroup.id} className="task-group">
          <span className="task-group-header">
            <p className="task-group-name">{taskGroup.name}</p>
            <UpdateDeleteIcons
              onEditClick={() => handleEditTaskGroupClick(taskGroup.id)}
              onDeleteClick={() => undefined}
            />
          </span>
          {editTaskGroupId === taskGroup.id ? (
            <EditTaskGroup
              onCloseButtonClick={handleCloseEditTaskGroup}
              id={taskGroup.id}
              name={taskGroup.name}
              workspaceId={workspaceId}
            />
          ) : (
            <TaskGroup
              id={taskGroup.id}
              name={taskGroup.name}
              workspaceId={workspaceId}
            />
          )}
        </div>
      )),
    [taskGroups, workspaceId, editTaskGroupId]
  );

  return <>{memoizedTaskGroups}</>;
};
