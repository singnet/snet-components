import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider as MUIThemeProvider } from "@mui/styles";
import { MUITheme } from "shared/dist/assets/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MUIThemeProvider theme={MUITheme}>
      <App />
    </MUIThemeProvider>
  </React.StrictMode>
);
