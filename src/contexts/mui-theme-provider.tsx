import React, {
  createContext,
  useContext,
  useEffect,
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
  typography: {
    fontFamily: [
      "'M PLUS Rounded 1c'",
      'Noto Sans JP',
      'sans-serif',
    ].join(','),
    poster: {
      color: 'red',
    },
    h1: {
      fontSize: '28px',
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h2: {
      fontSize: '24px',
      lineHeight: 1.5,
      fontWeight: 700,
    },
    h3: {
      fontSize: '20px',
      lineHeight: 1.5,
      fontWeight: 700,
      fontFamily: 'Noto Sans JP',
    },
    body1: {
      fontSize: '14px',
      lineHeight: 1.8,
      fontWeight: 400,
    }
  },
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
  const [mode, setMode] = useState<ColorMode>("light");

  useEffect(() => {
    const mode = (localStorage.getItem("mode") ?? "light") as ColorMode;
    setMode(mode);
    localStorage.setItem("mode", mode);
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          if (prevMode === 'light') {
            localStorage.setItem("mode", 'dark');
          } else {
            localStorage.setItem("mode", 'light');
          }
          return (prevMode === 'light' ? 'dark' : 'light')
        });
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
