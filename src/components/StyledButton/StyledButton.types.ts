import { ReactNode } from "react";

export enum ButtonTypes {
  "submit",
  "reset",
  "button",
}

export interface ButtonColorProps {
  blue: "blueBg";
  gradient: "gradientBg";
  black: "blackBg";
  transparent: "transparentBg";
  transparentBlueBorder: "transparentBlueBorder";
  transparentBlueBorderDisable: "transparentBlueBorderDisable";
  red: "red";
  redBg: "redBg";
}

export type ButtonColorType = ValueOf<ButtonColorProps>;

export interface StyledButtonProps {
  type: keyof ButtonColorProps;
  btnType?: ButtonTypes;
  btnText: ReactNode;
  disabled: boolean;
  onClick: () => void;
  iconClass: string;
}
