import React, { FC } from 'react';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { StyledTableProps } from './StyledTable.types';
import { useStyles } from './styles';

const StyledTable: FC<StyledTableProps> = ({
    title,
    columns,
    rows,
}) => {
    const classes = useStyles();
    return (
        <div className={classes.styledTable}>
            <Typography variant='h5' className={classes.styledTableHeader}>
                {title}
            </Typography>
            <div className={classes.styledTableContent}>
                <div className={classes.styledTableColumn}>
                    {columns.map((column) => (
                        <Typography key={column.key} variant='body2'>
                            {column.label}
                        </Typography>
                    ))}
                </div>
                {rows.map((row) => (
                    <div
                        key={row.key}
                        className={
                            row.highlight
                                ? classes.styledTableDataHighlighted
                                : undefined
                        }
                    >
                        {row.values.map((value) => (
                            <div key={value.label}>
                                {value.icon && ( value.icon )}
                                <Typography variant='body2'>
                                    {value.label}
                                </Typography>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StyledTable;
