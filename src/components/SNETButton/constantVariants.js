import MUITheme from "shared/dist/assets/Theme";
export const buttonStyleVariants = {
    "red-": {
        color: MUITheme.palette.text.red,
        hover: {
            backgroundColor: MUITheme.palette.background.hover.redLight,
        },
    },
    "white-": {
        borderWidth: 2,
        borderStyle: "solid",
        backgroundColor: MUITheme.palette.background.white,
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24)",
    },
    "red-outlined": {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: MUITheme.palette.background.red,
        color: MUITheme.palette.text.red,
        hover: {
            backgroundColor: MUITheme.palette.background.hover.redLight,
        },
    },
    "white-outlined": {
        borderWidth: 2,
        borderStyle: "solid",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24)",
        color: MUITheme.palette.text.lightGrey,
        backgroundColor: "transparent",
        borderColor: MUITheme.palette.background.white,
        hover: {
            backgroundColor: MUITheme.palette.background.white,
            color: MUITheme.palette.background.hover.dark,
        },
    },
    "white-contained": {
        backgroundColor: MUITheme.palette.background.white,
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.12), 0 1px 1px 0 rgba(0,0,0,0.24)",
        color: MUITheme.palette.text.darkGrey,
        hover: {
            borderColor: MUITheme.palette.background.white,
            backgroundColor: "rgba(255,255,255,0.3)",
            color: MUITheme.palette.background.white,
        },
    },
    "purple-": {
        borderWidth: 2,
        borderStyle: "solid",
        color: MUITheme.palette.text.white,
        backgroundColor: MUITheme.palette.purple.main,
        hover: {
            backgroundColor: MUITheme.palette.purple.light,
        },
    },
};

export const muiButtonColors = {
    inherit: "inherit",
    primary: "primary",
    secondary: "secondary",
    success: "success",
    error: "error",
    info: "info",
    warning: "warning",
};
