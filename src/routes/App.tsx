import React, { lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import GlobalStyle from '@components/GlobalStyle';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const MainRouteComponent = lazy(() => import('@routes/MainRoute'));
const SettingsRouteComponent = lazy(() => import('@routes/SettingsRoute'));

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      {/* @iWan: We need a page router for below canvas! This is the temporary placement */}
      <Router>
        <Switch>
          <Suspense fallback={<div />}>
            <Route path="/" exact component={MainRouteComponent} />
            <Route path="/settings" exact component={SettingsRouteComponent} />
          </Suspense>
        </Switch>
      </Router>
    </>
  );
};

export default hot(App);
