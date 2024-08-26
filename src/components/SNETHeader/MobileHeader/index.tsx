import React, { useState, FC, MouseEvent } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { MobileHeaderProps } from "../SNETHeader.types"
import HeaderActions from "../HeaderActions";
import NavItem from "../Navbar/NavItem";
import { useStyles } from "./styles";
import { MenuItemProps } from "../../StyledMenu/StyledMenu.types";

const MobileHeader: FC<MobileHeaderProps> = ({
    isLoggedIn,
    LoggedInActions,
    LoggedOutActions,
    mobileNavLinks,
    mobileDropDown,
    color,
}) => {
    const classes = useStyles();

    const [openMobileMenu, setOpenMobileMenu] = useState(false);

    const stopProgationOfEventToHeader = (event: MouseEvent<HTMLDivElement>): void => {
        if (event && (event instanceof Event)) {
            event.stopPropagation();
        }
    };

    const toggleMobileMenu = (event: MouseEvent<HTMLDivElement>): void => {
        stopProgationOfEventToHeader(event);
        setOpenMobileMenu(!openMobileMenu);
    };

    if (!openMobileMenu) {
        return (
            <div
                className={`${classes.hamburger} ${color === "white" && classes.whiteHamburger}`}
                onClick={(event) => toggleMobileMenu(event)}
            >
                <span />
                <span />
                <span />
            </div>
        );
    }

    return (
        <div
            className={`${classes.mobileNavContainer} ${color === "white" && classes.whiteHeader}`}
            onClick={stopProgationOfEventToHeader}
        >
            <div className={classes.closeMenuIcon} onClick={toggleMobileMenu}>
                <CloseIcon />
            </div>
            <nav className={classes.mobileNavigation}>
                <ul
                    className={`${isLoggedIn ? null : classes.hideNav} ${color === "white" && classes.whiteHeader}`}
                >
                    {mobileNavLinks.map((tab) => (
                        <NavItem
                            key={tab.title}
                            title={tab.title}
                            link={tab.link}
                            isActive={tab.isActive}
                        />
                    ))}
                    {mobileDropDown &&
                        mobileDropDown.map((dropdown) => (
                            <div key={dropdown.label} className={classes.subMenues}>
                                    <NavItem title={dropdown.label} />
                                    {dropdown.list.map((item: MenuItemProps) => (
                                        <NavItem
                                            key={item.label}
                                            title={item.label}
                                            link={item.link}
                                        />
                                    ))}
                            </div>
                        ))}
                </ul>
                <div className={classes.mobileActionBtns}>
                    <HeaderActions
                        isLoggedIn={isLoggedIn}
                        LoggedInActions={LoggedInActions}
                        LoggedOutActions={LoggedOutActions}
                    />
                </div>
            </nav>
        </div>
    );
};

export default MobileHeader;
