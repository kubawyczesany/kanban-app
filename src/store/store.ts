import { configureStore } from "@reduxjs/toolkit";
import { workspaceSlice } from "./slices";

export const store = configureStore({
  reducer: {
    workpsace: workspaceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
