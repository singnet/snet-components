import React from "react";
import StyledDropdown from "./index";

export default {
  title: "Components/StyledDropdown",
  component: StyledDropdown,
  tags: ["autodocs"],
  argTypes: {
    labelTxt: {
      control: { type: "text" },
      defaultValue: "Select a value",
    },
    value: {
      control: { type: "text" },
      defaultValue: "default",
    },
    inputLabel: {
      control: { type: "text" },
      defaultValue: "Choose an option",
    },
    disabled: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    icon: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    infoMsg: {
      control: { type: "text" },
      defaultValue: "This is some additional info",
    },
    list: {
      control: { type: "object" },
      defaultValue: [
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3" },
      ],
    },
    onChange: { action: "Value changed" },
  },
};

const Template = (args) => <StyledDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelTxt: "Select a value",
  value: "default",
  inputLabel: "Choose an option",
  disabled: false,
  icon: false,
  infoMsg: "This is some additional info",
  list: [
    { value: 1, label: "Option 1" },
    { value: 2, label: "Option 2" },
    { value: 3, label: "Option 3" },
  ],
};
