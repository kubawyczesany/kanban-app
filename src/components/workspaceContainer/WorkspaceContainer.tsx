import { useSelector } from "react-redux";
import "./WorkspaceContainer.scss";
import { Workspace } from "./components/Workspace";
import { RootState } from "../../store/store";
import { CreateTaskGroupButton } from "./components/CreateTaskGroupButton";

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
