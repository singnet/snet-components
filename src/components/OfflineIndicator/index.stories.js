import OfflineIndicator from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const OfflineIndicatorTest = {
    args:{
        show: true,
    },
};

export default {
    component: OfflineIndicator,
    tags: ['autodocs'],
    argTypes: {
        show: {
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
    },
};
