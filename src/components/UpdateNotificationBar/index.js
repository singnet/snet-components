import React from "react";
import { withStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import AnnoucementIcon from "../../assets/images/AnnoucementIcon.png";

import { useStyles } from "./styles";

const UpdateNotificationBar = ({
    classes,
    notificationText,
    notificationLink,
    showNotification,
    onCloseClick,
}) => {
    return (
        <div className={classes.parentUpdateNotificationBar}>
            <div
                className={`${classes.updateNotificationBar} ${
                    !showNotification ? classes.hidenNotificatoinBar : classes.openNotificatoinBar
                }`}
            >
                <img src={AnnoucementIcon} alt="Announcment" />
                <p>
                    <span>{notificationText}</span>
                    <a
                        href={notificationLink.link}
                        title="SingularityNET Snapshot Tool"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        {notificationLink.text}
                    </a>
                </p>
                <CloseIcon className={classes.closeIcon} onClick={onCloseClick} />
            </div>
        </div>
    );
};

export default withStyles(useStyles)(UpdateNotificationBar);
