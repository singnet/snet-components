import UserProfileCard from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const UserProfileCardTest = {
    args:{
        nickName: "Some nickname",
        onClose: () => {},
    },
};

export default {
    component: UserProfileCard,
    tags: ['autodocs'],
    argTypes: {
        nickName:
        {
            control: {type: 'text'},
            default: "Some nickname",
        },
        onClose:{
            default: () => {},
        },
    },
};
