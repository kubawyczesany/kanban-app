import { useState } from "react";
import { useDispatch } from "react-redux";
import "./Subtask.scss";
import {
  deleteSubtask,
  updateSubtask,
} from "../../../../store/slices/subtaskSlice";
import { UpdateDeleteIcons } from "../../../../assets/icons/UpdateDeleteIcons";
import { EditSubtask } from "./components/editSubtask";

interface SubtaskProps {
  taskId: number;
  name: string;
  completed: boolean;
  id: number;
}

export const Subtask = ({ id, name, taskId, completed }: SubtaskProps) => {
  const [isSubtaskCompleted, setIsSubtaskCompleted] = useState(completed);
  const [showEditInput, setShowEditInput] = useState(false);
  const dispatch = useDispatch();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCompleted = event.target.checked;
    const updateSubtaskPayload = {
      id: id,
      name: name,
      completed: newCompleted,
      taskId: taskId,
    };
    dispatch(updateSubtask(updateSubtaskPayload));
    setIsSubtaskCompleted(newCompleted);
  };
  const handleDeleteClick = () => {
    dispatch(deleteSubtask({ id, taskId }));
  };
  const handleShowEditInput = () => {
    setShowEditInput(!showEditInput);
  };

  return (
    <>
      {showEditInput ? (
        <EditSubtask
          onCloseButtonClick={handleShowEditInput}
          id={id}
          name={name}
          completed={completed}
          taskId={taskId}
        />
      ) : (
        <span className="subtask">
          <input
            type="checkbox"
            className="subtask-checkbox"
            id={`subtask-checkbox-${id}`}
            checked={isSubtaskCompleted}
            onChange={handleCheckboxChange}
          />
          <p className="subtask-content">{name}</p>
          <span className="subtask-icons">
            <UpdateDeleteIcons
              onEditClick={handleShowEditInput}
              onDeleteClick={handleDeleteClick}
            />
          </span>
        </span>
      )}
    </>
  );
};
