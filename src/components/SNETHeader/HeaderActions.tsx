import React, { FC } from "react";
import { HeaderActionsProps } from "./SNETHeader.types"

const HeaderActions: FC<HeaderActionsProps> = ({ isLoggedIn, LoggedInActions, LoggedOutActions }) => {
    if (isLoggedIn) {
        return <LoggedInActions/>;
    }
    return <LoggedOutActions />;
};

export default HeaderActions;
