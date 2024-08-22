import VerticalTabs from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const VerticalTabsTest = {
    args:{
        upperTabs: ["firstUpper", "secondUpper"],
        lowerTabs: ["firstLower", "secondLower"],
    },
};

export default {
    component: VerticalTabs,
    tags: ['autodocs'],
    argTypes: {
        upperTabs:
        {
            control: {type: 'array'},
            default: ["firstUpper", "secondUpper"],
        },
        lowerTabs:{
            control: {type: 'array'},
            default: ["firstLower", "secondLower"],
        },
    },
};
