import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((MUITheme) => ({
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
