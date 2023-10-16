import { useSelector } from "react-redux";
import "./WorkspaceContainer.scss";
import { RootState } from "../../store/store";
import { CreateTaskGroupButton } from "./components/taskGroupContainer/createTaskGroupButton";
import { Workspace } from "./components/workspace/Workspace";
import { useMemo } from "react";

export const WorkspaceContainer = () => {
  const displayedWorkspaceId = useSelector((state: RootState) => {
    const workspace = state.workspace.find(
      (workspace) => workspace.isDisplayed === true
    );
    return workspace ? workspace.id : null;
  });

  const memoizedDisplayedWorkspaceId = useMemo(
    () => displayedWorkspaceId,
    [displayedWorkspaceId]
  );

  return (
    <div className="workspace-container">
      <Workspace workspaceId={memoizedDisplayedWorkspaceId as number} />
      <CreateTaskGroupButton workspaceId={memoizedDisplayedWorkspaceId} />
    </div>
  );
};
