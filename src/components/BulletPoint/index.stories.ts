import BulletPoint from './BulletPoint';
import { alertTypes } from '../AlertBox/AlertBox';


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
