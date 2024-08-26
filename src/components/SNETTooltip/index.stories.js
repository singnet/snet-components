import React from "react";
import SNETTooltip from "./";
import { Box } from "@mui/material";

export default {
  title: "Components/SNETTooltip",
  component: SNETTooltip,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ padding: "20px", display: "flex", justifyContent: "center" }}>
        <Story />
      </Box>
    ),
  ],
  argTypes: {
    tooltipText: { control: "text" },
    placement: {
      control: {
        type: "text",
      },
      description:"top, bottom, left, right, top-start, top-end, bottom-start, bottom-end, left-start, left-end, right-start, right-end"
    },
  },
};

const Template = (args) => <SNETTooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  tooltipText: "This is a tooltip",
  placement: "top-end",
};