import React, { Fragment, FC } from "react";
import PropTypes from "prop-types";

import { useStyles } from "./styles";
import StatusToggler from "./StatusToggler";

import { ProgressSectionProps, ProgressStatusTextTypes } from "../ProgressBar.types";

export const ProgressStatusList: ProgressStatusTextTypes = {
    IDLE: "idle",
    ACTIVE: "active",
    COMPLETED: "completed",
    FAILED: "failed",
    SUCCEEDED: "succeeded",
    PENDING: "pending",
};

const ProgressSection: FC<ProgressSectionProps> = ({ progressNumber, progressText, progressStatus, onSectionClick }) => {
    const classes = useStyles();

    const handleSectionClick = () => {
        if (!onSectionClick) {
            return;
        }
        onSectionClick(progressNumber, progressText, progressStatus);
    };

    return (
        <li
            className={`${onSectionClick ? classes.clickableSection : ""}`}
            onClick={handleSectionClick}
        >
            <Fragment>
                <StatusToggler progressStatus={progressStatus} progressNumber={progressNumber} />
                <span className={classes.TabTitle}>{progressText}</span>
            </Fragment>
        </li>
    );
};

export default ProgressSection;
