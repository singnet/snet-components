import React, {FC} from "react";
import { FooterLinkTitleProps } from "./SNETFooter.types";

const FooterLinkTitle: FC<FooterLinkTitleProps> = ({ title }) => {
  return <span>{title}</span>;
};

export default FooterLinkTitle;
