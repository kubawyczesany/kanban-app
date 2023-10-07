import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

interface WorkspaceProps {
  workspaceId: number;
}

export const Workspace = ({ workspaceId }: WorkspaceProps) => {
  const workspace = useSelector((state: RootState) =>
    state.workspace.find((workspace) => workspace.id === workspaceId)
  );

  if (!workspace) {
    return <div>Workspace not found</div>;
  }

  return (
    <div>
      <h2>{workspace.name}</h2>
    </div>
  );
};
