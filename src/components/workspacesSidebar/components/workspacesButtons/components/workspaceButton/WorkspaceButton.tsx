import { WorkspaceButtonIcon } from "../../../../../../assets/icons/WorkspaceButtonIcon";
import "./WorkspaceButton.scss";

export const WorkspaceButton = () => {
  return (
    <button className="workspace-button">
      <WorkspaceButtonIcon />
      ACME Corp workspace
    </button>
  );
};
