import React, { createContext, useContext, useMemo, useState, Dispatch, SetStateAction } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export type ColorMode = "light" | "dark";

export const ColorModeToggleContext = createContext({ toggleColorMode: () => {} });

export const MuiThemeProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [mode, setMode] = useState<ColorMode>('dark');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeToggleContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeToggleContext.Provider>
  );
};

export const useColorModeSelectContext = () => {
  return useContext(ColorModeToggleContext);
};
