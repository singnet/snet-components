import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes";

export const useStyles = makeStyles((theme: CustomThemeOptions) => ({
  pendingSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.orange,
    fontWeight: 600,
    "& span": {
      "&::before": {
        fontSize: 14,
      },
    },
  },
}));
