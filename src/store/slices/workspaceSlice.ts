import { createSlice } from "@reduxjs/toolkit";
import { WorkspaceInterface } from "../types";

const initialState: WorkspaceInterface = {
  workspaces: [],
};

export const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    addWorkspace: (state, action) => {
      state.workspaces.push(action.payload);
    },
    updateWorkspace: (state, action) => {
      const { id, name } = action.payload;
      const workspace = state.workspaces.find(
        (workspace) => workspace.id === id
      );
      if (workspace) {
        workspace.name = name;
      }
    },
    deleteWorkspace: (state, action) => {
      const { id } = action.payload;
      state.workspaces = state.workspaces.filter(
        (workspace) => workspace.id !== id
      );
    },
  },
});

export const { addWorkspace, updateWorkspace, deleteWorkspace } =
  workspaceSlice.actions;
export default workspaceSlice.reducer;
