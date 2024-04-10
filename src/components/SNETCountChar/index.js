import React from "react";
import PropTypes from "prop-types";
import { useStyles } from "./styles";

const CountChar = ({ currentCountChar, maximumCountChar }) => {
    const classes = useStyles();

    return (
        <span className={classes.charLength}>
            {currentCountChar}/{maximumCountChar} char
        </span>
    );
};

CountChar.propTypes = {
    currentCountChar: PropTypes.number,
    maximumCountChar: PropTypes.number,
    setErrorFunction: PropTypes.func,
};

export default CountChar;
