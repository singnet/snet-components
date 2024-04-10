import React from "react";
import { useStyles } from "./styles";

const SnetFooterCopyright = () => {
    const classes = useStyles();
    const year = new Date().getFullYear();
    return (
        <React.Fragment>
            <hr className={classes.footerDivider} />
            <p className={classes.copyrightText}>
                Copyright © {year} SingularityNET All rights reserved.
            </p>
        </React.Fragment>
    );
};

export default SnetFooterCopyright;
