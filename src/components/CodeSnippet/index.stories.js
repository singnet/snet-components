import React from "react";

export const CodeSnippetArgs = {
  args: {
    children: <div>Hello world!</div>,
  },
};

export default {
  title: "Components/CodeSnippet",
  component: CodeSnippetArgs,
  tags: ["autodocs"],
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

// const StyledCodeSnippet = CodeSnippet;

// const Template = (args) => <StyledCodeSnippet {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//     children: `
//     const helloWorld = () => {
//       console.log("Hello, world!");
//     };
//   `,
// };
