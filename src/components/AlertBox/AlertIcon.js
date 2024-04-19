import React from 'react';
import { withStyles } from '@mui/styles';
import { useStyles } from './styles';

const AlertIcon = ({ classes, icon }) => {
    return <div className={classes.iconContainer}>{icon}</div>;
};

export default withStyles(useStyles)(AlertIcon);
