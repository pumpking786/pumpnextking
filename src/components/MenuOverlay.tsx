import React from "react";
import NavLink from "./NavLink";

interface LinkItem {
  path: string;
  title: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
  closeSidebar: () => void; // Accept closeSidebar as a prop
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links, closeSidebar }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            closeSidebar={closeSidebar} // Pass closeSidebar to NavLink
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
