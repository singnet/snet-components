import React from "react";
import MuiButton from "@mui/material/Button";
import ButtonBase from '@mui/material/ButtonBase';
import { buttonStyleVariants, muiButtonColors } from "./constantVariants";
import { useStyles } from "./styles";

const SNETButton = ({ color, variant, ...rest }) => {
    const styleKey = () => {
        return `${color}-${variant ?? ""}`;
    };
    const buttonStyles = () => {
        return buttonStyleVariants[styleKey()];
    };

    const classes = useStyles(buttonStyles());

    const muiButtonColor = muiButtonColors[color] ?? "default";

    if ( muiButtonColors[color]) {
        return (
            <MuiButton className={classes.root} color={muiButtonColors[color]} variant={variant} {...rest} />
        );
    }

    return (
        <ButtonBase className={classes.root} color={color} variant={variant} {...rest} />
    );
};

export default SNETButton;
