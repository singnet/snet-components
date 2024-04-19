import '@fontsource/material-icons';
import '@fontsource/montserrat';
import '@fontsource/muli';

import { MUITheme } from '../src/assets/Theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/** @type { import('@storybook/react').Preview } */
const preview = {
    parameters: {
        controls: {
            expanded: true,
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },

    decorators: [
        withThemeFromJSXProvider({
            themes: { default: MUITheme },
            defaultTheme: 'default',
            Provider: ThemeProvider,
            GlobalStyles: CssBaseline,
        }),
    ],
};

export default preview;
