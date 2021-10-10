import React, { ElementType, lazy, Suspense } from 'react';
import GlobalStyle from '@components/GlobalStyle';
import { BrowserRouter as Router, Route, RouteProps, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@src/theme';
import styled from '@theme/styled';
import DevOnlyNavigator from '@components/devOnly';

const MainRouteComponent = lazy(() => import('@routes/MainRoute'));
const SettingsRouteComponent = lazy(() => import('@routes/SettingsRoute'));
const CameraRouteComponent = lazy(() => import('@routes/CameraRoute'));

interface RouteWithLayoutProps extends Omit<RouteProps, 'component'> {
  component: ElementType;
}

const RouteWithLayout = ({ component: Components, ...rest }: RouteWithLayoutProps) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <StyledLayout>
          {process.env.NODE_ENV === 'development' && <DevOnlyNavigator />}
          <Components {...props} />
        </StyledLayout>
      )}
    />
  );
};

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Suspense fallback={<div />}>
            <RouteWithLayout path="/" exact component={MainRouteComponent} />
            <RouteWithLayout path="/settings" exact component={SettingsRouteComponent} />
            <Route path="/camera" exact component={CameraRouteComponent} />
          </Suspense>
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export default App;
