import React, { useState, FC, MouseEvent } from "react";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import CaretIcon from "@mui/icons-material/ArrowDropDown";
import { StyledMenuProps } from "./StyledMenu.types";
import { useStyles } from "./styles";
import AnchorLink from "../AnchorLink";

const StyledMenu: FC<StyledMenuProps> = ({ label, list }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);

  const handleOpen = (event: MouseEvent<HTMLDivElement>) => {
    if (!(event instanceof Event)) {
      return;
    }
    if (event.currentTarget instanceof Element) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.styledMenu}>
      <div className={classes.buttonContainer} onClick={(event) => handleOpen(event)}>
        <p className={classes.button}>{label}</p>
        <CaretIcon />
      </div>
      <Menu anchorEl={anchorEl} id="simple-menu" open={Boolean(anchorEl)} onClose={handleClose}>
        {list.map((item) => (
          <MenuItem key={item.label} className={classes.menuItem}>
            <AnchorLink label={item.label} href={item.link} openInNewTab={item.newTab} />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default StyledMenu;
