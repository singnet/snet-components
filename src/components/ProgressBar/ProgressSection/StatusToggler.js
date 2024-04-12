import React from "react";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/PriorityHigh";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";

import { useStyles } from "./styles";
import { ProgressStatusList } from "./";

const StatusToggler = ({ progressNumber, progressStatus }) => {
    const classes = useStyles();

    const CheckedStep = () => (
        <span className={classes.completedIcon}>
            <CheckIcon />
        </span>
    );

    const FailedStep = () => (
        <span className={classes.errorIcon}>
            <ErrorOutlineIcon />
        </span>
    );

    const PendingStep = () => (
        <span className={classes.waitingIcon}>
            <HourglassEmptyIcon />
        </span>
    );

    const DefaultStep = () => <span className={classes.number}>{progressNumber}</span>;

    const steps = {
        [ProgressStatusList.COMPLETED]: <CheckedStep />,
        [ProgressStatusList.SUCCEEDED]: <CheckedStep />,
        [ProgressStatusList.FAILED]: <FailedStep />,
        [ProgressStatusList.PENDING]: <PendingStep />,
    };
    
    return (
        <div className={classes.numberContainer}>
            <div className={`${classes[progressStatus]} ${classes.numberStep}`}>
                {steps[progressStatus] ?? <DefaultStep />}
            </div>
        </div>
    );
};

export default StatusToggler;
