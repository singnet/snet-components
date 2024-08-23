import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes"

export const useStyles = makeStyles((MuiTheme: CustomThemeOptions) => ({
    errorMsg: {
        margin: 0,
        fontSize: 12.17,
        lineHeight: "16px",
        letterSpacing: 0.4,
    },
    error: { color: MuiTheme.palette.error.main },
    success: { color: MuiTheme.palette.success.main },
    warning: { color: MuiTheme.palette.background.alertBox },
    info: { color: MuiTheme.palette.primary.main },
}));
