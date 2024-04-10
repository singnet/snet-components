import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/PriorityHigh";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

import { useStyles } from "./styles";
import { ProgressStatusList } from "./";

const StatusToggler = ({ progressNumber, progressStatus }) => {
    const classes = useStyles();

    if (
        progressStatus === ProgressStatusList.COMPLETED ||
        progressStatus === ProgressStatusList.SUCCEEDED
    ) {
        return (
            <div className={classes.numberContaienr}>
                <span className={classes.completedIcon}>
                    <CheckIcon />
                </span>
            </div>
        );
    }

    if (progressStatus === ProgressStatusList.FAILED) {
        return (
            <div className={classes.numberContaienr}>
                <span className={classes.errorIcon}>
                    <ErrorOutlineIcon />
                </span>
            </div>
        );
    }

    if (progressStatus === ProgressStatusList.PENDING) {
        return (
            <div className={classes.numberContaienr}>
                <span className={classes.waitingIcon}>
                    <HourglassEmptyIcon />
                </span>
            </div>
        );
    }

    return (
        <div className={classes.numberContaienr}>
            <span className={classes.number}>{progressNumber}</span>
        </div>
    );
};

export default StatusToggler;
