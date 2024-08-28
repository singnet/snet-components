import React, { FC } from "react";
import clsx from "clsx";

import { useStyles } from "./styles";
import { alertTypes } from "../AlertBox";
import { AlertProps, ColorProps, AlertTypesProps} from "../AlertBox/AlertBox.types";

const textColor: ColorProps = {
    error: alertTypes.ERROR,
    success: alertTypes.SUCCESS,
    warning: alertTypes.WARNING,
    info: alertTypes.INFO,
};

const AlertText: FC<AlertProps> = ({ type = "error", message }) => {
    const classes = useStyles();
    if (!message) {
        return null;
    }
    return (
        <span className={clsx(classes.errorMsg, classes[textColor[type] as AlertTypesProps])}>{message}</span>
    );
};

export default AlertText;
