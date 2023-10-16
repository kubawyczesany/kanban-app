import { useState } from "react";
import { useDispatch } from "react-redux";
import { addSubtask } from "../../../../../../store/slices/subtaskSlice";
import { PlusIcon } from "../../../../../../assets/icons/PlusIcon";
import { iconStyle } from "../../../taskComponent/TaskIconStyles";
import { CloseIcon } from "../../../../../../assets/icons/CloseIcon";
import "./AddSubtask.scss";
import { AddTaskTexts } from "../../../taskComponent/components/addTask/AddTaskTexts";

interface AddSubtaskProps {
  taskId: number;
}
let subtaskId = 0;

const newSubtaskId = () => {
  subtaskId += 1;
  return subtaskId;
};

export const AddSubtask = ({ taskId }: AddSubtaskProps) => {
  const [subtaskName, setSubtaskName] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isSubtaskNameValid, setIsSubtaskNameValid] = useState(true);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    setShowInput(!showInput);
  };

  const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAddSubtask();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtaskName(event.target.value);
  };

  const handleAddSubtask = () => {
    if (subtaskName.trim() !== "") {
      dispatch(
        addSubtask({
          id: newSubtaskId(),
          name: subtaskName,
          completed: false,
          taskId,
        })
      );
      setSubtaskName("");
      setShowInput(false);
      setIsSubtaskNameValid(true);
    } else {
      setIsSubtaskNameValid(false);
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
              placeholder={AddTaskTexts.placeholder}
              value={subtaskName}
              onChange={handleInputChange}
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
              onClick={handleAddSubtask}
            >
              <p className="add-task-container-button-text">
                {AddTaskTexts.addSubtask}
              </p>
            </button>
            <button
              className="add-task-container-close-button"
              onClick={handleButtonClick}
            >
              <CloseIcon style={iconStyle.plus} />
            </button>
          </span>
        </div>
      ) : (
        <span className="task-button-add-subtask-container">
          <button
            className="task-button-add-subtask"
            onClick={() => setShowInput(true)}
          >
            <PlusIcon style={iconStyle.plus} />
            <p className="task-button-add-subtask-text">
              {AddTaskTexts.addSubtask}
            </p>
          </button>
        </span>
      )}
    </>
  );
};
