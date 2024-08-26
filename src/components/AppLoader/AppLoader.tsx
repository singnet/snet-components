import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import CardHeader from "@mui/material/CardHeader";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import { AppLoaderProps } from "./AppLoader.types";

import { useStyles } from "./styles";

export const AppLoader: FC<AppLoaderProps> = ({ loading, loaderHeader, loaderText }) => {
  const classes = useStyles();

  return (
    <Modal open={loading}>
      <Card className={classes.card}>
        <CardHeader title={<h2>{loaderHeader}</h2>} />
        <Divider />
        <div className={classes.circularProgressContainer}>
          <CircularProgress className={classes.circularProgress} />
        </div>
        <CardContent>
          <Typography variant="body2" component="p">
            {loaderText}
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default AppLoader;
