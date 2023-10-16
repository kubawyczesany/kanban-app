import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseIcon } from "../../../../../../assets/icons/CloseIcon";
import { TaskGroup } from "../../../../../../store/types";
import { updateTaskGroup } from "../../../../../../store/slices/taskGroupSlice";
import { EditTaskGroupTexts } from "./EditTaskGroupTexts";
import { iconStyle } from "../../../taskComponent/TaskIconStyles";

interface EditTaskGroup extends TaskGroup {
  onCloseButtonClick: () => void;
}

export const EditTaskGroup = ({
  id,
  name,
  workspaceId,
  onCloseButtonClick,
}: EditTaskGroup) => {
  const [taskGroupName, setTaskGroupName] = useState(name);
  const [isTaskGroupNameValid, setIsTaskGroupNameValid] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTaskGroupName(name);
  }, [name]);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleEditTaskGroup();
    }
  };

  const handleEditTaskGroup = () => {
    if (taskGroupName.trim() !== "") {
      dispatch(
        updateTaskGroup({
          id: id,
          name: taskGroupName,
          workspaceId: workspaceId,
        })
      );
      setIsTaskGroupNameValid(true);
      onCloseButtonClick();
    } else {
      setIsTaskGroupNameValid(false);
      setTaskGroupName("");
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
      <div className="add-task">
        <span className="add-task-row-1">
          <input
            type="checkbox"
            className="add-task-checkbox"
            id="add-task-checkbox"
          />
          <input
            type="text"
            className={`add-task-input ${
              !isTaskGroupNameValid ? "add-task-input-invalid" : ""
            }`}
            placeholder={EditTaskGroupTexts.editPlaceholder}
            value={taskGroupName}
            onChange={(event) => setTaskGroupName(event.currentTarget.value)}
            onKeyDown={handleOnKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </span>
        <span className="add-task-row-2">
          <button
            className={`add-task-container-button ${
              isInputFocused ? "add-task-container-button-focused" : ""
            }`}
            onClick={handleEditTaskGroup}
          >
            <p className="add-task-container-button-text">
              {EditTaskGroupTexts.saveTaskGroup}
            </p>
          </button>
          <button
            className="add-task-container-close-button"
            onClick={onCloseButtonClick}
          >
            <CloseIcon style={iconStyle.plus} />
          </button>
        </span>
      </div>
    </>
  );
};
