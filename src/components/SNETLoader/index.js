import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import SNETDialog from "shared/dist/components/SNETDialog";

import { useStyles } from "./styles";

const SNETLoader = ({ isLoading, title, content }) => {
    const classes = useStyles();

    return (
        <SNETDialog
            isDialogOpen={isLoading}
            title={title}
            children={
                <>
                    <div className={classes.circularProgressContainer}>
                        <CircularProgress className={classes.circularProgress} />
                    </div>
                    <Typography className={classes.loaderContent} variant="body2" component="p">
                        {content}
                    </Typography>
                </>
            }
            contentClass={classes.card}
        />
    );
};

SNETLoader.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default SNETLoader;
