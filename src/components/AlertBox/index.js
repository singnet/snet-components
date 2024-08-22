import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { withStyles } from '@mui/styles';

import { useStyles } from './styles';
import AlertLink from './AlertLink';
import AlertIcon from './AlertIcon';
import AlertHeader from './AlertHeader';

export const alertTypes = {
    ERROR: 'error',
    SUCCESS: 'success',
    WARNING: 'warning',
    INFO: 'info',
};

const backgroundColor = {
    error: alertTypes.ERROR,
    success: alertTypes.SUCCESS,
    warning: alertTypes.WARNING,
    info: alertTypes.INFO,
};

const AlertBox = ({
    classes,
    message,
    type = 'error',
    link,
    linkTo,
    children,
    icon,
    header,
}) => {
    if (children) {
        return (
            <div
                className={clsx(
                    classes.messageBox,
                    classes[backgroundColor[type]]
                )}
            >
                {children}
            </div>
        );
    }

    if (message) {
        return (
            <div
                className={clsx(
                    classes.alertBoxContainer,
                    classes[backgroundColor[type]]
                )}
            >
                {icon && <AlertIcon icon={icon} />}
                <div className={classes.content}>
                    {header && <AlertHeader header={header} />}
                    <div className={classes.title}>{message}</div>
                    {link && <AlertLink link={link} linkTo={linkTo} />}
                </div>
            </div>
        );
    }

    return null;
};

AlertBox.propTypes = {
    type: PropTypes.oneOf(['error', 'success', 'warning', 'info']),
    message: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    header: PropTypes.string,
    link: PropTypes.string,
    linkTo: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.node,
};

export default withStyles(useStyles)(AlertBox);
