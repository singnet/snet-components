import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
   interface CustomThemeOptions extends ThemeOptions {
    breakpoints: {

    };
    palette: {

    };
    typography: {

    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

export {CustomThemeOptions}