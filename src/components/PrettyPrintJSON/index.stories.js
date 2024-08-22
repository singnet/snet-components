import PrettyPrintJson from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const PrettyPrintJsonTest = {
    args:{
        data: {},
        space: 2,
    },
};

export default {
    component: PrettyPrintJson,
    tags: ['autodocs'],
    argTypes: {
        data: {
            control: { type: 'text' },
            default: {},
        },
        space:
        {
            default: 2,
            control: { type: 'number' }
        }
    },
};
