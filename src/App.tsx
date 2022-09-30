import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './components/Home/home';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './utils/i18n/config';
import { PrivateRouter } from './router/privateRouter';
import AppDrawer from './components/Menu/appDrawer';

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );
  return (
    <RecoilRoot>
      <BrowserRouter>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <AppDrawer
              inBoxContent={
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/*" element={<PrivateRouter />} />
                </Routes>
              }
            />
          </ThemeProvider>
        </ColorModeContext.Provider>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
