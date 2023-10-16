import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { TaskGroup as TaskGroupInterface } from "../../../../store/types";
import "./Workspace.scss";
import { TaskGroup } from "../taskGroupContainer/taskGroupComponent";
import { useCallback, useMemo, useState } from "react";
import { UpdateDeleteIcons } from "../../../../assets/icons/UpdateDeleteIcons";
import { EditTaskGroup } from "../taskGroupContainer/taskGroupComponent/components";
import { deleteTaskGroup } from "../../../../store/slices/taskGroupSlice";
import { TaskCounter } from "../taskCounter/TaskCounter";

interface WorkspaceProps {
  workspaceId: number;
}

export const Workspace = ({ workspaceId }: WorkspaceProps) => {
  const taskGroups = useSelector((state: RootState) =>
    state.taskGroup.filter((taskGroup) => taskGroup.workspaceId === workspaceId)
  );
  const [editTaskGroupId, setEditTaskGroupId] = useState<number | null>(null);
  const [showEditTaskGroup, setShowEditTaskGroup] = useState(false);
  const dispatch = useDispatch();

  const handleEditTaskGroupClick = (id: number) => {
    setEditTaskGroupId(id);
    setShowEditTaskGroup(true);
  };

  const handleCloseEditTaskGroup = () => {
    setEditTaskGroupId(null);
    setShowEditTaskGroup(false);
  };
  const handleDeleteClick = useCallback(
    (id: number, workspaceId: number) => {
      dispatch(deleteTaskGroup({ id, workspaceId }));
    },
    [dispatch]
  );

  const memoizedTaskGroups = useMemo(
    () =>
      taskGroups.map((taskGroup: TaskGroupInterface) => (
        <div key={taskGroup.id}>
          {editTaskGroupId === taskGroup.id && showEditTaskGroup ? (
            <div key={taskGroup.id} className="task-group">
              <EditTaskGroup
                onCloseButtonClick={handleCloseEditTaskGroup}
                id={taskGroup.id}
                name={taskGroup.name}
                workspaceId={workspaceId}
              />
            </div>
          ) : (
            <div key={taskGroup.id} className="task-group">
              <span className="task-group-header">
                <p className="task-group-name">{taskGroup.name}</p>
                <TaskCounter groupId={taskGroup.id} />
                <UpdateDeleteIcons
                  onEditClick={() => handleEditTaskGroupClick(taskGroup.id)}
                  onDeleteClick={() =>
                    handleDeleteClick(taskGroup.id, workspaceId)
                  }
                />
              </span>
              <TaskGroup
                id={taskGroup.id}
                name={taskGroup.name}
                workspaceId={workspaceId}
              />
            </div>
          )}
        </div>
      )),
    [
      taskGroups,
      workspaceId,
      editTaskGroupId,
      handleDeleteClick,
      showEditTaskGroup,
    ]
  );

  return <>{memoizedTaskGroups}</>;
};
