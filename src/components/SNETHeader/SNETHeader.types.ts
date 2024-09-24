import { ReactNode } from "react";
import { MenuItemProps } from "../StyledMenu/StyledMenu.types";

export interface ColorsProps {
  PURPLE: "purple";
  WHITE: "white";
}

export type ColorProps = ValueOf<ColorsProps>;

export type SnetSvgLogoProps = {
  [key in ColorProps]: string;
};

export interface NavItemProps {
  title: string;
  link: string;
  isActive?: boolean;
  openInNewTab?: boolean;
}

export interface DropdownNavItemProps {
  label: string;
  list: MenuItemProps[];
}

export interface HeaderActionsProps {
  isLoggedIn: boolean;
  LoggedInActions: ReactNode;
  LoggedOutActions: ReactNode;
}

export interface NavBarProps {
  navbarItems: NavItemProps[];
  dropdownNavbarItems: DropdownNavItemProps[];
}

export interface MobileHeaderProps extends HeaderActionsProps {
  mobileNavLinks: NavItemProps[];
  mobileDropDown?: DropdownNavItemProps[];
  color: ColorProps;
}

export interface LogoProps {
  portalName: string;
  onLogoClick: () => void;
  color: ColorProps;
}

export interface SNETHeaderProps extends MobileHeaderProps, NavBarProps, LogoProps {
  isMobileHeaderVisible: boolean;
}
