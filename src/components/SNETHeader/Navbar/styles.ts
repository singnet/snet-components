import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../../assets/ThemeTypes";

export const useStyles = makeStyles((MUITheme: CustomThemeOptions) => ({
  navlist: {
    padding: 0,
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: 20,
    listStyle: "none",
    "& li": {
      width: "auto",
      padding: 0,
    },
  },
  navLink: {
    textDecoration: "none",
    color: MUITheme.palette.text.lightGrey,
  },
  navLinkActive: {
    borderBottom: `2px solid ${MUITheme.palette.primary.main}`,
    paddingBottom: 3,
    color: MUITheme.palette.primary.main,
    fontWeight: 600,
    "&: visited": {
      borderBottom: `2px solid ${MUITheme.palette.primary.main}`,
      paddingBottom: 3,
      color: MUITheme.palette.primary.main,
      fontWeight: 600,
    },
  },
}));
