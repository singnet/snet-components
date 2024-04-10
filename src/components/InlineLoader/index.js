import React from "react";
import PropTypes from "prop-types";
import Hourglass from "@mui/icons-material/HourglassTopRounded";

import { useStyles } from "./styles";

const InlineLoader = ({ loading }) => {
    const classes = useStyles();
    if (loading) {
        return (
            <div className={classes.pendingSection}>
                <Hourglass />
                <span>Pending</span>
            </div>
        );
    }
    return null;
};

InlineLoader.propTypes = {
    loading: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

export default InlineLoader;
