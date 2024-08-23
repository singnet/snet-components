import ErrorBox from './index.js';

export const ErrorBoxTest = {
    args:{
        errImg:"",
        errText:''
    },
};

export default {
    component: ErrorBox,
    tags: ['autodocs'],
    argTypes: {
        errImg: {
            default: '',
            control: { type: 'text' },
        },
        errText: {
            default: '',
            control: { type: 'text' },
        },
    },
};
