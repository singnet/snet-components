import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes";

export const useStyles = makeStyles((MUITheme: CustomThemeOptions) => ({
  styledProgressBar: {
    width: 553,
    height: 15,
    margin: "9px auto 5px",
    backgroundColor: "rgba(64, 134, 255, 0.3)",
    "& div": { backgroundColor: MUITheme.palette.text.primary },
    "@media (max-width: 1045px)": { width: "auto" },
  },
}));
