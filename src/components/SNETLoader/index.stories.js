import SNETLoader from './index.js';

export const SNETLoaderTest = {
    args:{
        isLoading: true,
        title: "Please wait",
        content: "Loading..."
    },
};

export default {
    component: SNETLoader,
    tags: ['autodocs'],
    argTypes: {
        isLoading:{
            options: [true, false],
            control: { type: 'radio' },
            default: true,
        },
        title:
        {
            control: {type: 'text'},
            default: "something",
        },       
        content:{
            control: {type: 'text'},
            default: "something",
        }

    },
};
