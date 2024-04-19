import React from 'react';
import { withStyles } from '@mui/styles';

import { useStyles } from './styles';

const AlertHeader = ({ header, classes }) => {
    return <span className={classes.alertHeader}>{header}</span>;
};

export default withStyles(useStyles)(AlertHeader);
