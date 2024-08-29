import React from "react";
import SNETHeader from "./SNETHeader";
import { BrowserRouter } from "react-router-dom";

export const SNETListTest = {
  args: {
    isLoggedIn: false,
    isMobileHeaderVisible: false,
    portalName: "text",
    color: "PURPLE",
    LoggedInActions: () => {
      console.log("LoggedInActions");
    },
    LoggedOutActions: () => {
      console.log("LoggedOutActions");
    },
    onLogoClick: () => {
      console.log("onLogoClick");
    },
    navbarItems: [],
    dropdownNavbarItems: [],
  },
};

export default {
  title: "Components/SNETHeader",
  component: SNETHeader,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  argTypes: {
    isLoggedIn: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    isMobileHeaderVisible: {
      control: { type: "boolean" },
      defaultValue: false,
    },
    portalName: {
      control: { type: "text" },
      defaultValue: "text",
    },
    color: {
      control: { type: "radio" },
      options: ["PURPLE", "WHITE"],
      defaultValue: "PURPLE",
    },
    LoggedInActions: {
      control: { type: "object" },
      defaultValue: () => {
        console.log("LoggedInActions");
      },
    },
    LoggedOutActions: {
      control: { type: "object" },
      defaultValue: () => {
        console.log("LoggedOutActions");
      },
    },
    onLogoClick: {
      defaultValue: () => {
        console.log("onLogoClick");
      },
    },
    navbarItems: {
      control: { type: "array" },
      defaultValue: [],
    },
    dropdownNavbarItems: {
      control: { type: "array" },
      defaultValue: [],
    },
  },
};
