import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import SnetDialog from "../SNETDialog";
import { AppLoaderProps } from "./AppLoader.types";

import { useStyles } from "./styles";

const AppLoader: FC<AppLoaderProps> = ({ loading, loaderHeader, loaderText }) => {
  const classes = useStyles();

  return (
    <SnetDialog isDialogOpen={loading} title={loaderHeader} disableBackdropClick children={
      <>
        <div className={classes.circularProgressContainer}>
          <CircularProgress className={classes.circularProgress} />
        </div>
        <Typography variant="body2" component="p">
          {loaderText}
        </Typography>
      </>
    }/>
  );
};

export default AppLoader;
