import RatingsCount from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const RatingsCountTest = {
    args:{
        totalRating: 2,
        ratingGiven: 2,
    },
};

export default {
    component: RatingsCount,
    tags: ['autodocs'],
    argTypes: {
        ratingGiven:
        {
            default: 2,
            control: { type: 'number' }
        },
        totalRating:
        {
            default: 2,
            control: { type: 'number' }
        },
    },
};
