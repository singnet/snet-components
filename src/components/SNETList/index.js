import MuiList from "@mui/material/List";
import { withStyles } from "@mui/styles";
import PropTypes from "prop-types";

const SNETList = withStyles({
    root: (props) => {
        if (props.display === "inline") {
            return {
                display: "flex",
                flexDirection: "row",
                padding: 0,
            };
        }
    },
})(MuiList);

SNETList.propTypes = {
    display: PropTypes.string,
};
export default SNETList;
