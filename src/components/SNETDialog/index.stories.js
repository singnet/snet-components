import SNETAppBar from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const SNETAppBarTest = {
    args:{
        isDialogOpen: true,
        onDialogClose: () => {},
        title: "title",
        children: <span> i'm children </span>,
        showClosebutton: true,
        disableBackdropClick: false,
        disableEscapeKeyDown: false,
        contentClass: 'class',
    },
};

export default {
    component: SNETAppBar,
    tags: ['autodocs'],
    argTypes: {
        onDialogClose:
        {
            default: () => {},
        },
        isDialogOpen:
        {
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
        setErrorFunction:
        {
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
        title:
        {
            control: {type: 'text'},
            default: "Title",
        },
        showClosebutton:
        {
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
        disableBackdropClick:
        {
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
        disableEscapeKeyDown:
        {
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
        children: {
            default: 'Children components',
            control: { type: 'node' },
        }
    },
};
