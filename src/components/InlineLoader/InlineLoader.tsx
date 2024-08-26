import React, {FC} from "react";
import PropTypes from "prop-types";
import Hourglass from "@mui/icons-material/HourglassTopRounded";
import { InlineLoaderProps } from "./InlineLoader.types";
import { useStyles } from "./styles";

const InlineLoader: FC<InlineLoaderProps> = ({ loading }) => {
    const classes = useStyles();
    if (!loading) {
        null
    }
        return (
            <div className={classes.pendingSection}>
                <Hourglass />
                <span>Pending</span>
            </div>
        );
};

export default InlineLoader;
