import { useDispatch } from "react-redux";
import { PlusIcon } from "../../../../assets/icons/PlusIcon";
import { addTaskGroup } from "../../../../store/slices/taskGroupSlice";
import "./CreateTaskGroupButton.scss";
import { useState } from "react";
import { iconStyle } from "./CreateTaskGroupButton.iconStyle";
import { CreateTaskGroupButtonTexts } from "./CreateTaskGroupButton.texts";

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
  return (
    <>
      {showInput ? (
        <input
          type="text"
          className="create-task-group-button-input"
          placeholder="Title of the new list..."
          value={taskGroupName}
          onChange={(event) => setTaskGroupName(event.currentTarget.value)}
          onKeyDown={handleKeyDown}
        />
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
