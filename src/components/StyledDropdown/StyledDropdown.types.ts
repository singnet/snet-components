import { FormControlTypeMap } from "@mui/material";

export interface StyledDropdownProps {
  inputLabel: string;
  labelTxt: string;
  list: MenuItemProps[];
  onChange: () => void;
  value: string;
  disabled: boolean;
  icon?: boolean;
  infoMsg?: string;
  formControlProps: FormControlTypeMap;
}

export interface MenuItemProps {
  value: string;
  label: string;
}
