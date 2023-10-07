import "./WorkspaceContainer.scss";
import { Workspace } from "./components";

export const WorkspaceContainer = () => {
  return (
    <div className="workspace-container">
      <Workspace workspaceId={1} />
    </div>
  );
};
