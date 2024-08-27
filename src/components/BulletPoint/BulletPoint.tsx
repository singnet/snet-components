import React, { FC } from "react";
import WarningIcon from "@mui/icons-material/Warning";
import { AlertProps } from "../AlertBox/AlertBox.types";
import AlertBox from "../AlertBox";

const BulletPoint: FC<AlertProps> = ({ message, type }) => {
    return (
        <div>
            <WarningIcon />
            <AlertBox type={type} message={message} />
        </div>
    );
};

export default BulletPoint;
