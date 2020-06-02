import React from 'react';
import {Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
// import {createMemoryHistory} from 'history';

import * as Views from './views';

import SimpleLayout from './views/layouts/SimpleLayout';
import AuthLayout from './views/layouts/AuthLayout';
import StaticLayout from './views/layouts/StaticLayout';
import DefaultLayout from './views/layouts/DefaultLayout';

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'home' */ './views/home/Home'),
  loading: () => <div>Loading...</div>, // eslint-disable-line
});

const LoadableAbout = Loadable({
  loader: () => import(/* webpackChunkName: 'about' */ './views/about/About'),
  loading: () => <div>Loading...</div> // eslint-disable-line
});

// const history = createMemoryHistory();

const Routes = () => (
  <Switch>
    <StaticLayout exact path="/" component={LoadableHome} />
    <SimpleLayout path="/about" component={LoadableAbout} />
    <AuthLayout path="/login" component={Views.Login} />
    <AuthLayout path="/signup" component={Views.SignUp} />
    <AuthLayout path="/forgot/password" component={Views.ForgotPassword} />

    <DefaultLayout path="/dashboard" component={Views.Dashboard} />
    <DefaultLayout path="/orders" component={Views.MyOrders} />
    <DefaultLayout path="/settings" component={Views.Settings} />
  </Switch>
);

export default Routes;
