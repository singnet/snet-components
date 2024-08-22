import React from 'react';
import PageNotFound from './index.js';
import { MemoryRouter } from 'react-router-dom';

export const PageNotFoundTest = {
    args: {
        homePath: "/home",
    },
};

export default {
    component: PageNotFound,
    decorators: [
        (Story) => (
            <MemoryRouter>
                <Story />
            </MemoryRouter>
        ),
    ],
    tags: ['autodocs'],
    argTypes: {
        homePath: {
            control: { type: 'text' },
            defaultValue: "/home",
        },
    },
};
