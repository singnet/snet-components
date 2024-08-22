import React from 'react';
import BulletPoint from './index.js';
import { alertTypes } from '../AlertBox/';


export const BulletPointTest = {
    args: {
        message: 'Alert message',
        type: alertTypes.WARNING
    },
};

export default {
    component: BulletPoint,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['error', 'success', 'warning', 'info'],
            control: { type: 'radio' },
            default: 'info',
        },
        message: {
            default: 'Message',
            control: { type: 'text' },
        },
    },
};
