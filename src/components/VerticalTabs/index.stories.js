import VerticalTabs from './index.js';

export const VerticalTabsTest = {
    args:{
        upperTabs: ["firstUpper", "secondUpper"],
        lowerTabs: ["firstLower", "secondLower"],
    },
};

export default {
    component: VerticalTabs,
    tags: ['autodocs'],
    argTypes: {
        upperTabs:
        {
            control: {type: 'array'},
            default: ["firstUpper", "secondUpper"],
        },
        lowerTabs:{
            control: {type: 'array'},
            default: ["firstLower", "secondLower"],
        },
    },
};
