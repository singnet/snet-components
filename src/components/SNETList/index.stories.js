import SNETList from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const SNETListTest = {
    args:{
        display: "something",
    },
};

export default {
    component: SNETList,
    tags: ['autodocs'],
    argTypes: {
        display:
        {
            control: {type: 'text'},
            default: "something",
        },       
    },
};
