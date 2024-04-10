import React from "react";
import { Box } from "@mui/material";
import SnetLogo, { logoVariants } from "../SNETLogo";
import { useStyles } from "./styles";

const SnetFooterColumn = ({ column }) => {
    const classes = useStyles();
    const columnClassName = column.isPrimary
        ? `${classes.footerColumn}, ${classes.primary}`
        : classes.footerColumn;

    const ColumnTitle = () => {
        return (
            <React.Fragment>
                {column.isPrimary ? (
                    <SnetLogo
                        variant={logoVariants.LIGHT}
                        additionalClassName={classes.columnTitle}
                    />
                ) : (
                    <h3 className={classes.columnTitle}>{column.title}</h3>
                )}
            </React.Fragment>
        );
    };

    const ColumnLinks = () => {
        return (
            <React.Fragment>
                <ul className={classes.columnLinks}>
                    {column.links.map((link) => (
                        <li key={link.key}>
                            <a
                                href={link.href}
                                className={classes.columnLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Box className={columnClassName}>
                <ColumnTitle />
                <ColumnLinks />
            </Box>
        </React.Fragment>
    );
};

export default SnetFooterColumn;
