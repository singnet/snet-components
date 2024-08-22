import React from "react";
import StyledTextField from "./index";

export default {
    title: "Components/StyledTextField",
    component: StyledTextField,
    argTypes: {
        label: {
            control: { type: "text" },
            defaultValue: "Label",
            description: "Label text for the text field.",
        },
        value: {
            control: { type: "text" },
            defaultValue: "",
            description: "Value of the text field.",
        },
        handleChange: {
            description: "Function to handle change events.",
        },
        InputProps: {
            control: { type: "object" },
            defaultValue: {},
            description: "Props for customizing the input component.",
        },
    },
};

const Template = (args) => <StyledTextField {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Label",
    value: "",
    InputProps: {},
};
