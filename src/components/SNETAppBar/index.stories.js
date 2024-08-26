import SNETAppBar from './index.js';

export const SNETAppBarTest = {
    args:{
        color:'white',
    },
};

export default {
    component: SNETAppBar,
    tags: ['autodocs'],
    argTypes: {
        color:
        {
            options: ["white", "purple"],
            control: { type: 'radio' },
            default: "white",
        },
    },
};
