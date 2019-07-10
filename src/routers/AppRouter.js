import React from 'react';
import { Router, Route, Switch, Link, NavLink,Redirect } from 'react-router-dom';
import DashboardPage from '../components/DashboardPage'
import NotFoundPage from '../components/NotFoundPage';
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import Loginbutton from '../components/LoginPage'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      
      <Switch>
        <PublicRoute path="/" component={Loginbutton} exact={ true }/>
        
        <PrivateRoute path="/dashboard" component={DashboardPage} />
      
        <PublicRoute component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
