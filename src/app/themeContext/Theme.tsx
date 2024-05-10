import React from "react";
import { ThemeProvider } from "@emotion/react";
import theme from "../theme/defaultTheme";

const Muitheme = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Muitheme;
