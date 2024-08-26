import React, { FC } from 'react';
import TextField from '@mui/material/TextField';
import { StyledTextFieldProps } from './StyledTextField.types';
import { useStyles } from './styles';

const StyledTextField: FC<StyledTextFieldProps> = ({
    label,
    handleChange,
    value,
    ...rest
}) => {
    const classes = useStyles();
    return (
        <TextField
            id='outlined-name'
            label={label}
            className={classes.styledTextField}
            value={value}
            onChange={handleChange}
            margin='normal'
            variant='outlined'
            {...rest}
        />
    );
};

export default StyledTextField;
