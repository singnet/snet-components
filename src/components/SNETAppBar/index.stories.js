import SNETAppBar from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const SNETAppBarTest = {
    args:{
        color:'white',
    },
};

export default {
    component: SNETAppBar,
    tags: ['autodocs'],
    argTypes: {
        color:
        {
            options: ["white", "purple"],
            control: { type: 'radio' },
            default: "white",
        },
    },
};
