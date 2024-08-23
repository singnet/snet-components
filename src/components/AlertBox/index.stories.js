import React from 'react';
import AlertBox, { alertTypes } from './AlertBox';
import WarningIcon from '@mui/icons-material/Warning';

export const AlertBoxWithoutChildren = {
    args: {
        message: 'Alert message',
        header: 'Alert header',
        icon: <WarningIcon />,
        type: alertTypes.INFO,
        link: 'Link name',
        linkTo: 'https://ru.pinterest.com/pin/768919336389252247/',
    },
};

export const WithChildren = {
    args: {
        type: alertTypes.INFO,
        message: 'Alert message',
        header: 'Alert header',
        children: <span>I'm p children!</span>,
    },
};

export const WithLinkTo = {
    args: {
        type: alertTypes.INFO,
        message: 'Alert message',
        header: 'Alert header',
        link: 'Link name',
        linkTo: 'https://ru.pinterest.com/pin/768919336389252247/',
    },
};

export const WithIcon = {
    args: {
        message: 'Alert message',
        header: 'Alert header',
        icon: <WarningIcon />,
    },
};

export default {
    component: AlertBox,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['error', 'success', 'warning', 'info'],
            control: { type: 'radio' },
            default: 'info',
        },
        message: {
            default: 'Alert message',
            control: { type: 'text' },
        },
        header: {
            default: 'Alert header',
            control: { type: 'text' },
        },
        link: {
            default: 'Link name',
            control: { type: 'text' },
        },
        linkTo: {
            default: 'Link address',
            control: { type: 'text' },
        },
        children: {
            default: 'Children components',
            control: { type: 'node' },
        },
        icon: {
            default: <WarningIcon />,
        },
    },
};
