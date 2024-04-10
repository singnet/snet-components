import React from "react";
import clsx from "clsx";

import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ToggleMenu = ({ isOpen, setIsOpen, classes }) => {
    if (isOpen) {
        return (
            <div className={classes.toolbar}>
                <IconButton onClick={() => setIsOpen(false)}>
                    <ChevronLeftIcon className={classes.chevronIcon} />
                </IconButton>
            </div>
        );
    }
    return (
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setIsOpen(true)}
            edge="start"
            className={clsx(classes.menuButton)}
        >
            <ChevronRightIcon className={classes.chevronIcon} />
        </IconButton>
    );
};

export default ToggleMenu;
