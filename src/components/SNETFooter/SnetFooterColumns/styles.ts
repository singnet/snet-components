import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
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
