import React from "react";
import SNETSignupConfirm from "./index";

export default {
    title: "Components/SNETSignupConfirm",
    component: SNETSignupConfirm,
    argTypes: {
        info: {
            control: { type: "object" },
            defaultValue: {
                title: "Sign Up Confirmation",
                description: "Please enter the verification code sent to your email.",
            },
        },
        onResendOtp: { action: "Resend OTP clicked" },
        onSubmit: { action: "OTP Submitted" },
        signupAlert: {
            control: { type: "object" },
            defaultValue: {
                type: "",
                message: "",
            },
        },
    },
};

const Template = (args) => <SNETSignupConfirm {...args} />;

export const Default = Template.bind({});
Default.args = {
    info: {
        title: "Sign Up Confirmation",
        description: "Please enter the verification code sent to your email.",
    },
    signupAlert: {
        type: "",
        message: "",
    },
};
