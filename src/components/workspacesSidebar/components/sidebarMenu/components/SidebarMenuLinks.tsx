import "./SidebarMenuLinks.scss";

type MenuLinks = {
  icon: JSX.Element;
  name: string;
};
type SidebarMenuLinksProps = {
  menuLinks: MenuLinks[];
};

export const SidebarMenuLinks = ({ menuLinks }: SidebarMenuLinksProps) => {
  return (
    <div>
      {menuLinks.map((link, index) => (
        <div className="sidebar-menu-link" key={index}>
          <span className="sidebar-menu-link-icon">{link.icon}</span>
          <p className="sidebar-menu-link-name">{link.name}</p>
        </div>
      ))}
    </div>
  );
};
