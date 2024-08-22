import React from "react";
import SNETSignup from "./index";

export default {
    title: "Components/SNETSignup",
    component: SNETSignup,
    argTypes: {
        info: {
            control: { type: "object" },
            defaultValue: {
                title: "Sign Up",
                description: "Join our platform to get started.",
                list: ["Feature 1", "Feature 2", "Feature 3"],
            },
        },
        onSubmit: { action: "submitted" },
        signupError: {
            control: { type: "text" },
            defaultValue: "",
        },
    },
};

const Template = (args) => <SNETSignup {...args} />;

export const Default = Template.bind({});
Default.args = {
    info: {
        title: "Sign Up",
        description: "Join our platform to get started.",
        list: ["Feature 1", "Feature 2", "Feature 3"],
    },
    signupError: "",
};
