import "./Task.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { Subtask as SubtaskInterface } from "../../../../../store/types";
import { useMemo, useState } from "react";
import { deleteTask, updateTask } from "../../../../../store/slices/taskSlice";
import { ArrowDownIcon } from "../../../../../assets/icons/ArrowDownIcon/ArrowDownIcon";
import { ArrowRightIcon } from "../../../../../assets/icons/ArrowRightIcon";
import { iconStyle } from "./Task.iconStyles";
import { EditIcon } from "../../../../../assets/icons/EditIcon";
import { TrashIcon } from "../../../../../assets/icons/TrashIcon";
import { Subtask } from "./components";
import { PlusIcon } from "../../../../../assets/icons/PlusIcon";
import { TaskTexts } from "./Task.texts";

interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
  taskGroupId: number;
}

export const Task = ({ id, name, completed, taskGroupId }: TaskProps) => {
  const dispatch = useDispatch();
  const [isTaskCompleted, setIsTaskCompleted] = useState(completed);
  const [showSubtasks, setShowSubtasks] = useState(false);

  const subtasks = useSelector((state: RootState) =>
    state.subtask.filter((subtask: SubtaskInterface) => subtask.taskId === id)
  );
  const filteredSubtasks = useMemo(() => subtasks, [subtasks]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCompleted = event.target.checked;
    const updateTaskPayload = {
      id: id,
      name: name,
      completed: newCompleted,
      taskGroupId: taskGroupId,
    };
    dispatch(updateTask(updateTaskPayload));
    setIsTaskCompleted(newCompleted);
  };
  const handleTaskDelete = () => {
    dispatch(deleteTask({ id, taskGroupId }));
  };

  return (
    <>
      <span key={id} className="task">
        <span className="task-arrow-icon">
          <button
            className="task-arrow-button"
            onClick={() => setShowSubtasks(!showSubtasks)}
          >
            {showSubtasks ? (
              <ArrowDownIcon style={iconStyle.arrowRight} />
            ) : (
              <ArrowRightIcon style={iconStyle.arrowRight} />
            )}
          </button>
        </span>
        <input
          type="checkbox"
          className="task-checkbox"
          id={`task-checkbox-${id}`}
          checked={isTaskCompleted}
          onChange={handleCheckboxChange}
        />
        <p className="task-content">{name}</p>
        <span className="task-update-icons">
          <EditIcon style={iconStyle.edit} />
          <button className="task-delete-button" onClick={handleTaskDelete}>
            <TrashIcon style={iconStyle.trash} />
          </button>
        </span>
      </span>
      {showSubtasks && (
        <div>
          {filteredSubtasks.map((subtask: SubtaskInterface) => (
            <Subtask
              id={subtask.id}
              name={subtask.name}
              completed={subtask.completed}
              taskId={subtask.taskId}
            />
          ))}
        </div>
      )}
      <span className="task-button-add-subtask-container">
        <button
          className={`task-button-add-subtask ${showSubtasks ? "show" : ""}`}
        >
          <PlusIcon style={iconStyle.plus} />
          <p className="task-button-add-subtask-text">{TaskTexts.addSubtask}</p>
        </button>
      </span>
    </>
  );
};
