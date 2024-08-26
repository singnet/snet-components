import SNETLoader from './index.js';
import React from "react";
import { BrowserRouter } from 'react-router-dom';

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
    decorators:[
        (Story) =>(
            <BrowserRouter>
                <Story/>
            </BrowserRouter> 
        )
    ],
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
            default: "",
        },
        forgotPasswordLink:{
            control: {type: 'text'},
            default: "https://singularitynet.io",
        }

    },
};
