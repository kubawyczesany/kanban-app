import { createSlice } from "@reduxjs/toolkit";
import { Workspace } from "../../types";

const initialState: Workspace[] = [
  {
    id: 0,
    name: "Workspace number 1",
  },
];

export const workspaceSlice = createSlice({
  name: "workspace",
  initialState,
  reducers: {
    addWorkspace: (state, action) => {
      const newWorkspace = action.payload;
      state.push(newWorkspace);
    },
    updateWorkspace: (state, action) => {
      const { id, name } = action.payload;
      const workspace = state.find((workspace) => workspace.id === id);
      if (workspace) {
        workspace.name = name;
      }
    },
    deleteWorkspace: (state, action) => {
      const { id } = action.payload;
      return state.filter((workspace) => workspace.id !== id);
    },
  },
});

export const { addWorkspace, updateWorkspace, deleteWorkspace } =
  workspaceSlice.actions;
export default workspaceSlice.reducer;
