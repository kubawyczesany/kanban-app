import { configureStore } from "@reduxjs/toolkit";
import { workspaceSlice } from "./slices/workspaceSlice";
import { taskGroupSlice } from "./slices/taskGroupSlice";
import { taskSlice } from "./slices/taskSlice";
import { subtaskSlice } from "./slices/subtaskSlice";

const serializedState = localStorage.getItem("kanbanState");

let preloadedState;
if (serializedState) {
  preloadedState = JSON.parse(serializedState);
}

export const store = configureStore({
  reducer: {
    workspace: workspaceSlice.reducer,
    taskGroup: taskGroupSlice.reducer,
    task: taskSlice.reducer,
    subtask: subtaskSlice.reducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const state = store.getState();
  const serializedState = JSON.stringify(state);
  localStorage.setItem("kanbanState", serializedState);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
