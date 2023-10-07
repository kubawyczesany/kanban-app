import { createSlice } from "@reduxjs/toolkit";
import { Subtask } from "../../types";

const initialState: Subtask[] = [
  {
    id: 0,
    name: "Subtask number 1",
    completed: false,
    taskId: 0,
  },
];

export const subtaskSlice = createSlice({
  name: "subtask",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newSubtask = action.payload;
      state.push(newSubtask);
    },
    updateTask: (state, action) => {
      const { id, name } = action.payload;
      const subtask = state.find((subtask) => subtask.id === id);
      if (subtask) {
        subtask.name = name;
      }
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      return state.filter((subtask) => subtask.id !== id);
    },
    // TODO subtask completed
  },
});
export default subtaskSlice.reducer;
