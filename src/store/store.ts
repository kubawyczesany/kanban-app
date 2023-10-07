import { configureStore } from "@reduxjs/toolkit";
import { workspaceSlice } from "./slices/workspaceSlice";
import { taskGroupSlice } from "./slices/taskGroupSlice";
import { taskSlice } from "./slices/taskSlice";
import { subtaskSlice } from "./slices/subtaskSlice";

export const store = configureStore({
  reducer: {
    workspace: workspaceSlice.reducer,
    taskGroup: taskGroupSlice.reducer,
    task: taskSlice.reducer,
    subtask: subtaskSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
