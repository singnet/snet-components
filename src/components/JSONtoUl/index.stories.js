import GetStarted from './index.js';

export const GetStartedTest = {
    args:{
        obj: {},
    },
};

export default {
    component: GetStarted,
    tags: ['autodocs'],
    argTypes: {
        obj: {
            default: {},
            control: { type: 'object' },
        },
    },
};