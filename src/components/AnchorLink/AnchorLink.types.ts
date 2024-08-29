import { AnchorHTMLAttributes } from "react";

export interface AnchorLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  label: string;
  href: string;
  openInNewTab?: boolean;
}
