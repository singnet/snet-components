import UserProfileCard from './';

export const UserProfileCardTest = {
    args:{
        nickName: "Some nickname",
        onClose: () => {},
    },
};

export default {
    component: UserProfileCard,
    tags: ['autodocs'],
    argTypes: {
        nickName:
        {
            control: {type: 'text'},
            default: "Some nickname",
        },
        onClose:{
            default: () => {},
        },
    },
};
