"use client";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React from "react";
import MuiTheme from "./Theme";
import { SmallScreenProvider } from "../context/smallScreeen";

const index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SmallScreenProvider>
      <AppRouterCacheProvider options={{ key: "css" }}>
        <MuiTheme>{children}</MuiTheme>
      </AppRouterCacheProvider>
    </SmallScreenProvider>
  );
};

export default index;
