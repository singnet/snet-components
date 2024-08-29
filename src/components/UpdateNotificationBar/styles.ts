import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes";

export const useStyles = makeStyles((MUITheme: CustomThemeOptions) => ({
  parentUpdateNotificationBar: {
    backgroundColor: MUITheme.palette.purple.main,
  },
  hidenNotificatoinBar: {
    opacity: 0,
    overflow: "hidden",
    maxHeight: 0,
    transition: "all 1s",
  },
  openNotificationBar: {
    opacity: 1,
    maxHeight: "100px",
  },
  updateNotificationBar: {
    padding: "2px 0",
    display: "flex",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "#800080",
    color: MUITheme.palette.text.white,
    zIndex: 9999,
    "& p": {
      margin: 0,
      fontSize: 14,
      letterSpacing: "0.25px",
      lineHeight: "18px",
      textAlign: "center",
      "& span": { fontWeight: "bold" },
      "& a": {
        color: "#fff",
        fontWeight: 200,
        textDecoration: "none",
      },
      "& svg": { fontSize: 12 },
    },
  },
  closeIcon: {
    position: "absolute",
    right: 95,
    cursor: "pointer",
  },
}));
