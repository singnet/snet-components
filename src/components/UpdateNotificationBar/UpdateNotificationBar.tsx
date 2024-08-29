import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import CampaignIcon from "@mui/icons-material/Campaign";
import { UpdateNotificationBarProps } from "./UpdateNotificationBar.types";
import { useStyles } from "./styles";

const UpdateNotificationBar: FC<UpdateNotificationBarProps> = ({
  notificationText,
  notificationLink,
  showNotification,
  onCloseClick,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.parentUpdateNotificationBar}>
      <div className={`${classes.updateNotificationBar} ${!showNotification ? classes.hidenNotificatoinBar : null}`}>
        <CampaignIcon />
        <p>
          <span>{notificationText}</span>
          <a href={notificationLink} title="SingularityNET Snapshot Tool" target="_blank" rel="noreferrer noopener">
            {notificationText}
          </a>
        </p>
        <CloseIcon className={classes.closeIcon} onClick={onCloseClick} />
      </div>
    </div>
  );
};

export default UpdateNotificationBar;
