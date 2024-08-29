import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes";

export const useStyles = makeStyles((MUITheme: CustomThemeOptions) => ({
  snetHeader: {
    width: "100%",
    position: "fixed",
    top: 0,
    zIndex: 1100,
  },
  purpleHeader: {
    backgroundColor: MUITheme.palette.purple.main,
    color: MUITheme.palette.text.lightGrey,
    "& h5": { color: `${MUITheme.palette.text.white} !important` },
  },
  whiteHeader: {
    backgroundColor: MUITheme.palette.background.white,
    "& h5": { color: `${MUITheme.palette.text.darkGrey} !important` },
  },
  appBar: {
    padding: "14px 60px",
    flexDirection: "row",
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0 2px 6px 0 rgba(0,0,0,0.2)",
    zIndex: 1110,
    [MUITheme.breakpoints.down("md")]: { padding: "14px 10px" },
  },
  logoContainer: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    "& > img": { width: 172 },
    "& h5": {
      marginLeft: 11,
      fontWeight: 300,
      letterSpacing: -1,
      lineHeight: "30px",
      "@media(max-width:420px)": { display: "none" },
    },
    [MUITheme.breakpoints.down("md")]: { padding: 0 },
  },
  navContainer: {
    display: "flex",
    "@media(max-width:1028px)": { display: "none" },
    [MUITheme.breakpoints.down("md")]: { padding: 0 },
  },
  headerActionsContainer: {
    display: "flex",
    "@media(max-width:720px)": { display: "none" },
  },
}));
