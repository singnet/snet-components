import AlertText from './AlertText';
import { alertTypes } from '../AlertBox';

export const AlertTextTest = {
    args: {
        message: 'Alert message',
        type: alertTypes.INFO,
    },
};

export default {
    component: AlertText,
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
    },
};
