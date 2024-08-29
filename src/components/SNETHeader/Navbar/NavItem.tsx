import React, { FC, HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";

import { NavItemProps } from "../SNETHeader.types";

const NavItem: FC<NavItemProps & HTMLAttributes<HTMLDivElement>> = ({ title, link = "#" }) => {
  return (
    <li>
      <NavLink to={link}>{title}</NavLink>
    </li>
  );
};

export default NavItem;
