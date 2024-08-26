import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes"

export const useStyles = makeStyles((MUITheme: CustomThemeOptions) => ({
    snetFooterContainer: {
        width: "100%",
        backgroundColor: MUITheme.palette.background.footer,
    },
    snetFooter: {
        width: "80%",
        padding: 20,
        margin: "0 auto",
    },
}));
