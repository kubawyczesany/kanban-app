import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { CloseIcon } from "../../../../../../assets/icons/CloseIcon";
import { Subtask } from "../../../../../../store/types";
import { EditTaskTexts } from "../../../taskComponent/components/editTask/EditTaskTexts";
import { iconStyle } from "../../../taskComponent/TaskIconStyles";
import "./EditSubtask.scss";
import { updateSubtask } from "../../../../../../store/slices/subtaskSlice";

interface EditSubtaskProps extends Subtask {
  onCloseButtonClick: () => void;
}

export const EditSubtask = ({
  id,
  name,
  completed,
  taskId,
  onCloseButtonClick,
}: EditSubtaskProps) => {
  const [subtaskName, setSubtaskName] = useState(name);
  const [isSubtaskNameValid, setIsSubtaskNameValid] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setSubtaskName(name);
  }, [name]);

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleEditSubtask();
    }
  };

  const handleEditSubtask = () => {
    if (subtaskName.trim() !== "") {
      dispatch(
        updateSubtask({
          id: id,
          name: subtaskName,
          completed: completed,
          taskId: taskId,
        })
      );
      setIsSubtaskNameValid(true);
      onCloseButtonClick();
    } else {
      setIsSubtaskNameValid(false);
      setSubtaskName("");
    }
  };
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <span className="edit-subtask">
      <div className="add-subtask">
        <span className="add-task-row-1">
          <input
            type="checkbox"
            className="add-task-checkbox"
            id="add-task-checkbox"
          />
          <input
            type="text"
            className={`add-task-input ${
              !isSubtaskNameValid ? "add-task-input-invalid" : ""
            }`}
            placeholder={EditTaskTexts.editPlaceholder}
            value={subtaskName}
            onChange={(event) => setSubtaskName(event.currentTarget.value)}
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
            onClick={handleEditSubtask}
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
    </span>
  );
};
