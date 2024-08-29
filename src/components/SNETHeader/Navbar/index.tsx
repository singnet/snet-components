import React, { FC, HTMLAttributes } from "react";
import { NavLink } from "react-router-dom";
import StyledMenu from "../../StyledMenu";
import { NavBarProps } from "../SNETHeader.types";
import { useStyles } from "./styles";

const NavBar: FC<NavBarProps & HTMLAttributes<HTMLDivElement>> = ({ navbarItems, dropdownNavbarItems }) => {
  const classes = useStyles();

  return (
    <ul className={classes.navlist}>
      {navbarItems.map((navbarItem) => {
        return (
          <li key={navbarItem.title}>
            <NavLink
              children={navbarItem.title}
              to={navbarItem.link}
              target={navbarItem.openInNewTab ? "_blank" : ""}
              rel={navbarItem.openInNewTab ? "noreferrer noopener" : ""}
              className={`${classes.navLink} ${navbarItem.isActive && classes.navLinkActive}`}
            />
          </li>
        );
      })}
      {dropdownNavbarItems.map((dropdown) => (
        <li key={dropdown.label}>
          <StyledMenu label={dropdown.label} list={dropdown.list} />
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
