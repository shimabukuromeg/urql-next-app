import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { PaletteMode } from '@mui/material';

export type ColorMode = 'light' | 'dark';

export const ColorModeToggleContext = createContext({
  toggleColorMode: () => {},
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#d9b700',
            contrastText: '#f9f4f4',
          },
        }
      : {
      }),
  },
});


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
    []
  );

  const theme = useMemo(
    () =>
      createTheme(getDesignTokens(mode)),
    [mode]
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
