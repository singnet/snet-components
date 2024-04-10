import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import AlertBox from "shared/dist/components/AlertBox";
import validator from "shared/dist/utils/validator";
import { forgotPassworSubmitConstraints } from "./validationConstraints";
import SNETForgotPassword from "shared/dist/components/SNETForgotPassword";

const SNETForgotPasswordConfirm = ({
    email,
    title,
    description,
    forgotPasswordConfirmError,
    onSubmit,
}) => {
    const classes = useStyles();
    const [localEmail, setLocalEmail] = useState(email);
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [validationErr, setValidationErr] = useState("");

    useEffect(() => {
        if (email) {
            setLocalEmail(email.toLowerCase());
        }
    }, [email]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setValidationErr("");
        const isNotValid = validator(
            { password, confirmPassword, code, localEmail },
            forgotPassworSubmitConstraints
        );
        if (isNotValid) {
            setValidationErr(isNotValid[0]);
            return;
        }
        // Assuming the user state has the email, no need to explicitly pass it to this component
        onSubmit(localEmail, code, password);
    };

    const confirmFieldsData = [
        {
            id: "outlined-email-input",
            label: "Email",
            type: "email",
            name: "email",
            value: localEmail,
            onChange: setLocalEmail,
        },
        {
            id: "outlined-code-input",
            label: "Code",
            type: "code",
            name: "code",
            value: code,
            onChange: setCode,
        },
        {
            id: "outlined-new-password-input",
            label: "New Password",
            type: "password",
            name: "password",
            margin: "normal",
            value: password,
            onChange: setPassword,
        },
        {
            id: "outlined-confirm-password-input",
            label: "Confirm Password",
            type: "password",
            name: "password",
            value: confirmPassword,
            onChange: setConfirmPassword,
        },
    ];

    return (
        <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={12} lg={12} className={classes.forgotPwdContent}>
                <Typography variant="h3">{title}</Typography>
                <Typography>{description}</Typography>
                <form className={classes.forgotPwdForm}>
                    {confirmFieldsData.map((field) => (
                        <TextField
                            key={field.id}
                            id={field.id}
                            label={field.label}
                            className={classes.textField}
                            autoComplete="off"
                            type={field.type}
                            name={field.name}
                            margin="normal"
                            variant="outlined"
                            value={field.value}
                            required
                            onChange={(e) => field.onChange(e.target.value)}
                        />
                    ))}
                    <AlertBox type="error" message={validationErr || forgotPasswordConfirmError} />
                    <Button
                        className={classes.actionButton}
                        color="primary"
                        variant="contained"
                        children="reset password"
                        type="submit"
                        onClick={handleSubmit}
                    />
                </form>
            </Grid>
        </Grid>
    );
};

SNETForgotPasswordConfirm.propTypes = {
    title: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    forgotPasswordConfirmError: PropTypes.string,
    onSubmit: PropTypes.func,
};

SNETForgotPassword.defaultProps = {
    title: "Reset your password",
    description: (
        <>
            Thanks for confirming your email.<span>Input your new password</span>
        </>
    ),
};

export default SNETForgotPasswordConfirm;
