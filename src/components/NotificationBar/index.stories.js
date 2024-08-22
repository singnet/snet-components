import NotificationBar from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const NotificationBarTest = {
    args:{
        type: "WARNING",
        message: "",
        showNotification: true,
        icon: "",
    },
};

export default {
    component: NotificationBar,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ["WARNING", "INFORMATION", "REMINDER"],
            control: { type: 'radio' },
            default: 'WARNING',
        },
        message: {
            default: "",
            control: { type: 'text' },
        },
        showNotification: {
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
        icon:{
            default: "",
            control: {type: 'text'},
        },
    },
};
