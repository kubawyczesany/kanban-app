import { useDispatch } from "react-redux";
import "./CreateTaskGroupButton.scss";
import { useState } from "react";
import { iconStyle } from "./CreateTaskGroupButton.iconStyle";
import { CreateTaskGroupButtonTexts } from "./CreateTaskGroupButton.texts";
import { addTaskGroup } from "../../../../../store/slices/taskGroupSlice";
import { CloseIcon } from "../../../../../assets/icons/CloseIcon";
import { PlusIcon } from "../../../../../assets/icons/PlusIcon";

interface CreateTaskGroupButtonProps {
  workspaceId: number | null;
}

let taskGroupId = 0;

const newTaskGroupId = () => {
  taskGroupId += 1;
  return taskGroupId;
};

export const CreateTaskGroupButton = ({
  workspaceId,
}: CreateTaskGroupButtonProps) => {
  const dispatch = useDispatch();
  const [showInput, setShowInput] = useState(false);
  const [taskGroupName, setTaskGroupName] = useState("");
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleButtonClick = () => {
    if (workspaceId !== null && taskGroupName.trim() !== "") {
      const newTaskGroup = {
        id: newTaskGroupId(),
        name: taskGroupName,
        workspaceId: workspaceId,
      };
      dispatch(addTaskGroup(newTaskGroup));
      setTaskGroupName("");
    }
    setShowInput(!showInput);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setTaskGroupName(event.currentTarget.value);
      handleButtonClick();
    }
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };
  const handleInputBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <>
      {showInput ? (
        <div className="create-task-group">
          <span className="create-task-group-row-1">
            <input
              type="text"
              className="create-task-group-input"
              placeholder={CreateTaskGroupButtonTexts.placeholder}
              value={taskGroupName}
              onChange={(event) => setTaskGroupName(event.currentTarget.value)}
              onKeyDown={handleKeyDown}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </span>
          <span className="create-task-group-row-2">
            <button
              className={`create-task-group-container-button ${
                isInputFocused
                  ? "create-task-group-container-button-focused"
                  : ""
              }`}
              onClick={handleButtonClick}
            >
              <p className="create-task-group-container-button-text">
                {CreateTaskGroupButtonTexts.saveList}
              </p>
            </button>
            <button
              className="create-task-group-container-close-button"
              onClick={handleButtonClick}
            >
              <CloseIcon style={iconStyle} />
            </button>
          </span>
        </div>
      ) : (
        <button
          className="create-task-group-button"
          onClick={handleButtonClick}
        >
          <PlusIcon style={iconStyle} />
          <p className="create-task-group-button-text">
            {CreateTaskGroupButtonTexts.addList}
          </p>
        </button>
      )}
    </>
  );
};
