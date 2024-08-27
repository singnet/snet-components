import React, { FC, HTMLAttributes } from "react";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles } from "./styles";
import { SnetSvgLogoProps, LogoProps } from "../SNETHeader.types";
import SnetBlackLogo from "../../../assets/images/BlackLogo.svg";
import SnetWhiteLogo from "../../../assets/images/WhiteLogo.svg";

const SnetSvgLogo: SnetSvgLogoProps = {
    white: SnetBlackLogo,
    purple: SnetWhiteLogo,
};

const Logo: FC<LogoProps & HTMLAttributes<HTMLDivElement>> = ({ color, portalName, onLogoClick }) => {
    const classes = useStyles();
    return (
        <Box className={classes.logoContainer} onClick={onLogoClick}>
            <CardMedia component="img" image={SnetSvgLogo[color]} alt="SingularityNET" />
            <Typography variant="h5">{portalName}</Typography>
        </Box>
    );
};

export default Logo;
