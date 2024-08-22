import InlineLoader from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const InlineLoaderTest = {
    args:{
        loading:true,
    },
};

export default {
    component: InlineLoader,
    tags: ['autodocs'],
    argTypes: {
        loading: {
            options: [false, true],
            control: { type: 'radio' },
            default: 'true',
        },
    },
};
