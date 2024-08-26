import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import MobileDialog from "./MobileDialog";
import { useStyles } from "./styles";
import { Typography, Box, DialogContent, Dialog, IconButton } from "@mui/material";
import { SNETDialogProps } from "./SNETDialog.types";

const SnetDialog: FC<SNETDialogProps> = ({
    isDialogOpen,
    title,
    children,
    showCloseButton = true,
    disableBackdropClick,
    disableEscapeKeyDown,
    contentClass,
    onDialogClose = () => {},
}) => {
    const isMobile = window.screen.width <= 550; //px
    const classes = useStyles();
    // eslint-disable-next-line no-unused-vars
    const handleDialogClose = (event: {}, reason: string): void => {
        if (disableBackdropClick && reason === "backdropClick") {
            return;
        }

        if (disableEscapeKeyDown && reason === "escapeKeyDown") {
            return;
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
                        onClick={onDialogClose}
                        classes={classes.iconButton}
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

export default (SnetDialog);
