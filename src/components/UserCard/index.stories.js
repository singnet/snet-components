import React, { useState } from "react";
import UserCard from "./index";

export default {
    title: "Components/UserCard",
    component: UserCard,
    tags: ['autodocs'],
    argTypes: {
        userImg: {
            control: { type: "text" },
            defaultValue: "This is a User's img.",
        },
        userName: {
            control: { type: "text" },
            defaultValue:  "username.",
        },
        userEmail: {
            control: { type: "text" },
            defaultValue: "example@gmail.com",
        },
    },
};
const Template = (args) => <UserCard {...args} />;

export const Default = Template.bind({});
Default.args = {
    userImg: "img",
    userName: "userName",
    userEmail: "userEmail",
};
