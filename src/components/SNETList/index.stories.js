import SNETList from './index.js';

export const SNETListTest = {
    args:{
        display: "something",
    },
};

export default {
    component: SNETList,
    tags: ['autodocs'],
    argTypes: {
        display:
        {
            control: {type: 'text'},
            default: "something",
        },       
    },
};
