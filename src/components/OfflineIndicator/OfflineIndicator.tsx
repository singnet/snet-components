import React, { FC } from "react";
import PriorityHighRounded from "@mui/icons-material/PriorityHighRounded";
import { OfflineIndicatorProps } from "./OfflineIndicator.types";
import { useStyles } from "./styles";

const OfflineIndicator: FC<OfflineIndicatorProps> = ({ show }) => {
  const classes = useStyles();

  if (!show) {
    return null;
  }
  return (
    <div className={classes.offlineIndicator}>
      <PriorityHighRounded />
      <span>Currently Offline</span>
    </div>
  );
};

export default OfflineIndicator;
