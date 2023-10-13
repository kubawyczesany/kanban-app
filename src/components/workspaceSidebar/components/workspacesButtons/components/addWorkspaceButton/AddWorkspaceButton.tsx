import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { PlusIcon } from "../../../../../../assets/icons/PlusIcon";
import "./AddWorkspaceButton.scss";
import {
  addWorkspace,
  setIsDisplayed,
} from "../../../../../../store/slices/workspaceSlice";
import { WorkspaceButtonIcon } from "../../../../../../assets/icons/WorkspaceButtonIcon";
import { TickIcon } from "../../../../../../assets/icons/TickIcon";
import { plusIconStyle, tickIconStyle } from "./AddWorkspaceButton.iconsStyles";
import { texts } from "./AddWorkspaceButton.texts";

let workspaceId = 0;

const newWorkspaceId = () => {
  workspaceId += 1;
  return workspaceId;
};

export const AddWorkspaceButton = () => {
  const [workspaceName, setWorkspaceName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showInput]);

  const handleShowWorkspaceInput = () => {
    setShowInput(!showInput);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === texts.enter) {
      event.preventDefault();
      setWorkspaceName(event.currentTarget.value);
      handleAddWorkspace();
    }
  };
  const handleAddWorkspace = () => {
    const newWorkspace = {
      id: newWorkspaceId(),
      name: workspaceName,
      isDisplayed: true,
    };
    dispatch(addWorkspace(newWorkspace));
    dispatch(setIsDisplayed(workspaceId));
    setWorkspaceName("");
    setShowInput(!showInput);
  };

  return (
    <>
      {showInput ? (
        <>
          <div className="workspace-button">
            <WorkspaceButtonIcon />
            <input
              className="add-workspace-input"
              type="text"
              placeholder={texts.inputPlaceholder}
              value={workspaceName}
              onChange={(e) => setWorkspaceName(e.target.value)}
              onKeyDown={handleKeyDown}
              ref={inputRef}
            />
          </div>
          <button
            className="add-workspace-save-button"
            onClick={handleAddWorkspace}
          >
            <TickIcon style={tickIconStyle} />
            {texts.saveWorkspace}
          </button>
        </>
      ) : (
        <button
          className="add-workspace-button"
          onClick={handleShowWorkspaceInput}
        >
          <PlusIcon style={plusIconStyle} />
          {texts.createWorkspace}
        </button>
      )}
    </>
  );
};
