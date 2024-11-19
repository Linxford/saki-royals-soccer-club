import React, { createContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Brand Colors
const COLORS = {
  primary: '#C41E3A',
  secondary: '#1B5E20',
  background: {
    light: '#f4f4f4',
    dark: '#121212'
  }
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
});

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(() => ({
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  }), []);

  const theme = useMemo(() => responsiveFontSizes(createTheme({
    palette: {
      mode,
      primary: {
        main: COLORS.primary,
      },
      secondary: {
        main: COLORS.secondary,
      },
      background: {
        default: mode === 'light' ? COLORS.background.light : COLORS.background.dark,
        paper: mode === 'light' ? '#ffffff' : '#1e1e1e'
      }
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: 8,
          }
        }
      }
    }
  })), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
