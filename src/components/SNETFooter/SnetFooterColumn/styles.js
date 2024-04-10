import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((MUITheme) => ({
    footerColumn: {
        "& ul": {
            listStyle: "none",
            padding: 0,
        },
    },

    primary: {
        flex: "0 0 150px",
        textAlign: "right",
        padding: 20,
        borderRight: `solid 1px ${MUITheme.palette.border.grey}`,
        "& ul": {
            listStyle: "none",
            padding: 0,
        },
    },

    columnTitle: {
        color: MUITheme.palette.text.white,
        opacity: "0.8",
        lineHeight: "50px",
        fontWeight: 400,
        fontSize: "20px",
        marginBottom: "10px",
        cursor: "default",
        pointerEvents: "none",
        "& a": {
            maxWidth: "150px",
            pointerEvents: "none",
        },
    },

    columnLink: {
        fontSize: "14px",
        lineHeight: "24px",
        color: MUITheme.palette.text.white,
        textDecoration: "none",
        opacity: "70%",
        transition: "0.3s all",
        "&:hover": {
            transform: "scale(1.05)",
            cursor: "pointer",
            opacity: "100%",
            transition: "0.3s all",
        },
    },
}));
