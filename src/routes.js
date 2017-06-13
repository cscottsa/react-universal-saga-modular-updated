import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  LandingPage,
  DashboardPage,
  NotFound
} from 'containers';

export default () => (
  <Route path="/">
    <IndexRoute component={LandingPage} />
    <Route path="dashboard" component={DashboardPage} />
    <Route path="/404" component={NotFound} />
    <Route path="*" component={NotFound} />
  </Route>
);
