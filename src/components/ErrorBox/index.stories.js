import ErrorBox from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const ErrorBoxTest = {
    args:{
        errImg:"",
        errText:''
    },
};

export default {
    component: ErrorBox,
    tags: ['autodocs'],
    argTypes: {
        errImg: {
            default: '',
            control: { type: 'text' },
        },
        errText: {
            default: '',
            control: { type: 'text' },
        },
    },
};
