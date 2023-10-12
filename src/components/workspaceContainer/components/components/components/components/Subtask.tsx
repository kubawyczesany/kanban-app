import { useState } from "react";
import { EditIcon } from "../../../../../../assets/icons/EditIcon";
import { TrashIcon } from "../../../../../../assets/icons/TrashIcon";
import { iconStyle } from "../Task.iconStyles";
import { useDispatch } from "react-redux";
import {
  deleteSubtask,
  updateSubtask,
} from "../../../../../../store/slices/subtaskSlice";
import "./Subtask.scss";

interface SubtaskProps {
  taskId: number;
  name: string;
  completed: boolean;
  id: number;
}

export const Subtask = ({ id, name, taskId, completed }: SubtaskProps) => {
  const [isSubtaskCompleted, setIsSubtaskCompleted] = useState(completed);
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

  return (
    <span key={id} className="subtask">
      <input
        type="checkbox"
        className="subtask-checkbox"
        id={`subtask-checkbox-${id}`}
        checked={isSubtaskCompleted}
        onChange={handleCheckboxChange}
      />
      <p className="subtask-content">{name}</p>
      <span className="subtask-update-icons">
        <button className="subtask-edit-button">
          <EditIcon style={iconStyle.edit} />
        </button>
        <button className="subtask-delete-button" onClick={handleDeleteClick}>
          <TrashIcon style={iconStyle.trash} />
        </button>
      </span>
    </span>
  );
};
