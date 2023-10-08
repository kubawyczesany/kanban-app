import { useSelector } from "react-redux";
import "./WorkspaceContainer.scss";
import { Workspace } from "./components";
import { RootState } from "../../store/store";

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
    </div>
  );
};
