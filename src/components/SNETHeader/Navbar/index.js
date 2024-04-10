import React from "react";
import StyledMenu from "../../StyledMenu";
import NavbarLink from "./NavbarLink";
import { useStyles } from "./styles";

const NavBar = ({ navbarItems, dropdownNavbarItems }) => {
    const classes = useStyles();

    return (
        <ul display="inline" className={classes.navlist}>
            {navbarItems.map((navbarItem) => {
                return (
                    <li key={navbarItem.label}>
                        {" "}
                        <NavbarLink {...navbarItem} />{" "}
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
