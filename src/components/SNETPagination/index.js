import React from "react";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import PropTypes from "prop-types";

import { useStyles } from "./styles";

const SNETPagination = ({
    limit,
    offset,
    totalCount,
    itemsPerPageOptions,
    itemsPerPage,
    onItemsPerPageChange,
    onPageChange,
}) => {
    const classes = useStyles();

    const handleItemsPerPage = (event) => {
        onItemsPerPageChange(parseFloat(event.target.value));
    };

    const handlePageChange = (selectedOffset) => {
        if (selectedOffset === parseFloat(offset)) {
            return;
        }
        onPageChange(parseFloat(selectedOffset));
    };

    const from = offset;
    const to = parseFloat(offset) + parseFloat(limit);

    return (
        <Grid container spacing={24} className={classes.paginationContainer}>
            <Grid item xs={6} sm={6} md={6} lg={6} className={classes.pagination}>
                <Pagination
                    limit={limit}
                    offset={offset}
                    total={totalCount}
                    reduced="true"
                    onClick={(_e, offset) => handlePageChange(offset)}
                    className={classes.styledPagination}
                />
            </Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} className={classes.pageCountSection}>
                <span className={classes.itemPerPageTxt}>Items per page</span>
                <FormControl variant="outlined" className={classes.pageListformControl}>
                    <Select
                        value={itemsPerPage}
                        input={
                            <OutlinedInput
                                name="age"
                                id="outlined-age-simple"
                                onChange={handleItemsPerPage}
                            />
                        }
                        className={classes.selectBox}
                    >
                        {itemsPerPageOptions?.map((item) => (
                            <MenuItem key={item.value} value={item.value}>
                                {item.label}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <span>
                    {from}-{to} of {totalCount}
                </span>
            </Grid>
        </Grid>
    );
};

SNETPagination.propTypes = {
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired,
    totalCount: PropTypes.number.isRequired,
    itemsPerPageOptions: PropTypes.arrayOf(
        PropTypes.shape({ value: PropTypes.number, label: PropTypes.string })
    ).isRequired,
    itemsPerPage: PropTypes.number.isRequired,
    onItemsPerPageChange: PropTypes.func.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default SNETPagination;
