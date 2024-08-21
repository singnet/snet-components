import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import { withStyles } from "@mui/styles";
import InfoIcon from "@mui/icons-material/Info";

import { useStyles } from "./styles";
import StyledTextField from "../StyledTextField";
import AlertText from "../AlertText";

const SNETTextfield = ({
    classes,
    name,
    label,
    helperText,
    value,
    onChange,
    maxCount,
    disabled,
    description,
    infoMsg,
    onKeyUp,
    extraInfo,
    inputRef,
    InputProps,
    error,
    ...rest
}) => {
    const ToolTipComponent = () => {
        return (
            <div className={classes.iconTooltipContainer}>
                <InfoIcon />
                <p>{infoMsg}</p>
            </div>
        );
    };

    const DescriptionComponent = () => {
        return (
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.description}>
                {description}
            </Grid>
        );
    };

    const CountCharComponent = () => {
        return (
            <span className={classes.charLength}>
                {value.length}/{maxCount} char
            </span>
        );
    };

    return (
        <Grid container className={error ? classes.errorField : ""}>
            <Grid item xs={12} sm={12} md={6} lg={6} className={classes.basicTextFieldGrid}>
                {!!infoMsg && <ToolTipComponent />}
                <div className={classes.textFieldWithExtraText}>
                    <StyledTextField
                        name={name}
                        label={label}
                        helperText={helperText}
                        variant="outlined"
                        value={value}
                        onChange={onChange}
                        fullWidth
                        onKeyUp={onKeyUp}
                        disabled={disabled}
                        inputRef={inputRef}
                        InputProps={InputProps}
                        {...rest}
                    />
                    {error && <AlertText type={error.type} message={error.message} />}
                    {maxCount && <CountCharComponent />}
                    {extraInfo && <span className={classes.extraInfo}>{extraInfo}</span>}
                </div>
            </Grid>

            {description && <DescriptionComponent />}
        </Grid>
    );
};

SNETTextfield.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    helperText: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    onChange: PropTypes.func,
};

export default withStyles(useStyles)(SNETTextfield);
