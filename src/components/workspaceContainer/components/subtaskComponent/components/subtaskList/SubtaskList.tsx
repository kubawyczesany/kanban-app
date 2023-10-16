import { useSelector } from "react-redux";
import { useMemo } from "react";
import { RootState } from "../../../../../../store/store";
import { Subtask as SubtaskInterface } from "../../../../../../store/types";
import { Subtask } from "../..";
import { AddSubtask } from "../addSubtask";

interface SubtaskListProps {
  taskId: number;
}

export const SubtaskList = ({ taskId }: SubtaskListProps) => {
  const subtasks = useSelector((state: RootState) =>
    state.subtask.filter(
      (subtask: SubtaskInterface) => subtask.taskId === taskId
    )
  );
  const filteredSubtasks = useMemo(() => subtasks, [subtasks]);

  return (
    <>
      {filteredSubtasks.map((subtask: SubtaskInterface) => (
        <span key={subtask.id}>
          <Subtask
            id={subtask.id}
            name={subtask.name}
            completed={subtask.completed}
            taskId={subtask.taskId}
          />
        </span>
      ))}
      <AddSubtask taskId={taskId} />
    </>
  );
};
