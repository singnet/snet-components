import GetStarted from './index.js';

export const GetStartedTest = {
    args: {
        CTAType: false,
        pageBtnRoute: '',
        GetStartedDetails: {},
        GetStartedCategories: [
            {
                title: '2333',
                content: [{ type: 'description', value: 'bla bla' }],
            },
        ],
    },
};

export default {
    component: GetStarted,
    tags: ['autodocs'],
    argTypes: {
        CTAType: {
            default: false,
            options: [false, true],
            control: { type: 'radio' },
        },
        pageBtnRoute: {
            default: '',
            control: { type: 'text' },
        },
        GetStartedDetails: {
            default: {},
            control: { type: 'object' },
        },
        GetStartedCategories: {
            default: [
                {
                    title: '2333',
                    content: [{ type: 'description', value: 'bla bla' }],
                },
            ],
            control: { type: 'array' },
        },
    },
};
