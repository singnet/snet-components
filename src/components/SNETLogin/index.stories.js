import SNETLoader from './index.js';
import React from "react";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

export const SNETLoaderTest = {
    args:{
        title: "Login",
        loginError: "Error, something went wrong",
        forgotPasswordLink: "https://singularitynet.io",
        onSubmit: () => {}
    },
};

export default {
    component: SNETLoader,
    tags: ['autodocs'],
    argTypes: {
        onSubmit:{
            default: () => {},
        },
        title:
        {
            control: {type: 'text'},
            default: "Login",
        },       
        loginError:{
            control: {type: 'text'},
            default: "Error, something went wrong",
        },
        forgotPasswordLink:{
            control: {type: 'text'},
            default: "https://singularitynet.io",
        }

    },
};
