import React, { FC } from "react";
import { AnchorLinkProps } from "./AnchorLink.types";

const AnchorLink: FC<AnchorLinkProps> = ({ label, href, openInNewTab, ...rest }) => {
  const newTabProps = {
    target: "_blank",
    rel: "noopener",
  };

  return (
    <a href={href} title={label} {...rest} {...(openInNewTab ? newTabProps : {})}>
      {label}
    </a>
  );
};

export default AnchorLink;
