import { createSlice } from "@reduxjs/toolkit";
import { Task } from "../../types";

const initialState: Task[] = [
  {
    id: 0,
    name: "Task 1",
    completed: false,
    taskGroupId: 0,
  },
  {
    id: 1,
    name: "Task 2",
    completed: false,
    taskGroupId: 1,
  },
  {
    id: 2,
    name: "Task 3",
    completed: false,
    taskGroupId: 2,
  },
  {
    id: 3,
    name: "Task 4",
    completed: false,
    taskGroupId: 3,
  },
];

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
      const { id } = action.payload;
      return state.filter((task) => task.id !== id);
    },
    // TODO task completed
  },
});
export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;
