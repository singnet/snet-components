import SNETForgotPasswordConfirm from './index.js';
import React from "react";

export const SNETForgotPasswordConfirmTest = {
    args:{
        onSubmit: () => {},
        title: "title",
        description: <>Thanks for confirming your email.<span>Input your new password</span></>,
        forgotPasswordConfirmError: "Good"
    },
};

export default {
    component: SNETForgotPasswordConfirm,
    tags: ['autodocs'],
    argTypes: {
        onSubmit:
        {
            default: () => {},
        },
        title:
        {
            control: {type: 'object'},
            default: <>Thanks for confirming your email.<span>Input your new password</span></>,
        },       
        description:
        {
            control: {type: 'text'},
            default: "Title",
        },        
        email:
        {
            control: {type: 'text'},
            default: "Title",
        },        
        forgotPasswordError:
        {
            control: {type: 'text'},
            default: "Title",
        },
    },
};
