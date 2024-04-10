import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    card: {
        minWidth: 200,
        maxWidth: 345,
        textAlign: "center",
    },
    loaderContent: {
        paddingTop: 5,
        color: theme.palette.text.mediumShadeGray,
        fontSize: 14,
        letterSpacing: 0.25,
        lineHeight: "20px",
    },
    circularProgressContainer: {
        paddingTop: 20,
        textAlign: "center",
        "& div": { color: theme.palette.text.primary },
    },
    circularProgress: { display: "inline-block" },
}));
