import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../../assets/ThemeTypes"

export const useStyles = makeStyles((MuiTheme: CustomThemeOptions) => ({
    columnsContainer: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        textAlign: "left",
    },
    footerColumn: {
        "& primary": {
            flex: "auto !important",
            width: "100% !important",
        },
    },
}));
