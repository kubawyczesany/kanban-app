import { useSelector } from "react-redux";
import { WorkspaceInterface } from "../../../store/types";
import { Workspace } from "./components";

export const WorkspacesList = () => {
  const workspaces = useSelector(
    (state: WorkspaceInterface) => state.workspaces
  );
  return (
    <div>
      {workspaces &&
        workspaces.map((workspace) => (
          <Workspace id={workspace.id} name={workspace.name} />
        ))}
    </div>
  );
};
