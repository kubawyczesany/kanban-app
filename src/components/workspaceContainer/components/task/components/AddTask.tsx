import { useState } from "react";
import { AddTaskTexts } from "./AddTask.texts";
import { iconStyle } from "./AddTask.iconStyles";
import "./AddTask.scss";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../../store/slices/taskSlice";
import { CloseIcon } from "../../../../../assets/icons/CloseIcon";
import { PlusIcon } from "../../../../../assets/icons/PlusIcon";

interface AddTaskProps {
  taskGroupId: number | null;
}

let taskId = 0;

const newTaskId = () => {
  taskId += 1;
  return taskId;
};

export const AddTask = ({ taskGroupId }: AddTaskProps) => {
  const [showInput, setShowInput] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [isTaskNameValid, setIsTaskNameValid] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddTask();
    }
  };

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      const newTask = {
        id: newTaskId(),
        name: taskName,
        completed: false,
        taskGroupId: taskGroupId,
      };
      dispatch(addTask(newTask));
      setTaskName("");
      setIsTaskNameValid(true);
    } else {
      setIsTaskNameValid(false);
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
      {showInput && (
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
              placeholder={AddTaskTexts.placeholder}
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
              onClick={handleAddTask}
            >
              <p className="add-task-container-button-text">
                {AddTaskTexts.addTask}
              </p>
            </button>
            <button
              className="add-task-container-close-button"
              onClick={handleButtonClick}
            >
              <CloseIcon style={iconStyle} />
            </button>
          </span>
        </div>
      )}
      <button className="add-task-button" onClick={handleButtonClick}>
        <PlusIcon style={iconStyle} />
        <p className="add-task-button-text">{AddTaskTexts.addCard}</p>
      </button>
    </>
  );
};
