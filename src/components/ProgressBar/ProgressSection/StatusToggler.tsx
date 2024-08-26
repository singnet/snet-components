import React, { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";
import ErrorOutlineIcon from "@mui/icons-material/PriorityHigh";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { ProgressTogglerProps, StepsProps } from "../ProgressBar.types";
import { useStyles } from "./styles";
import { ProgressStatusList } from ".";

const StatusToggler: FC<ProgressTogglerProps> = ({ progressNumber, progressStatus }) => {
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

    const DefaultStep = () => <span>{progressNumber}</span>;

    const steps: StepsProps = {
        [ProgressStatusList.COMPLETED]: <CheckedStep />,
        [ProgressStatusList.SUCCEEDED]: <CheckedStep />,
        [ProgressStatusList.FAILED]: <FailedStep />,
        [ProgressStatusList.PENDING]: <PendingStep />,
        [ProgressStatusList.IDLE]:  <DefaultStep />,
        [ProgressStatusList.ACTIVE]: <DefaultStep />,
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
