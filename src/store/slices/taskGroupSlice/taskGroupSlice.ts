import { createSlice } from "@reduxjs/toolkit";
import { TaskGroup } from "../../types";

const initialState: TaskGroup[] = [
  {
    id: 0,
    name: "Task Group 1",
    workspaceId: 0,
  },
  {
    id: 1,
    name: "Task Group 2",
    workspaceId: 0,
  },
  {
    id: 2,
    name: "Task Group 3",
    workspaceId: 1,
  },
  {
    id: 3,
    name: "Task Group 4",
    workspaceId: 1,
  },
];

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
      const { id } = action.payload;
      return state.filter((taskGroup) => taskGroup.id !== id);
    },
  },
});
export const { addTaskGroup, updateTaskGroup, deleteTaskGroup } =
  taskGroupSlice.actions;
export default taskGroupSlice.reducer;
