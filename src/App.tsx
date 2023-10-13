import "./App.scss";
import { WorkspaceContainer } from "./components/workspaceContainer";
import { WorkspacesSidebar } from "./components/workspaceSidebar";

export const App = () => {
  return (
    <div className="container">
      <WorkspacesSidebar />
      <WorkspaceContainer />
    </div>
  );
};
