import React from "react";
import CodeSnippet from "./CodeSnippet";

export const CodeSnippetArgs = {
  args: {
    children: <div>Hello world!</div>,
  },
};

export default {
  title: "Components/CodeSnippet",
  component: CodeSnippet,
  tags: ["autodocs"],
};

// const StyledCodeSnippet = CodeSnippet;

// const Template = (args) => <StyledCodeSnippet {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   children:
//   <div>Hello wotrld</div>
//   ,
// };
