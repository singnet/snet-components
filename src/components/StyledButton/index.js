import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import clsx from "clsx";
import Icon from "@mui/material/Icon";

import { useStyles } from "./styles";

const buttonColor = {
    blue: "blueBg",
    gradient: "gradientBg",
    black: "blackBg",
    transparent: "transparentBg",
    transparentBlueBorder: "transparentBlueBorder",
    transparentBlueBorderDisable: "transparentBlueBorderDisable",
    red: "red",
    redBg: "redBg",
};

const StyledButton = ({
    disabled,
    onClick,
    type = "blue",
    btnType = "button",
    iconClass,
    href,
    openInNewTab,
    btnText,
    ...rest
}) => {
    const classes = useStyles();

    return (
        <Button
            className={clsx(classes.styledButton, classes[buttonColor[type]])}
            disabled={disabled}
            onClick={onClick}
            type={btnType}
            href={href}
            target={href && openInNewTab ? "_blank" : ""}
            rel={href && openInNewTab ? "noopener" : ""}
            {...rest}
        >
            {iconClass ? <Icon className={iconClass} /> : null}
            {btnText}
        </Button>
    );
};

StyledButton.propTypes = {
    type: PropTypes.oneOf([
        "blue",
        "gradient",
        "black",
        "transparent",
        "red",
        "redBg",
        "transparentBlueBorder",
        "transparentBlueBorderDisable",
    ]),
    btnType: PropTypes.oneOf(["submit", "reset", "button"]),
    btnText: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    iconClass: PropTypes.string,
    href: PropTypes.string,
    openInNewTab: PropTypes.bool,
};

export default StyledButton;
