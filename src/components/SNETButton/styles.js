import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((MUITheme) => ({
    root: (props) => {
        const rootStyles = {
            fontFamily: MUITheme.typography.fontFamily,
            fontWeight: 500,
            fontSize: 14,
            letterSpacing: 1.25,
            padding: "13px 28px 11px",
            lineHeight: "16px",
            borderWidth: props?.borderWidth,
            borderStyle: props?.borderStyle,
            borderColor: props?.borderColor,
            borderRadius: 4, 
            color: props?.color,
            backgroundColor: props?.backgroundColor,
            border: props?.border,
            boxShadow: props?.boxShadow,
            "&:hover": props?.hover,
            "&:disabled": {
                backgroundColor: MUITheme.palette.background.disabled.gray,
                color: MUITheme.palette.text.lightGrey,
            },
            transition: "all 0.1s"
        };
        return rootStyles;
    },
}));
