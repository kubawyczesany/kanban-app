import { useDispatch } from "react-redux";
import { useState } from "react";
import { Workspace } from "../../../../../../../../store/types";
import { updateWorkspace } from "../../../../../../../../store/slices/workspaceSlice";
import { WorkspaceButtonIcon } from "../../../../../../../../assets/icons/WorkspaceButtonIcon";
import { texts } from "../../../addWorkspaceButton/AddWorkspaceButton.texts";
import { TickIcon } from "../../../../../../../../assets/icons/TickIcon";
import { tickIconStyle } from "../../../addWorkspaceButton/AddWorkspaceButton.iconsStyles";

interface EditWorkspaceProps {
  workspace: Workspace;
  onCloseButtonClick: () => void;
}

export const EditWorkspace: React.FC<EditWorkspaceProps> = ({
  workspace,
  onCloseButtonClick,
}) => {
  const dispatch = useDispatch();
  const [newWorkspaceName, setNewWorkspaceName] = useState(workspace.name);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleUpdateWorkspace(event);
    }
  };

  const handleUpdateWorkspace = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateWorkspace({ id: workspace.id, name: newWorkspaceName }));
    onCloseButtonClick();
  };

  return (
    <>
      <div className="workspace-button">
        <WorkspaceButtonIcon />
        <input
          className="add-workspace-input"
          type="text"
          placeholder={workspace.name}
          onChange={(e) => setNewWorkspaceName(e.target.value)}
          onKeyDown={handleOnKeyDown}
        />
      </div>
      <button
        className="add-workspace-save-button"
        onClick={handleUpdateWorkspace}
      >
        <TickIcon style={tickIconStyle} />
        {texts.saveEditWorkspace}
      </button>
    </>
  );
};
