import "./Task.scss";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../../../store/slices/taskSlice";
import { ArrowDownIcon } from "../../../../assets/icons/ArrowDownIcon";
import { ArrowRightIcon } from "../../../../assets/icons/ArrowRightIcon";
import { UpdateDeleteIcons } from "../../../../assets/icons/UpdateDeleteIcons";
import { iconStyle } from "./TaskIconStyles";
import { SubtaskList } from "../subtaskComponent/components/subtaskList/SubtaskList";
import { EditTask } from "./components/editTask/EditTask";
import { useEffect, useState } from "react";

interface TaskProps {
  id: number;
  name: string;
  completed: boolean;
  taskGroupId: number;
}

export const Task = ({ id, name, completed, taskGroupId }: TaskProps) => {
  const dispatch = useDispatch();
  const [showEditInput, setShowEditInput] = useState(false);
  const [showSubtasks, setShowSubtasks] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    dispatch(
      updateTask({
        id: id,
        name: name,
        completed: isChecked,
        taskGroupId: taskGroupId,
      })
    );
  }, [dispatch, id, isChecked, name, taskGroupId]);

  const handleTaskDelete = () => {
    dispatch(deleteTask({ id, taskGroupId }));
  };
  const handleShowEditInput = () => {
    setShowEditInput(!showEditInput);
  };
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <>
      {showEditInput ? (
        <EditTask
          id={id}
          name={name}
          completed={completed}
          taskGroupId={taskGroupId}
          onCloseButtonClick={handleShowEditInput}
        />
      ) : (
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
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <p className="task-content">{name}</p>
          <UpdateDeleteIcons
            onEditClick={handleShowEditInput}
            onDeleteClick={handleTaskDelete}
          />
        </span>
      )}
      {showSubtasks && <SubtaskList taskId={id} />}
    </>
  );
};
