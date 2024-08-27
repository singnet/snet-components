import { makeStyles } from "@mui/styles";
import { CustomThemeOptions } from "../../assets/ThemeTypes"

export const useStyles = makeStyles((theme: CustomThemeOptions) => ({
    ratedCount: {
        marginLeft: 10,
        display: "inline-block",
        color: theme.palette.text.lightShadedGray,
        fontSize: 12,
        fontWeight: 600,
        letterSpacing: 2,
        verticalAlign: "super",
    },
}));
