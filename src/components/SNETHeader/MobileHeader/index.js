import React, { Fragment, useState } from "react";
import { withStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";

import HeaderActions from "../HeaderActions";
import NavItem from "../Navbar/NavItem";
import { useStyles } from "./styles";

const MobileHeader = ({
    classes,
    isLoggedIn,
    mobileNavLinks,
    mobileDropDown,
    LoggedInActions,
    LoggedOutActions,
    color,
}) => {
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const stopProgationOfEventToHeader = (e) => {
        e.stopPropagation();
    };

    const toggleMobileMenu = (e) => {
        stopProgationOfEventToHeader(e);
        setOpenMobileMenu(!openMobileMenu);
    };

    if (!openMobileMenu) {
        return (
            <div
                className={`${classes.hamburger} ${color === "white" && classes.whiteHamburger}`}
                onClick={toggleMobileMenu}
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
            <div className={classes.closeMenuIcon}>
                <CloseIcon onClick={toggleMobileMenu} />
            </div>
            <nav className={classes.mobileNavigation}>
                <ul
                    className={`${isLoggedIn ? null : classes.hideNav} ${color === "white" && classes.whiteHeader}`}
                >
                    {mobileNavLinks.map((tab) => (
                        <NavItem
                            key={tab.label}
                            title={tab.label}
                            link={tab.to}
                            active={tab.active}
                        />
                    ))}
                    {mobileDropDown &&
                        mobileDropDown.map((dropdown) => (
                            <div key={dropdown.label} className={classes.subMenues}>
                                <Fragment>
                                    <NavItem title={dropdown.label} subHeader />
                                    {dropdown.list.map((item) => (
                                        <NavItem
                                            key={item.label}
                                            title={item.label}
                                            link={item.link}
                                            subListItem
                                        />
                                    ))}
                                </Fragment>
                            </div>
                        ))}
                </ul>
                <div className={classes.mobileActionBtns}>
                    <HeaderActions
                        isLoggedIn={isLoggedIn}
                        LoggedInActions={LoggedInActions}
                        LoggedOutActions={LoggedOutActions}
                        headerType="mobile"
                    />
                </div>
            </nav>
        </div>
    );
};

export default withStyles(useStyles)(MobileHeader);
