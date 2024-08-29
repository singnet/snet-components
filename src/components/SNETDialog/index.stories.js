import SNETAppBar from "./";
import React from "react";

export const SNETAppBarTest = {
  args: {
    isDialogOpen: true,
    onDialogClose: () => {
      console.log("onDialogClose");
    },
    title: "title",
    children: <span> i am children </span>,
    showClosebutton: true,
    disableBackdropClick: false,
    disableEscapeKeyDown: false,
    contentClass: "class",
  },
};

export default {
  component: SNETAppBar,
  tags: ["autodocs"],
  argTypes: {
    onDialogClose: {
      default: () => {
        console.log("onDialogClose");
      },
    },
    isDialogOpen: {
      options: [true, false],
      control: { type: "radio" },
      default: true,
    },
    setErrorFunction: {
      options: [true, false],
      control: { type: "radio" },
      default: true,
    },
    title: {
      control: { type: "text" },
      default: "Title",
    },
    showClosebutton: {
      options: [true, false],
      control: { type: "radio" },
      default: true,
    },
    disableBackdropClick: {
      options: [true, false],
      control: { type: "radio" },
      default: true,
    },
    disableEscapeKeyDown: {
      options: [true, false],
      control: { type: "radio" },
      default: true,
    },
    children: {
      default: "Children components",
      control: { type: "node" },
    },
  },
};
