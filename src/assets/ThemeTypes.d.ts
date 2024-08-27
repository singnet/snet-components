import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
  // }
  // // allow configuration using `createTheme`
  // interface CustomThemeOptions extends ThemeOptions {
    breakpoints: {

    };
    palette: {
      text: {
        primary: string,
        secondary: string,
        disabled: string,
        statusRed: string,
        red: string,
        darkGrey: string,
        lightGrey: string,
        footerText: string,
        white: string,
        black: string,
        hover: {
            blue: string,
            red: string,
            black: string,
            dark: string,
        },
      },
      primary: {
          main: string,
          dark: string,
      },
      secondary: {
          main: string,
          dark: string,
      },
      purple: {
          main: string,
          light: string,
      },
      background: {
          disabled: { gray: string, lightGray: string },
          hover: {
              blue: string,
              red: string,
              redLight: string,
              black: string,
          },
          grey: string,
          mainContent: string,
          footer: string,
          white: string,
          black: string,
          red: string,
          succesBox: string,
          alertBox: string,
          warningBox: string,
          infoBox: string,
        },
        border: {
            primary: string,
            secondary: string,
            mainContent: string,
            alertBox: string,
            warningBox: string,
            grey: string,
            inputBorder: string,
        },
        success: { main: string},
        error: { main: string},
        infoBoxLink: string},
        warning: { main: string},
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

export {CustomThemeOptions}