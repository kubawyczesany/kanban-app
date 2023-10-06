import { DashboardMenuIcon } from "../../../../assets/icons/DashboardMenuIcon";
import { BoardsMenuIcon } from "../../../../assets/icons/BoardsMenuIcon";
import { SidebarMenuDivider } from "./components/components";
import { ProfileMenuIcon } from "../../../../assets/icons/ProfileMenuIcon";
import { SearchMenuIcon } from "../../../../assets/icons/SearchMenuIcon";
import { SidebarMenuLinks } from "./components";

const menuList = [
  { icon: <DashboardMenuIcon />, name: "Dashboard" },
  { icon: <BoardsMenuIcon />, name: "Boards" },
  { icon: <ProfileMenuIcon />, name: "Profile" },
  { icon: <SearchMenuIcon />, name: "Search" },
];

export const SidebarMenu = () => {
  return (
    <>
      <SidebarMenuDivider />
      <SidebarMenuLinks menuLinks={menuList} />
    </>
  );
};
