import React from "react";
import { withStyles } from "@mui/styles";
import CodeSnippet from "./";
import { useStyles } from "./styles";

export default {
  title: "Components/CodeSnippet",
  component: CodeSnippet,
  decorators: [
    (Story) => (
      <div style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    children: { control: "text" },
  },
};

const StyledCodeSnippet = withStyles(useStyles)(CodeSnippet);

const Template = (args) => <StyledCodeSnippet {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `
    const helloWorld = () => {
      console.log("Hello, world!");
    };
  `,
};

