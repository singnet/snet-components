import React, { FC } from "react";
import { FooterLinksProps } from "../../SNETFooter.types";
import { useStyles } from "./styles";
import FooterLink from "../../FooterLink";
import FooterLinkTitle from "../../FooterLinkTitle";

const FooterLinks: FC<FooterLinksProps> = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.footerRightSideLinks}>
      {data.map((item) => (
        <ul key={item.title} className={classes.footerLinksList}>
          <FooterLinkTitle title={item.title} />
          {item.children.map((child) => (
            <FooterLink
              key={child.label}
              image={child.image}
              link={child.link}
              label={child.label}
              internalLink={child.internalLink}
            />
          ))}
        </ul>
      ))}
    </div>
  );
};

export default FooterLinks;
