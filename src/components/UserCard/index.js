import React from "react";
import Grid from "@mui/material/Grid";
import { withStyles } from "@mui/styles";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import SingularityLogo from "shared/dist/assets/images/avatar.png";

import { useStyles } from "./styles";

const UserCard = ({ classes, userImg, userName, userEmail }) => {
    return (
        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.userCardContainer}>
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.userDetails}>
                <Avatar
                    alt="Singularity"
                    src={userImg || SingularityLogo}
                    className={classes.avatar}
                />
                <div>
                    <Typography className={classes.userName}>{userName}</Typography>
                    <Typography className={classes.userEmail}>{userEmail}</Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default withStyles(useStyles)(UserCard);
