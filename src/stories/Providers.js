import React from "react";
import { ThemeProvider } from "@mui/styles";

const ProviderWrapper = ({ children, theme }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default ProviderWrapper;
