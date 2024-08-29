import RatingsCount from "./";

export const RatingsCountTest = {
  args: {
    totalRating: 2,
    ratingGiven: 2,
  },
};

export default {
  component: RatingsCount,
  tags: ["autodocs"],
  argTypes: {
    ratingGiven: {
      default: 2,
      control: { type: "number" },
    },
    totalRating: {
      default: 2,
      control: { type: "number" },
    },
  },
};
