import ProgressBar from "./";

export const ProgressBarTest = {
  args: {
    progressStatus: {},
    progressText: ["first", "second", "third"],
    activeSection: 2,
    onSectionClick: () => {
      console.log("onSectionClick");
    },
  },
};

export default {
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    progressText: {
      default: ["first", "second", "third"],
      control: { type: "array" },
    },
    progressStatus: {
      default: {},
      control: { type: "text" },
    },
    activeSection: {
      default: 2,
      control: { type: "number" },
    },
  },
};
