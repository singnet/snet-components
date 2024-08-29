import React, { FC } from "react";
import Hourglass from "@mui/icons-material/HourglassTopRounded";
import { InlineLoaderProps } from "./InlineLoader.types";
import { useStyles } from "./styles";

const InlineLoader: FC<InlineLoaderProps> = ({ loading }) => {
  const classes = useStyles();
  if (!loading) {
    return;
  }
  return (
    <div className={classes.pendingSection}>
      <Hourglass />
      <span>Pending</span>
    </div>
  );
};

export default InlineLoader;
