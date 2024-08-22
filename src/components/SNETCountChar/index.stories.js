import SNETAppBar from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const SNETAppBarTest = {
    args:{
        currentCountChar:2,
        maximumCountChar:2,
        setErrorFunction: () => {}
    },
};

export default {
    component: SNETAppBar,
    tags: ['autodocs'],
    argTypes: {
        currentCountChar:
        {
            control: { type: 'number' },
            default: 2,
        },
        maximumCountChar:
        {
            control: { type: 'number' },
            default: 2,
        },
        setErrorFunction:
        {
            default: () => {},
        },
    },
};
