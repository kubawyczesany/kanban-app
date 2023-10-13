import { useSelector } from "react-redux";
import "./WorkspaceContainer.scss";
import { RootState } from "../../store/store";
import { CreateTaskGroupButton } from "./components/taskGroup/createTaskGroupButton";
import { Workspace } from "./components/workspace/Workspace";

export const WorkspaceContainer = () => {
  const displayedWorkspaceId = useSelector((state: RootState) => {
    const workspace = state.workspace.find(
      (workspace) => workspace.isDisplayed === true
    );
    return workspace ? workspace.id : null;
  });
  return (
    <div className="workspace-container">
      <Workspace workspaceId={displayedWorkspaceId} />
      <CreateTaskGroupButton workspaceId={displayedWorkspaceId} />
    </div>
  );
};
