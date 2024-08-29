import { ReactNode } from "react";

export interface FooterLinkProps {
  label: string;
  link: string;
  image: ReactNode;
  internalLink: string;
}

export interface FooterLinkTitleProps {
  title: string;
}

export interface FooterCategoryProps {
  title: string; //FooterLinkTitleProps;
  children: FooterLinkProps[];
}

export interface FooterLinksProps {
  data: FooterCategoryProps[];
}

export interface PrimaryFooterProps {
  leftData: FooterLinkProps[];
  mainData: FooterCategoryProps[];
}

export interface SocialIconProps {
  link: string;
  title: string;
  className: string;
}

export interface SecondaryFooterProps {
  data: SocialIconProps[];
}
