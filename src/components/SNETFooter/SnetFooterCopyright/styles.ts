import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../../assets/ThemeTypes";

export const useStyles = makeStyles((MUITheme: CustomThemeOptions) => ({
  footerDivider: {
    backgroundColor: MUITheme.palette.border.grey,
    marginBottom: "20px",
  },
  copyrightText: {
    color: MUITheme.palette.text.lightGrey,
    opacity: "70%",
    fontSize: "14px",
    textAlign: "center",
    lineHeight: "21px",
  },
}));
