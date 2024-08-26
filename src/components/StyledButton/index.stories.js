import SNETTextarea from './';

export const SNETTextareaTest = {
    args: {
        type: 'blue',
        btnType: 'submit',
        btnText: 'Text',
        disabled: false,
        onClick: () => {},
        iconClass: '',
        href: 'https://singularitynet.io',
        openInNewTab: true,
    },
};

export default {
    component: SNETTextarea,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: [
                'blue',
                'gradient',
                'black',
                'transparent',
                'red',
                'redBg',
                'transparentBlueBorder',
                'transparentBlueBorderDisable',
            ],
            control: { type: 'radio' },
            default: 'blue',
        },
        btnType: {
            options: ['submit', 'reset', 'button'],
            control: { type: 'radio' },
            default: 'submit',
        },
        btnText: {
            control: { type: 'text' },
            default: 'Text',
        },
        disabled: {
            options: [true, false],
            control: { type: 'radio' },
            default: false,
        },
        iconClass: {
            control: { type: 'text' },
            default: '',
        },
        href: {
            control: { type: 'text' },
            default: 'href',
        },
        openInNewTab: {
            options: [true, false],
            control: { type: 'radio' },
            default: false,
        },
        onChange: {
            default: () => {},
        },
    },
};
