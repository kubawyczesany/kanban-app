import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

const initialState: Task[] = [];

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      state.push(newTask);
    },
    updateTask: (state, action) => {
      const { id, name } = action.payload;
      const task = state.find((task) => task.id === id);
      if (task) {
        task.name = name;
      }
    },
    deleteTask: (state, action) => {
      const { id, taskGroupId } = action.payload;
      return state.filter(
        (task) => task.id !== id || task.taskGroupId !== taskGroupId
      );
    },
  },
});
export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
