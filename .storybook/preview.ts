import type { Preview } from "@storybook/react";

import { ThemeProvider, CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

import '@fontsource/material-icons';
import '@fontsource/montserrat';
import '@fontsource/muli';

import { MUITheme } from '../src/assets/Theme';

const preview: Preview = {
  parameters: {
    controls: {
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
