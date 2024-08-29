import OfflineIndicator from "./";

export const OfflineIndicatorTest = {
  args: {
    show: true,
  },
};

export default {
  component: OfflineIndicator,
  tags: ["autodocs"],
  argTypes: {
    show: {
      options: [true, false],
      control: { type: "radio" },
      default: true,
    },
  },
};
