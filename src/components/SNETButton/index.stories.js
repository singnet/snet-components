import React from "react";
import SNETButton from "./";
import { Box } from "@mui/material";
import { buttonStyleVariants, muiButtonColors } from "./constantVariants";

export default {
  title: "Components/SNETButton",
  component: SNETButton,
  decorators: [
    (Story) => (
      <Box sx={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    color: {
      control: {
        type: "select",
        options: Object.keys(buttonStyleVariants).map(key => key.split('-')[0]),
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["", "outlined", "contained"],
      },
    },
    children: { control: "text" },
  },
};

const Template = (args) => <SNETButton {...args} />;

export const RedOutlined = Template.bind({});
RedOutlined.args = {
  color: "red",
  variant: "outlined",
  children: "Red Outlined Button",
};

export const WhiteContained = Template.bind({});
WhiteContained.args = {
  color: "white",
  variant: "contained",
  children: "White Contained Button",
};

export const PurpleDefault = Template.bind({});
PurpleDefault.args = {
  color: "purple",
  variant: "",
  children: "Purple Button",
};

export const CustomButton = Template.bind({});
CustomButton.args = {
  color: "red",
  variant: "contained",
  children: "Custom Button",
};
