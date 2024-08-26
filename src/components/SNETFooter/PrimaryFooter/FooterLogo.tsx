import React, { FC } from 'react';
import { useStyles } from './styles';
import Logo from '../../../assets/images/WhiteLogo.svg';
import { FooterCopyrightProps } from "../SNETFooter.types";

const FooterLogo:FC<FooterCopyrightProps> = () => {
    const classes = useStyles();
    return (
        <div className={classes.FooterLogo}>
            <h1>
                <a href='/' title='SingularityNET'>
                    <img src={Logo} alt='SingularityNET' />
                </a>
            </h1>
        </div>
    );
};

export default FooterLogo;
