import StyledTable from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const StyledTableTest = {
    args:{
        title: "title",
    },
};

export default {
    component: StyledTable,
    tags: ['autodocs'],
    argTypes: {
        title:
        {
            control: {type: 'text'},
            default: "title",
        },
    },
};
