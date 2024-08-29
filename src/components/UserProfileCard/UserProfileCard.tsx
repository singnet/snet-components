import React, { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { UserProfileCardProps } from "./UserProfileCard.types";
import { useStyles } from "./styles";

const UserProfileCard: FC<UserProfileCardProps> = ({ nickName, onClose }) => {
  const classes = useStyles();
  return (
    <div className={classes.Userdetails}>
      <AccountCircleIcon />
      <div>
        <h4>{nickName}</h4>
      </div>
      {onClose && <CloseIcon className={classes.closeIcon} onClick={onClose} />}
    </div>
  );
};

export default UserProfileCard;
