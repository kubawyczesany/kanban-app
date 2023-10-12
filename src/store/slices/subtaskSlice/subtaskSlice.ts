import { createSlice } from "@reduxjs/toolkit";
import { Subtask } from "../../types";

const initialState: Subtask[] = [];

export const subtaskSlice = createSlice({
  name: "subtask",
  initialState,
  reducers: {
    addSubtask: (state, action) => {
      const newSubtask = action.payload;
      state.push(newSubtask);
    },
    updateSubtask: (state, action) => {
      const { id, name } = action.payload;
      const subtask = state.find((subtask) => subtask.id === id);
      if (subtask) {
        subtask.name = name;
      }
    },
    deleteSubtask: (state, action) => {
      const { id, taskId } = action.payload;
      return state.filter(
        (subtask) => subtask.id !== id || subtask.taskId !== taskId
      );
    },
  },
});
export const { addSubtask, updateSubtask, deleteSubtask } =
  subtaskSlice.actions;
export default subtaskSlice.reducer;
