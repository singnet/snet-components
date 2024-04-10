import React from "react";
import PropTypes from "prop-types";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles } from "./styles";

import SnetBlackLogo from "shared/dist/assets/images/BlackLogo.svg";
import SnetWhiteLogo from "shared/dist/assets/images/WhiteLogo.svg";

const SnetSvgLogo = {
    white: SnetBlackLogo,
    purple: SnetWhiteLogo,
};

const Logo = ({ headerColor, portalName, handleLogoClick }) => {
    const classes = useStyles();
    return (
        <Box className={classes.logoContainer} onClick={handleLogoClick}>
            <CardMedia component="img" image={SnetSvgLogo[headerColor]} alt="SingularityNET" />
            <Typography variant="h5">{portalName}</Typography>
        </Box>
    );
};

Logo.propTypes = {
    headerColor: PropTypes.string,
    portalName: PropTypes.string,
};

export default Logo;
