import PageNotFound from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const PageNotFoundTest = {
    args:{
        handleGoToHome: true,
    },
};

export default {
    component: PageNotFound,
    tags: ['autodocs'],
    argTypes: {
        handleGoToHome: {
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
    },
};
