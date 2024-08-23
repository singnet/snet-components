import SNETForgotPassword from './index.js';

export const SNETForgotPasswordTest = {
    args:{
        onSubmit: () => {},
        title: "title",
        description: "description",
        email: "email",
        forgotPasswordError: "Error!"
    },
};

export default {
    component: SNETForgotPassword,
    tags: ['autodocs'],
    argTypes: {
        onSubmit:
        {
            default: () => {},
        },
        title:
        {
            control: {type: 'text'},
            default: "Title",
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
