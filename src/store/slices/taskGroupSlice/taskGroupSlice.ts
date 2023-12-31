import { createSlice } from "@reduxjs/toolkit";
import { TaskGroup } from "../../types";

const initialState: TaskGroup[] = [];

export const taskGroupSlice = createSlice({
  name: "taskGroup",
  initialState,
  reducers: {
    addTaskGroup: (state, action) => {
      const newTaskGroup = action.payload;
      state.push(newTaskGroup);
    },
    updateTaskGroup: (state, action) => {
      const { id, name } = action.payload;
      const taskGroup = state.find((taskGroup) => taskGroup.id === id);
      if (taskGroup) {
        taskGroup.name = name;
      }
    },
    deleteTaskGroup: (state, action) => {
      const { id, workspaceId } = action.payload;
      return state.filter(
        (taskGroup) =>
          taskGroup.id !== id || taskGroup.workspaceId !== workspaceId
      );
    },
  },
});
export const { addTaskGroup, updateTaskGroup, deleteTaskGroup } =
  taskGroupSlice.actions;
export default taskGroupSlice.reducer;
