import React, { FC } from "react";
import { Typography, Box, Modal } from "@mui/material";
import { useStyles } from "./styles";
import { BaseDialogProps } from "./SNETDialog.types";

const MobileDialog: FC<BaseDialogProps> = ({ isDialogOpen, onDialogClose, title, children }) => {
  const classes = useStyles();

  return (
    <Modal
      onClose={onDialogClose}
      open={isDialogOpen}
      children={
        <Box className={classes.mobileDialog}>
          <Typography className={classes.titleMobileText}>{title}</Typography>
          <Box>{children}</Box>
        </Box>
      }
    />
  );
};

export default MobileDialog;
