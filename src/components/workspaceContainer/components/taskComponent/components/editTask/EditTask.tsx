import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../../../../../../store/slices/taskSlice";
import { EditTaskTexts } from "./EditTaskTexts";
import { CloseIcon } from "../../../../../../assets/icons/CloseIcon";
import { iconStyle } from "../../TaskIconStyles";
import { Task } from "../../../../../../store/types";

interface EditTaskProps extends Task {
  onCloseButtonClick: () => void;
}

export const EditTask = ({
  id,
  name,
  completed,
  taskGroupId,
  onCloseButtonClick,
}: EditTaskProps) => {
  const [taskName, setTaskName] = useState(name);
  const [isTaskNameValid, setIsTaskNameValid] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTaskName(name);
  }, [name]);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleEditTask();
    }
  };

  const handleEditTask = () => {
    if (taskName.trim() !== "") {
      dispatch(
        updateTask({
          id: id,
          name: taskName,
          completed: completed,
          taskGroupId: taskGroupId,
        })
      );
      setIsTaskNameValid(true);
      onCloseButtonClick();
    } else {
      setIsTaskNameValid(false);
      setTaskName("");
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
              !isTaskNameValid ? "add-task-input-invalid" : ""
            }`}
            placeholder={EditTaskTexts.editPlaceholder}
            value={taskName}
            onChange={(event) => setTaskName(event.currentTarget.value)}
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
            onClick={handleEditTask}
          >
            <p className="add-task-container-button-text">
              {EditTaskTexts.saveTask}
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
