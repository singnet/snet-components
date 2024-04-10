import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/styles";

const SNETTooltip = ({ tooltipText, placement }) => {
    const StyledTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            fontSize: "16px",
            boxShadow: `0 8px 10px 1px rgba(0,0,0,0.14),
         0 3px 14px 2px rgba(0,0,0,0.12),
         0 5px 5px -3px rgba(0,0,0,0.2)`,
            background: theme.palette.text.lightGrey,
        },
    }));

    return (
        <StyledTooltip
            children={
                <IconButton>
                    <InfoIcon />
                </IconButton>
            }
            placement={placement || "top-end"}
            title={<p>{tooltipText}</p>}
        />
    );
};

export default SNETTooltip;
