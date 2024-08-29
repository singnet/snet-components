import React, { FC } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { StyledLinearProgressProps } from "./StyledLinearProgress.types";
import { useStyles } from "./styles";

const StyledLinearProgress: FC<StyledLinearProgressProps> = ({ value }) => {
  const classes = useStyles();
  return <LinearProgress className={classes.styledProgressBar} variant="determinate" value={value} />;
};

export default StyledLinearProgress;
