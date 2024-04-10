import React from "react";
import { withStyles } from "@mui/styles";
import PriorityHighRounded from "@mui/icons-material/PriorityHighRounded";
import PropTypes from "prop-types";

import { useStyles } from "./styles";

const OfflineIndicator = ({ classes, show }) => {
    if (show) {
        return (
            <div className={classes.offlineIndicator}>
                <PriorityHighRounded className={classes.icon} />
                <span>Currently Offline</span>
            </div>
        );
    }
    return null;
};

OfflineIndicator.propTypes = {
    show: PropTypes.bool,
};

export default withStyles(useStyles)(OfflineIndicator);
