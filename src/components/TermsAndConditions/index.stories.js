import React, { useState } from "react";
import TermsAndConditions from "./index";
import PrivacyTerms from "./PrivacyTerms";

export default {
    title: "Components/TermsAndConditions",
    component: TermsAndConditions,
    tags: ['autodocs'],
    argTypes: {
        title: {
            control: { type: "text" },
            defaultValue: "Terms and Conditions",
            description: "Title of the Terms and Conditions component.",
        },
        formLabel: {
            control: { type: "text" },
            defaultValue: "I agree to the terms and conditions",
            description: "Label text for the checkbox.",
        },
        agreed: {
            control: { type: "boolean" },
            defaultValue: false,
            description: "Indicates whether the terms are agreed to.",
        },
        onChangeAgreed: {
            action: "changed",
            description: "Function to handle checkbox state change.",
        },
        onAccept: {
            action: "accepted",
            description: "Function to handle acceptance of terms.",
        },
        Content: {
            control: { type: "element" },
            defaultValue: PrivacyTerms,
            description: "Component to display terms content.",
        },
    },
};

const Template = (args) => {
    const [agreed, setAgreed] = useState(args.agreed);

    const handleChangeAgreed = (event) => {
        setAgreed(event.target.checked);
        args.onChangeAgreed(event);
    };

    return (
        <TermsAndConditions
            {...args}
            agreed={agreed}
            onChangeAgreed={handleChangeAgreed}
        />
    );
};

export const Default = Template.bind({});
Default.args = {
    title: "Terms and Conditions",
    formLabel: "I agree to the terms and conditions",
    agreed: false,
    onAccept: () => alert("Terms accepted!"),
    onChangeAgreed: () => {},
    Content: PrivacyTerms,
};
