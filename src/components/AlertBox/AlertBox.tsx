import React, { FC } from "react";
import { AlertBoxProps } from "./AlertBox.types";

export const alertTypes = {
    ERROR: 'error',
    SUCCESS: 'success',
    WARNING: 'warning',
    INFO: 'info',
};


const AlertBox: FC<AlertBoxProps> = ({message, type, link, linkTo}) => {
    return (
        <div className={`alert-box-container`}>
            {/* {icon && <div className={classes.iconContainer}>{icon}</div>} */}
            <div className="content">
                {/* {header && <AlertHeader header={header} />} */}
                <div className="title">{message}</div>
                {link && <a href={linkTo} title={link} target='_blank' rel='noreferrer'>
            {link}
        </a>}
            </div>
        </div>
    )
}

export default AlertBox;