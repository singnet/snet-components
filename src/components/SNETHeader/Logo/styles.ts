import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../../assets/ThemeTypes"

export const useStyles = makeStyles((MUITheme: CustomThemeOptions) => ({
    logoContainer: {
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        "& img": { width: 172 },
        "& h5": {
            marginLeft: 11,
            fontWeight: 300,
            letterSpacing: -1,
            lineHeight: "30px",
            color: MUITheme.palette.text.white,
            "@media(max-width:420px)": { display: "none" },
        },
    },
}));
