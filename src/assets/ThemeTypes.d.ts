import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomTheme extends Theme {
    breakpoints: {
      keys: string[];
      values: {
        [key: OneOf<keys>];
      };
    };
    palette: {
      text: {
        primary: string;
        secondary: string;
        disabled: string;
        red: string;
        darkGrey: string;
        lightGrey: string;
        white: string;
        hover: {
          blue: string;
          black: string;
        };
      };
      primary: {
        main: string;
      };
      purple: {
        main: string;
      };
      background: {
        disabled: { gray: string; };
        hover: {
          blue: string;
          red: string;
        };
        grey: string;
        mainContent: string;
        footer: string;
        white: string;
        black: string;
        red: string;
        succesBox: string;
        alertBox: string;
        warningBox: string;
        infoBox: string;
      };
      border: {
        secondary: string;
        alertBox: string;
        warningBox: string;
        grey: string;
        inputBorder: string;
      };
      success: { main: string };
      error: { main: string };
      infoBoxLink: string;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}

export { CustomThemeOptions, CustomTheme };
