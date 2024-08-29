import React, { FC } from "react";
import Box from "@mui/material/Box";
import { useStyles } from "./styles";
import HeaderActions from "./HeaderActions";
import MobileHeader from "./MobileHeader";
import Logo from "./Logo";
import NavBar from "./Navbar";
import { SNETHeaderProps, ColorsProps } from "./SNETHeader.types";

export const colorHeader: ColorsProps = {
  PURPLE: "purple",
  WHITE: "white",
};

const SNETHeader: FC<SNETHeaderProps> = ({
  isLoggedIn = false,
  color = "white",
  isMobileHeaderVisible = true,
  navbarItems = [],
  dropdownNavbarItems = [],
  LoggedInActions,
  LoggedOutActions,
  portalName = "",
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
        <Logo className={classes.logoContainer} color={color} portalName={portalName} onLogoClick={onLogoClick} />
        <NavBar className={classes.navContainer} navbarItems={navbarItems} dropdownNavbarItems={dropdownNavbarItems} />
        <div className={classes.headerActionsContainer}>
          <HeaderActions
            isLoggedIn={isLoggedIn}
            LoggedInActions={LoggedInActions}
            LoggedOutActions={LoggedOutActions}
          />
        </div>
      </Box>
    </header>
  );
};

export default SNETHeader;
