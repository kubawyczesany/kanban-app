import { useState } from "react";
import { AddTaskTexts } from "./AddTask.texts";
import { PlusIcon } from "../../../../../assets/icons/PlusIcon";
import { iconStyle } from "./AddTask.iconStyles";
import "./AddTask.scss";
import { useDispatch } from "react-redux";
import { addTask } from "../../../../../store/slices/taskSlice";

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
  const [clickCount, setClickCount] = useState(0);
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    if (clickCount === 0) {
      setShowInput(true);
      setClickCount(1);
    } else {
      handleAddTask();
      setClickCount(0);
    }
  };
  const handleOnKeyDown = () => {};
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
    }
  };
  return (
    <>
      {showInput && (
        <input
          type="text"
          className="add-task"
          placeholder={AddTaskTexts.placeholder}
          value={taskName}
          onChange={(event) => setTaskName(event.currentTarget.value)}
          onKeyDown={handleOnKeyDown}
        />
      )}
      <button className="add-task-button" onClick={handleButtonClick}>
        <PlusIcon style={iconStyle} />
        <p className="add-task-button-text">{AddTaskTexts.addCard}</p>
      </button>
    </>
  );
};
