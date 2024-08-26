import React, { FC } from 'react';
import Button from '@mui/material/Button';
import clsx from 'clsx';
import Icon from '@mui/material/Icon';
import { StyledButtonProps, ButtonColorProps, ButtonColorType } from './StyledButton.types';
import { useStyles } from './styles';

const buttonColor: ButtonColorProps = {
    blue: 'blueBg',
    gradient: 'gradientBg',
    black: 'blackBg',
    transparent: 'transparentBg',
    transparentBlueBorder: 'transparentBlueBorder',
    transparentBlueBorderDisable: 'transparentBlueBorderDisable',
    red: 'red',
    redBg: 'redBg',
};

const StyledButton: FC<StyledButtonProps> = ({
    disabled,
    onClick,
    type = 'blue',
    btnType = 'button',
    iconClass,
    btnText,
    ...rest
}) => {
    const classes = useStyles();

    return (
        <Button
            className={clsx(classes.styledButton, classes[buttonColor[type] as ButtonColorType])}
            disabled={disabled}
            onClick={onClick}
            // type={btnType}
            {...rest}
        >
            {iconClass ? <Icon className={iconClass} /> : null}
            {btnText}
        </Button>
    );
};

export default StyledButton;
