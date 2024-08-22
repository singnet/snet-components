import SNETTextarea from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const SNETTextareaTest = {
    args:{
        label: "label",
        rowCount: 10,
        colCount: 20,
        name: "some name",
        value: "write here",
        onChange: () => {},
        content: "content here",
        minCount: 1,
        maxCount: 1,
    },
};

export default {
    component: SNETTextarea,
    tags: ['autodocs'],
    argTypes: {
        label:
        {
            control: {type: 'text'},
            default: "something",
        },
        rowCount:
        {
            control: {type: 'number'},
            default: 10,
        },       
        colCount:
        {
            control: {type: 'number'},
            default: 20,
        },       
        name:
        {
            control: {type: 'text'},
            default: "some name",
        },
        value:
        {
            control: {type: 'text'},
            default: "some value",
        },
        minCount:
        {
            control: {type: 'number'},
            default: 1,
        },       
        maxCount:
        {
            control: {type: 'number'},
            default: 5,
        },       
        content:
        {
            control: {type: 'text'},
            default: "some content",
        },
        onChange:{
            default: () => {},
        }
    },
};
