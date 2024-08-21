import React from "react";
import MUILink from "@mui/material/Link";
import PropTypes from "prop-types";

const AnchorLink = ({ label, href, openInNewTab, ...rest }) => {
    if (openInNewTab) {
        return (
            <MUILink href={href} title={label} target="_blank" rel="noopener" {...rest}>
                {label}
            </MUILink>
        );
    }
    return (
        <MUILink href={href} title={label} {...rest}>
            {label}
        </MUILink>
    );
};

AnchorLink.propTypes = {
    label: PropTypes.string,
    href: PropTypes.string,
    openInNewTab: PropTypes.bool,
};

export default AnchorLink;
