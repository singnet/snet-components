import React, { FC } from "react";
import Grid from "@mui/material/Grid";
import clsx from "clsx";
import isEmpty from "lodash/isEmpty";

import { useStyles } from "./styles";

import { NotificationBarProps, TypeProps, NotificationProps } from "./NotificationBat.types";

const notificationBarTypes: TypeProps = {
    WARNING: "WARNING",
    INFORMATION: "INFORMATION",
    REMINDER: "REMINDER",
};

const NotificationBar: FC<NotificationBarProps>  = ({ showNotification, Icon, message, type }) => {
    const classes = useStyles();

    if (!showNotification) return null;
    return (
        <Grid container className={classes.NotificationBar}>
            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                className={clsx(classes.notificationText, classes[notificationBarTypes[type] as NotificationProps])}>
                {!isEmpty(Icon) && Icon}
                <span>{message}</span>
            </Grid>
        </Grid>
    );
};

export default NotificationBar;
