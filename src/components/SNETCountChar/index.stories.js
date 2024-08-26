import SNETAppBar from './index.js';

export const SNETAppBarTest = {
    args:{
        currentCountChar:2,
        maximumCountChar:2,
        setErrorFunction: () => {}
    },
};

export default {
    component: SNETAppBar,
    tags: ['autodocs'],
    argTypes: {
        currentCountChar:
        {
            control: { type: 'number' },
            default: 2,
        },
        maximumCountChar:
        {
            control: { type: 'number' },
            default: 2,
        },
        setErrorFunction:
        {
            default: () => {},
        },
    },
};
