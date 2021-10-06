import React, { lazy, Suspense } from 'react';
import GlobalStyle from '@components/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@src/theme';

const MainRouteComponent = lazy(() => import('@routes/MainRoute'));
const SettingsRouteComponent = lazy(() => import('@routes/SettingsRoute'));
const CameraRouteComponent = lazy(() => import('@routes/CameraRoute'));

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Suspense fallback={<div />}>
            <Route path="/" exact component={MainRouteComponent} />
            <Route path="/settings" exact component={SettingsRouteComponent} />
            <Route path="/camera" exact component={CameraRouteComponent} />
          </Suspense>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
