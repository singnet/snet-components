import GetStarted from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const GetStartedTest = {
    args:{
        obj: {},
    },
};

export default {
    component: GetStarted,
    tags: ['autodocs'],
    argTypes: {
        obj: {
            default: {},
            control: { type: 'object' },
        },
    },
};