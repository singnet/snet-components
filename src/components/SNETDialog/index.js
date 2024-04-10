import React from "react";
import propTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import MobileDialog from "./mobileDialog";
import { useStyles } from "./styles";
import { withStyles } from "@mui/styles";
import { Typography, Box, DialogContent, Dialog, IconButton } from "@mui/material";

const SnetDialog = ({
    classes,
    isDialogOpen,
    title,
    children,
    showCloseButton,
    disableBackdropClick,
    disableEscapeKeyDown,
    contentClass,
    onDialogClose,
}) => {
    const isMobile = window.screen.width <= 550; //px

    // eslint-disable-next-line no-unused-vars
    const handleDialogClose = (event, reason) => {
        if (disableBackdropClick && reason === "backdropClick") {
            return false;
        }

        if (disableEscapeKeyDown && reason === "escapeKeyDown") {
            return false;
        }
        onDialogClose();
    };

    if (isMobile) {
        return (
            <MobileDialog
                isDialogOpen={isDialogOpen}
                onDialogClose={onDialogClose}
                title={title}
                children={children}
            />
        );
    }

    return (
        <Dialog
            maxWidth="xl"
            onClose={(event, reason) => handleDialogClose(event, reason)}
            aria-labelledby="snet-dialog-title"
            open={isDialogOpen}
        >
            <Box className={classes.dialogTitle}>
                <Typography className={classes.titleText}>{title}</Typography>
                {showCloseButton && (
                    <IconButton
                        aria-label="close"
                        onClick={onDialogClose}
                        className={classes.iconButton}
                    >
                        <CloseIcon />
                    </IconButton>
                )}
            </Box>
            <DialogContent dividers className={`${classes.dailogContent}, ${contentClass}`}>
                {children}
            </DialogContent>
        </Dialog>
    );
};

SnetDialog.propTypes = {
    isDialogOpen: propTypes.bool.isRequired,
    onDialogClose: propTypes.func,
    title: propTypes.string,
    children: propTypes.node,
    showClosebutton: propTypes.bool,
    disableBackdropClick: propTypes.bool,
    disableEscapeKeyDown: propTypes.bool,
    contentClass: propTypes.string,
};

SnetDialog.defaultProps = {
    showClosebutton: true,
    // eslint-disable-next-line no-empty-function
    onDialogClose: () => {},
};

export default withStyles(useStyles)(SnetDialog);
