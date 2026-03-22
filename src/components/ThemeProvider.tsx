"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// We have to ignore the type error here because next-themes types aren't fully exporting ThemeProviderProps in some older TS setups without deep imports.
export function ThemeProvider({ children, ...props }: any) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
