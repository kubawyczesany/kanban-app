import { useState } from "react";
import { useDispatch } from "react-redux";
import { PlusIcon } from "../../../../../../assets/icons/PlusIcon";
import "./AddWorkspaceButton.scss";
import { addWorkspace } from "../../../../../../store/slices/workspaceSlice";

let workspaceId = 0;

const newWorkspaceId = () => {
  workspaceId += 1;
  return workspaceId;
};

export const AddWorkspaceButton = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const dispatch = useDispatch();

  const handleAddWorkspace = () => {
    const newWorkspace = {
      id: newWorkspaceId(),
      name: workspaceName,
      taskGroups: [],
    };
    dispatch(addWorkspace(newWorkspace));
    setWorkspaceName("");
  };

  return (
    <div className="add-workspace-button">
      <input
        type="text"
        placeholder="Enter workspace name"
        value={workspaceName}
        onChange={(e) => setWorkspaceName(e.target.value)}
      />
      <button onClick={handleAddWorkspace}>
        <PlusIcon />
        Create Workspace
      </button>
    </div>
  );
};
