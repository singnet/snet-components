import JSONtoUl from './';

export const JSONtoUlTest = {
    args: {
        obj: {},
    },
};

export default {
    component: JSONtoUl,
    tags: ['autodocs'],
    argTypes: {
        obj: {
            default: {},
            control: { type: 'object' },
        },
    },
};
