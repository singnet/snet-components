import React from "react";
import StyledMenu from "./index";

export default {
    title: "Components/StyledMenu",
    component: StyledMenu,
    argTypes: {
        label: {
            control: { type: "text" },
            defaultValue: "Menu",
            description: "Label for the menu button.",
        },
        list: {
            control: { type: "array" },
            defaultValue: [
                { label: "Item 1", link: "#", newTab: false },
                { label: "Item 2", link: "#", newTab: false },
                { label: "Item 3", link: "#", newTab: true },
            ],
            description: "Array of menu items, each containing label, link, and newTab properties.",
        },
    },
};

const Template = (args) => <StyledMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Menu",
    list: [
        { label: "Item 1", link: "#", newTab: false },
        { label: "Item 2", link: "#", newTab: false },
        { label: "Item 3", link: "#", newTab: true },
    ],
};
