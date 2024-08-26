import ProgressBar from './index.js';

export const ProgressBarTest = {
    args:{
        progressStatus:{},
        progressText: ["first", "second", "third"],
        activeSection: 2,
        onSectionClick: () => {}
    },
};

export default {
    component: ProgressBar,
    tags: ['autodocs'],
    argTypes: {
        progressText:{
            default: ["first", "second", "third"],
            control: { type: 'array' }
        },
        progressStatus: {
            default: {},
            control: { type: 'text' }
        },
        activeSection:
        {
            default: 2,
            control: { type: 'number' }
        },
    },
};
