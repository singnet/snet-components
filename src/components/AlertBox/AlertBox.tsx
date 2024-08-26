import React, { FC } from "react";
import clsx from "clsx";
import { useStyles } from "./styles";
import { AlertBoxProps, ColorProps,  AlertTypesProps } from "./AlertBox.types";

export const alertTypes = {
    ERROR: 'error',
    SUCCESS: 'success',
    WARNING: 'warning',
    INFO: 'info',
};

const backgroundColor: ColorProps = {
    error: alertTypes.ERROR,
    success: alertTypes.SUCCESS,
    warning: alertTypes.WARNING,
    info: alertTypes.INFO,
};


const AlertBox: FC<AlertBoxProps> = ({ message, type, link, linkTo, children, icon, header }) => {
    const classes = useStyles();
        if (children) {
            return (
                <div className={clsx(classes.messageBox, classes[backgroundColor[type] as AlertTypesProps])}>
                    {children}
                </div>
            );
        }
    
        if (!message) {
            return null;
        }
            return (
                <div className={clsx(classes.alertBoxContainer, classes[backgroundColor[type] as AlertTypesProps])}>
                    {icon && icon}
                    <div className={classes.content}>
                    {header && <span className={classes.alertHeader}>{header}</span>}
                        <div>{message}</div>
                       {link && <a href={linkTo} title={link} target="_blank" rel="noreferrer">
                {link}
            </a>}
                    </div>
                </div>
            );
        }

export default AlertBox;