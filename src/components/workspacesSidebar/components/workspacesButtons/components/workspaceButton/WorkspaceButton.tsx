import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import { Workspace } from "../../../../../../store/types";
import { WorkspaceButtonIcon } from "../../../../../../assets/icons/WorkspaceButtonIcon";
import { setIsDisplayed } from "../../../../../../store/slices/workspaceSlice";
import "./WorkspaceButton.scss";

export const WorkspaceButton = () => {
  const dispatch = useDispatch();
  const workspaces = useSelector((state: RootState) => state.workspace);
  const handleWorkspaceButtonClick = (workspaceId: number) => {
    dispatch(setIsDisplayed(workspaceId));
  };

  return (
    <>
      {workspaces &&
        workspaces.map((workspace: Workspace) => (
          <button
            className="workspace-button"
            key={workspace.id}
            onClick={() => handleWorkspaceButtonClick(workspace.id)}
          >
            <WorkspaceButtonIcon />
            {workspace.name}
          </button>
        ))}
    </>
  );
};
