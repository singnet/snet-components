import AnchorLink from './';

export const AnchorLinkTest = {
    args: {
        label: 'link message',
        href: 'https://singularitynet.io',
        openInNewTab: true,
    },
};

export default {
    component: AnchorLink,
    tags: ['autodocs'],
    argTypes: {
        label: {
            default: 'Link name',
            control: { type: 'text' },
        },
        href: {
            default: 'https://singularitynet.io',
            control: { type: 'text' },
        },
        openInNewTab: {
            default: false,
            options: [false, true],
            control: { type: 'radio' },
        },
    },
};
