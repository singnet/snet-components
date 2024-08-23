import InlineLoader from './index.js';

export const InlineLoaderTest = {
    args:{
        loading:true,
    },
};

export default {
    component: InlineLoader,
    tags: ['autodocs'],
    argTypes: {
        loading: {
            options: [false, true],
            control: { type: 'radio' },
            default: 'true',
        },
    },
};
