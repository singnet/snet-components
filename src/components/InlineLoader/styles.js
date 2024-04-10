import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
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
