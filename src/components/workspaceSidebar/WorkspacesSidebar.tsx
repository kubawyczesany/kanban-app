import "./WorkspacesSidebar.scss";
import { SidebarMenu } from "./components/sidebarMenu";
import { UserProfile } from "./components/userProfile";
import { WorkspaceSettings } from "./components/workspaceSettings";
import { WorkspacesButtons } from "./components/workspacesButtons";

export const WorkspacesSidebar = () => {
  return (
    <div className="workspaces-sidebar">
      <div className="workspaces-sidebar-header">
        <WorkspacesButtons />
      </div>
      <div className="workspaces-sidebar-main">
        <SidebarMenu />
      </div>
      <div className="workspaces-sidebar-footer">
        <UserProfile />
        <WorkspaceSettings />
      </div>
    </div>
  );
};
