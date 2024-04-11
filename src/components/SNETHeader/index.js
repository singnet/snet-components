import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

import { useStyles } from "./styles";
import HeaderActions from "./HeaderActions";
import MobileHeader from "./MobileHeader";
import Logo from "./Logo";
import NavBar from "./Navbar";

export const colorHeader = {
    PURPLE: "purple",
    WHITE: "white",
};

const SNETHeader = ({
    isLoggedIn,
    color,
    isMobileHeaderVisible,
    navbarItems,
    dropdownNavbarItems,
    LoggedInActions,
    LoggedOutActions,
    portalName,
    onLogoClick,
}) => {
    const classes = useStyles();
    return (
        <header
            className={`${classes.snetHeader} ${color === colorHeader.PURPLE ? classes.purpleHeader : classes.whiteHeader}`}
        >
            <Box className={classes.appBar}>
                {isMobileHeaderVisible && (
                    <MobileHeader
                        mobileNavLinks={navbarItems}
                        mobileDropDown={dropdownNavbarItems}
                        isLoggedIn={isLoggedIn}
                        LoggedInActions={LoggedInActions}
                        LoggedOutActions={LoggedOutActions}
                        color={color}
                    />
                )}
                <Logo
                    className={classes.logoContainer}
                    headerColor={color}
                    portalName={portalName}
                    handleClick={onLogoClick}
                />
                <NavBar
                    className={classes.navContainer}
                    navbarItems={navbarItems}
                    dropdownNavbarItems={dropdownNavbarItems}
                />
                <HeaderActions
                    className={classes.headerActionsContainer}
                    isLoggedIn={isLoggedIn}
                    LoggedInActions={LoggedInActions}
                    LoggedOutActions={LoggedOutActions}
                    headerType="desktop"
                />
            </Box>
        </header>
    );
};

SNETHeader.propTypes = {
    isLoggedIn: PropTypes.bool,
    isMobileHeaderVisible: PropTypes.bool,
    portalName: PropTypes.string,
    color: PropTypes.oneOf([colorHeader.PURPLE, colorHeader.WHITE]),
    LoggedInActions: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),
    LoggedOutActions: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.object.isRequired]),
    onLogoClick: PropTypes.func,
    navbarItems: PropTypes.arrayOf(PropTypes.object),
    dropdownNavbarItems: PropTypes.arrayOf(PropTypes.object),
};

SNETHeader.defaultProps = {
    isLoggedIn: false,
    navbarItems: [],
    dropdownNavbarItems: [],
    portalName: "",
    color: "white",
    isMobileHeaderVisible: true,
};
export default SNETHeader;