export const useStyles = (MUITheme) => ({
    styledMenu: {
        position: "relative",
    },
    styledMenuList: { position: "absolute" },
    buttonContainer: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
    },
    button: {
        padding: "0 !import",
        "& span": {
            textTransform: "none",
        },
    },
    menuItem: {
        "& a": {
            color: MUITheme.palette.text.lightGrey,
            fontSize: 16,
        },
    },
});
