import React, { FC } from "react";
import NoConnectionImg from "../../assets/images/error.svg";
import { useStyles } from "./styles";
import { ErrorBoxProps } from "./ErrorBox.types";

const ErrorBox: FC<ErrorBoxProps> = ({ errImg, errText }) => {
    const classes = useStyles();

    return (
        <div className={classes.errorMsgContainer}>
            <img src={errImg || NoConnectionImg} alt="No connection" />
            <span>
                {errText ||
                    `Unable to reach our servers. We have been notified of this.
        Please try again Later.`}
            </span>
        </div>
    );
};

export default ErrorBox;
