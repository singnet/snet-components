import UserProfileCard from "./";

export const UserProfileCardTest = {
  args: {
    nickName: "Some nickname",
    onClose: () => {
      console.log("close");
    },
  },
};

export default {
  component: UserProfileCard,
  tags: ["autodocs"],
  argTypes: {
    nickName: {
      control: { type: "text" },
      default: "Some nickname",
    },
    onClose: {
      default: () => {
        console.log("close");
      },
    },
  },
};
