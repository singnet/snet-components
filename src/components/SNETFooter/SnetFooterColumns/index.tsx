import React, {FC} from "react";
import { Box } from "@mui/material";
import { columnsMeta } from "./meta";
import SnetFooterColumn from "../SnetFooterColumn";
import { useStyles } from "./styles";
import { FooterCopyrightProps } from "../SNETFooter.types"

const SnetFooterColumns: FC<FooterCopyrightProps> = () => {
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
            <Box className={classes.columnsContainer}>
                <FooterColumnsContent />
            </Box>
    );
};

export default SnetFooterColumns;
