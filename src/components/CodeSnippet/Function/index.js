import React from "react";
import { withStyles } from "@mui/styles";

import { useStyles } from "./styles";

const Function = ({ classes, text }) => {
    return <span className={classes.functionTextContainer}>{text}</span>;
};

export default withStyles(useStyles)(Function);
