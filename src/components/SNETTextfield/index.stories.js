import React from "react";
import SNETTextfield from "./index";

export default {
    title: "Components/SNETTextfield",
    component: SNETTextfield,
    argTypes: {
        name: {
            control: { type: "text" },
            defaultValue: "exampleField",
        },
        label: {
            control: { type: "text" },
            defaultValue: "Example Label",
        },
        value: {
            control: { type: "text" },
            defaultValue: "",
        },
        helperText: {
            control: { type: "text" },
            defaultValue: "Helper text goes here.",
        },
        description: {
            control: { type: "text" },
            defaultValue: "This is a description for the text field.",
        },
        infoMsg: {
            control: { type: "text" },
            defaultValue: "Additional information tooltip.",
        },
        maxCount: {
            control: { type: "number" },
            defaultValue: 100,
        },
        disabled: {
            control: { type: "boolean" },
            defaultValue: false,
        },
        onChange: { action: "Value changed" },
        onKeyUp: { action: "Key up" },
        error: {
            control: { type: "object" },
            defaultValue: null,
        },
        extraInfo: {
            control: { type: "text" },
            defaultValue: "Extra info text",
        },
    },
};

const Template = (args) => <SNETTextfield {...args} />;

export const Default = Template.bind({});
Default.args = {
    name: "exampleField",
    label: "Example Label",
    value: "",
    helperText: "Helper text goes here.",
    description: "This is a description for the text field.",
    infoMsg: "Additional information tooltip.",
    maxCount: 100,
    disabled: false,
    error: null,
    extraInfo: "Extra info text",
};
