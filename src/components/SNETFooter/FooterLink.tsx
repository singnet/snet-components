import React, { FC } from "react";
import SnetSvgLogo from "../SnetSvgLogo";
import { FooterLinkProps } from "./SNETFooter.types";

const FooterLink: FC<FooterLinkProps> = ({ label, link, image, internalLink }) => {
  return (
    <li>
      <a href={link} title={label} target={internalLink ? "_self" : "_blank"} rel="noopener noreferrer">
        {image ? <SnetSvgLogo /> : label}
      </a>
    </li>
  );
};

export default FooterLink;
