import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes";

export const useStyles = makeStyles((MuiTheme: CustomThemeOptions) => ({
  alertBoxContainer: {
    padding: "7px 11px",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    "& svg": { paddingRight: 14 },
  },
  content: {
    fontFamily: MuiTheme.typography.fontFamily,
    textAlign: "left",
    "& p": {
      margin: "0 !important",
      color: MuiTheme.palette.text.primary,
      fontSize: 14,
      lineHeight: "18px",
      "& a": { textDecoration: "none" },
    },
  },
  messageBox: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    padding: "13px 20px",
    marginTop: "20px ",
    color: MuiTheme.palette.text.darkGrey,
    fontSize: "14px !important",
    lineHeight: "20px",
    letterSpacing: 0.25,
    textAlign: "left",
    wordBreak: "break-all",
  },
  error: {
    borderColor: MuiTheme.palette.border.alertBox,
    backgroundColor: MuiTheme.palette.background.alertBox,
    "& svg": { color: MuiTheme.palette.border.alertBox },
  },
  success: {
    borderColor: MuiTheme.palette.success.main,
    backgroundColor: MuiTheme.palette.background.succesBox,
    "& svg": { color: `${MuiTheme.palette.success.main} !important` },
  },
  warning: {
    borderColor: MuiTheme.palette.border.warningBox,
    backgroundColor: MuiTheme.palette.background.warningBox,
    "& a": {
      color: MuiTheme.palette.infoBoxLink,
      fontWeight: 600,
    },
    "& svg": { color: "#FFC200" },
  },
  info: {
    borderColor: MuiTheme.palette.primary.main,
    backgroundColor: MuiTheme.palette.background.infoBox,
    "& svg": { color: MuiTheme.palette.primary.main },
    "& a": {
      color: MuiTheme.palette.infoBoxLink,
      fontWeight: 600,
    },
  },
  alertHeader: {
    color: MuiTheme.palette.text.primary,
    fontSize: 14,
    lineHeight: "18px",
    fontWeight: "bold",
  },
}));
