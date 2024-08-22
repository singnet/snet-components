import React from "react";
import StyledLinearProgress from "./index";

export default {
    title: "Components/StyledLinearProgress",
    component: StyledLinearProgress,
    argTypes: {
        value: {
            control: { type: "number" },
            defaultValue: 50,
            description: "The value of the progress indicator for the determinate variant. Must be between 0 and 100.",
        },
    },
};

const Template = (args) => <StyledLinearProgress {...args} />;

export const Default = Template.bind({});
Default.args = {
    value: 50,
};
