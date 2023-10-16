import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../../store/store";
import {
  setIsDisplayed,
  deleteWorkspace,
} from "../../../../../../store/slices/workspaceSlice";
import "./SelectWorkspaceButton.scss";
import { EditWorkspace } from "./components/editWorkspaceComponent";
import { useState } from "react";
import { SelectWorkspaceDragAndDrop } from "./components/selectWorkspaceDragAndDrop";

export const SelectWorkspaceButton = () => {
  const dispatch = useDispatch();
  const workspaces = useSelector((state: RootState) => state.workspace);
  const [showEditWorkspace, setShowEditWorkspace] = useState(false);
  const [editWorkspaceId, setEditWorkspaceId] = useState<number | null>(null);

  if (workspaces.length > 0 && !workspaces.some((w) => w.isDisplayed)) {
    dispatch(setIsDisplayed(workspaces[0].id));
  }

  const handleWorkspaceButtonClick = (workspaceId: number) => {
    dispatch(setIsDisplayed(workspaceId));
  };

  const handleDeleteWorkspace = (id: number) => {
    dispatch(deleteWorkspace({ id }));
  };

  const handleShowEditWorkspace = (id: number) => {
    setEditWorkspaceId(id);
    setShowEditWorkspace(!showEditWorkspace);
  };

  return (
    <>
      {workspaces &&
        workspaces.map((workspace) => (
          <div key={workspace.id}>
            {showEditWorkspace && editWorkspaceId === workspace.id ? (
              <EditWorkspace
                key={workspace.id}
                workspace={workspace}
                onCloseButtonClick={() =>
                  handleShowEditWorkspace(editWorkspaceId)
                }
              />
            ) : (
              <SelectWorkspaceDragAndDrop
                key={workspace.id}
                workspace={workspace}
                handleWorkspaceButtonClick={() =>
                  handleWorkspaceButtonClick(workspace.id)
                }
                handleDeleteWorkspace={() =>
                  handleDeleteWorkspace(workspace.id)
                }
                handleShowEditWorkspace={() =>
                  handleShowEditWorkspace(workspace.id)
                }
              />
            )}
          </div>
        ))}
    </>
  );
};
