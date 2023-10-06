import "./App.scss";
import { WorkspaceContainer } from "./components/WorkspaceContainer/WorkspaceContainer";
import { WorkspacesSidebar } from "./components/workspacesSidebar";

export const App = () => {
  return (
    <div className="container">
      <WorkspacesSidebar />
      <WorkspaceContainer />
    </div>
  );
};
