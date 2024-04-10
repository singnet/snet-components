import React from "react";
import { Box } from "@mui/material";
import { columnsMeta } from "./meta";
import SnetFooterColumn from "../SnetFooterColumn";
import { useStyles } from "./styles";

const SnetFooterColumns = () => {
    const classes = useStyles();
    const FooterColumnsContent = () => {
        return (
            <React.Fragment>
                {columnsMeta.map((column) => (
                    <SnetFooterColumn key={column.key} column={column} />
                ))}
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <Box className={classes.columnsContainer}>
                <FooterColumnsContent />
            </Box>
        </React.Fragment>
    );
};

export default SnetFooterColumns;
