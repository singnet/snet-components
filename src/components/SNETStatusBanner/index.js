import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

import AnchorLink from "../AnchorLink";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";

export const statusTitleType = {
    PENDING: "PENDING",
    REJECTED: "REJECTED",
};

const SNETStatusBanner = ({ classes, title, img, description, actions, type, anchorDetails }) => {
    return (
            <Box className={classes.statusBannerContainer}>
                <Box className={classes.statusBannerMedia}>
                    <img src={img} alt="Status-Media" />
                </Box>
                <Box className={classes.statusBannerContent}>
                    <Typography variant="h6" className={classes[statusTitleType[type]]}>
                        {title}
                    </Typography>
                    <Typography>{description}</Typography>
                    {actions.map((action) => (
                        <Button key={action.children} {...action} />
                    ))}
                    {anchorDetails
                        ? anchorDetails.map((detail) => (
                              <AnchorLink
                                  label={detail.label}
                                  href={detail.linkTo}
                                  key={detail.label}
                                  newTab={detail.newTab}
                              />
                          ))
                        : null}
                </Box>
            </Box>
    );
};

SNETStatusBanner.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    actions: PropTypes.array,
    type: PropTypes.oneOf([statusTitleType.PENDING, statusTitleType.REJECTED]),
};

export default withStyles(useStyles)(SNETStatusBanner);
