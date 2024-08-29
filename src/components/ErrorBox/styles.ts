import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes";

export const useStyles = makeStyles((theme: CustomThemeOptions) => ({
  errorMsgContainer: {
    width: "100%",
    margin: "40px 0 60px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    "& > span": {
      color: theme.palette.text.mediumShadeGray,
      fontSize: 24,
      fontWeight: 200,
      lineHeight: "30px",
    },
  },
  btnContainer: {
    "& p": {
      margin: "30px 0 16px",
      color: theme.palette.text.lightShadedGray,
      fontSize: 14,
      lineHeight: "18px",
    },
    "& button": { fontWeight: 600 },
  },
  grayBoxContainer: { padding: "0 24px" },
  grayBox: {
    padding: "24px 16px 36px",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#F1F1F1",
    borderRadius: 4,
    backgroundColor: "#F6F6F6",
  },
}));
